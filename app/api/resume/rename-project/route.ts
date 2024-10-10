import { NextResponse } from "next/server";
import Resume from "@/model/resume.model";
import connectDB from "@/lib/db";

export async function PUT(req: Request) {
  try {
    await connectDB();
    const { _id, projectName } = await req.json();

    // Check if the project name already exists
    const existingProject = await Resume.findOne({ projectName });
    if (existingProject && existingProject._id.toString() !== _id) {
      return NextResponse.json(
        { error: "Project name already exists, please choose a different one" },
        { status: 400 }
      );
    }

    // Update the project name
    const updatedResume = await Resume.findByIdAndUpdate(
      _id,
      { projectName },
      { new: true }
    );

    if (!updatedResume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Project name updated successfully",
      resume: updatedResume,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating project name", details: error },
      { status: 500 }
    );
  }
}
