import { NextResponse } from "next/server";
import Resume from "@/model/resume.model";
import connectDB from "@/lib/db";

// Update resume handler
export async function PUT(req: Request) {
  try {
    await connectDB();
    const { _id, ...updateData } = await req.json();

    const updatedResume = await Resume.findByIdAndUpdate(_id, updateData, {
      new: true,
    });

    if (!updatedResume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Resume updated successfully",
      resume: updatedResume,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating resume", details: error },
      { status: 500 }
    );
  }
}

// Get resume handler
export async function GET(
  req: Request,
  { params }: { params: { _id: string; userEmail: string } }
) {
  try {
    await connectDB();
    const { _id, userEmail } = params;

    const resume = await Resume.findOne({ _id, userEmail });

    if (!resume) {
      return NextResponse.json(
        { error: "Resume not found or user may not be authorized" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Resume fetched successfully",
      _id,
      userEmail,
      resume,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching resume", details: error },
      { status: 500 }
    );
  }
}
