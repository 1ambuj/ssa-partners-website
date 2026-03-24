import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, id, ...blogData } = body;

    // Note: The actual blog operations are now handled by the BlogService in the client
    // This API route can be used for server-side operations or future admin API management

    if (action === "validate") {
      // Validate blog data
      if (!blogData.title || !blogData.content) {
        return NextResponse.json(
          {
            success: false,
            message: "Title and content are required",
          },
          { status: 400 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Blog data is valid",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid action",
      },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
    message: "Blog API endpoint ready",
  });
}
