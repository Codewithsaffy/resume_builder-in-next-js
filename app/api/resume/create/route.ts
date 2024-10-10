import { NextResponse } from "next/server";
import Resume from "@/model/resume.model";
import dbConnect from "@/lib/db";
import { ResumeType } from "@/types";
export async function POST(req: Request) {
  try {
    await dbConnect();
    const {
      userEmail,
      projectName,
      personalDetail,
      // socialLinks,
      summary,
      professionalExperience,
      education,
      skill
    }: ResumeType = await req.json();
    const newResume = await new Resume(
      {
        userEmail,
        projectName,
        personalDetail,
        // socialLinks,
        summary,
        professionalExperience,
        education,
        skill
      }
    );

    const savedResume = await newResume.save();

    return NextResponse.json({
      message: "Resume created successfully",
      resume:savedResume
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating resume" },
      { status: 500 }
    );
  }
}
