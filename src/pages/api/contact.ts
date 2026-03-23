import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactBody = {
  name?: string;
  designation?: string;
  organisation?: string;
  officeAddress?: string;
  city?: string;
  email?: string;
  mobile?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

type ContactResponse =
  | { ok: true }
  | { ok: false; error: string };

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function sanitizeLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, designation, organisation, officeAddress, city, email, mobile, phone, subject, message } = (req.body ?? {}) as ContactBody;
  const phoneNum = mobile || phone;

  if (!isNonEmpty(name)) {
    return res.status(400).json({ ok: false, error: "Name is required" });
  }
  if (!isNonEmpty(email)) {
    return res.status(400).json({ ok: false, error: "Email is required" });
  }
  if (!isNonEmpty(message)) {
    return res.status(400).json({ ok: false, error: "Message is required" });
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const mailToRaw = process.env.MAIL_TO;
  const mailFrom = process.env.MAIL_FROM || user;

  const mailTo = (mailToRaw || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!host || !port || !user || !pass || mailTo.length === 0 || !mailFrom) {
    return res.status(500).json({
      ok: false,
      error: "Server email is not configured",
    });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const emailSubject = isNonEmpty(subject)
    ? `Website enquiry: ${sanitizeLine(subject)}`
    : `New website message from ${sanitizeLine(name)}`;
  const lines = [
    `Name: ${sanitizeLine(name)}`,
    `Email: ${sanitizeLine(email)}`,
    `Phone: ${isNonEmpty(phoneNum) ? sanitizeLine(phoneNum) : "-"}`,
  ];
  if (isNonEmpty(designation)) lines.push(`Designation: ${sanitizeLine(designation)}`);
  if (isNonEmpty(organisation)) lines.push(`Organisation: ${sanitizeLine(organisation)}`);
  if (isNonEmpty(officeAddress)) lines.push(`Office Address: ${sanitizeLine(officeAddress)}`);
  if (isNonEmpty(city)) lines.push(`City: ${sanitizeLine(city)}`);
  if (isNonEmpty(subject)) lines.push(`Subject: ${sanitizeLine(subject)}`);
  lines.push("", "Message:", message.trim());
  const text = lines.join("\n");

  try {
    const info = await transporter.sendMail({
      to: mailTo,
      from: mailFrom,
      replyTo: sanitizeLine(email),
      subject: emailSubject,
      text,
    });
    // Helpful for debugging delivery delays (Gmail can sometimes be slow/spam-filter).
    console.log("[contact] sent", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
      envelope: info.envelope,
    });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
}

