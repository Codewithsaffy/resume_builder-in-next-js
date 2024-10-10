import { NextResponse } from "next/server";
import Resume from "@/model/resume.model";
import connectDB from "@/lib/db";
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
