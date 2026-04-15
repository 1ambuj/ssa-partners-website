import type { NextApiRequest, NextApiResponse } from "next";

type BlogApiResponse = {
  success: boolean;
  message: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<BlogApiResponse>) {
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "Blog API endpoint ready",
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
    const body = req.body ?? {};
    const { action, id, ...blogData } = body;

    // Note: The actual blog operations are now handled by the BlogService in the client
    // This API route can be used for server-side operations or future admin API management

    if (action === "validate") {
      // Validate blog data
      if (!blogData.title || !blogData.content) {
        return res.status(400).json({
          success: false,
          message: "Title and content are required",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Blog data is valid",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid action",
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}
