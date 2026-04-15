import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

interface FeedbackData {
  clientName: string;
  email: string;
  phone: string;
  company?: string;
  overallRating: number;
  serviceQuality: number;
  communication: number;
  timeliness: number;
  costValue: number;
  wouldRecommend: number;
  comments: string;
  service?: string;
  serviceRating?: number;
}

function generateFeedbackEmailHTML(data: FeedbackData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Feedback Received</h2>
      <hr style="border: none; border-top: 2px solid #007bff; margin: 20px 0;">
      
      <h3 style="color: #555;">Client Information</h3>
      <p><strong>Name:</strong> ${data.clientName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      ${data.service ? `<p><strong>Service:</strong> ${data.service}</p>` : ""}
      
      <h3 style="color: #555;">Ratings</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Overall Rating</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.overallRating}/5</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Service Quality</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.serviceQuality}/5</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Communication</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.communication}/5</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Timeliness</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.timeliness}/5</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Cost Value</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.costValue}/5</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Would Recommend</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.wouldRecommend}/5</td>
        </tr>
        ${
          data.serviceRating
            ? `
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Service Specific Rating</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.serviceRating}/5</td>
        </tr>
        `
            : ""
        }
      </table>
      
      <h3 style="color: #555; margin-top: 20px;">Comments</h3>
      <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; line-height: 1.6;">
        ${data.comments.replace(/\n/g, "<br>")}
      </p>
      
      <hr style="border: none; border-top: 2px solid #007bff; margin: 20px 0;">
      <p style="font-size: 12px; color: #999;">This is an automated email from the feedback system.</p>
    </div>
  `;
}

type FeedbackResponse = {
  success: boolean;
  message: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<FeedbackResponse>) {
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "Feedback API endpoint ready",
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const body = (req.body ?? {}) as FeedbackData;

    // Validate required fields
    const requiredFields = [
      "clientName",
      "email",
      "phone",
      "overallRating",
      "comments",
    ];
    for (const field of requiredFields) {
      if (!body[field as keyof FeedbackData]) {
        return res.status(400).json({
          success: false,
          message: `${field} is required`,
        });
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Validate phone (should be digits)
    if (body.phone.replace(/\D/g, "").length < 10) {
      return res.status(400).json({
        success: false,
        message: "Phone number must have at least 10 digits",
      });
    }

    // Send email notification to admin
    if (
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASSWORD &&
      process.env.NEXT_PUBLIC_ADMIN_EMAIL
    ) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        subject: `New Feedback from ${body.clientName}`,
        html: generateFeedbackEmailHTML(body),
      });

      // Send confirmation email to client
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: body.email,
        subject: "Thank you for your feedback",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Thank You!</h2>
            <p>Dear ${body.clientName},</p>
            <p>We appreciate you taking the time to provide your feedback. Your input helps us improve our services.</p>
            <p>If you have any additional comments or concerns, please don't hesitate to reach out to us.</p>
            <p>Best regards,<br>Our Team</p>
          </div>
        `,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Feedback submitted successfully",
    });
  } catch (error: unknown) {
    console.error("Error submitting feedback:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
    });
  }
}
