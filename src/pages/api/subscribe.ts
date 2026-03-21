import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type SubscribeBody = {
  email?: string;
};

type SubscribeResponse =
  | { ok: true }
  | { ok: false; error: string };

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubscribeResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { email } = (req.body ?? {}) as SubscribeBody;

  if (!isNonEmpty(email) || !isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "Valid email is required" });
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

  const subject = `Website footer: Contact request from ${email.trim()}`;
  const text = [
    "Someone submitted their email via the website footer (We'll contact you shortly).",
    "",
    `Email: ${email.trim()}`,
    "",
    "Please contact them at your earliest convenience.",
  ].join("\n");

  try {
    const info = await transporter.sendMail({
      to: mailTo,
      from: mailFrom,
      replyTo: email.trim(),
      subject,
      text,
    });
    console.log("[subscribe] sent", {
      messageId: info.messageId,
      accepted: info.accepted,
    });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ ok: false, error: "Failed to send" });
  }
}
