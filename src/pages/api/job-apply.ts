import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface JobApplyBody {
  firstName: string;
  lastName: string;
  email: string;
  mobile?: string;
  position: string;
  lastCompany?: string;
  qualification?: string;
  overallExperience?: string;
  message?: string;
  jobId?: string;
}

function sanitize(s: string | undefined): string {
  return (s ?? "").replace(/[<>]/g, "").trim();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; error?: string }>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = (req.body ?? {}) as JobApplyBody;
  const {
    firstName,
    lastName,
    email,
    mobile,
    position,
    lastCompany,
    qualification,
    overallExperience,
    message,
    jobId,
  } = body;

  if (!sanitize(firstName) || !sanitize(email) || !sanitize(position)) {
    return res.status(400).json({
      ok: false,
      error: "First name, email, and position are required",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email format" });
  }

  // Send email to admin
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || process.env.EMAIL_TO || "sandeep@sspartners.in";
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASSWORD;

  if (emailUser && emailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: emailUser, pass: emailPass },
      });

      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a0909;">New Job Application</h2>
          <hr style="border: none; border-top: 2px solid #fa6400; margin: 20px 0;">
          <p><strong>Position:</strong> ${sanitize(position)}</p>
          <p><strong>Name:</strong> ${sanitize(firstName)} ${sanitize(lastName)}</p>
          <p><strong>Email:</strong> ${sanitize(email)}</p>
          <p><strong>Mobile:</strong> ${sanitize(mobile) || "-"}</p>
          <p><strong>Last Company:</strong> ${sanitize(lastCompany) || "-"}</p>
          <p><strong>Qualification:</strong> ${sanitize(qualification) || "-"}</p>
          <p><strong>Experience:</strong> ${sanitize(overallExperience) || "-"}</p>
          ${sanitize(message) ? `<p><strong>Message:</strong><br>${sanitize(message).replace(/\n/g, "<br>")}</p>` : ""}
          <hr style="border: none; border-top: 2px solid #fa6400; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">Job application from careers page.</p>
        </div>
      `;

      await transporter.sendMail({
        from: emailUser,
        to: adminEmail,
        replyTo: sanitize(email),
        subject: `Job Application: ${sanitize(position)} - ${sanitize(firstName)} ${sanitize(lastName)}`,
        html,
      });
    } catch (emailErr) {
      console.error("Job apply email error:", emailErr);
      // Still return success - application may have been saved to DB
    }
  }

  return res.status(200).json({ ok: true });
}
