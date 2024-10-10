import { NextResponse } from "next/server";
import Resume from "@/model/resume.model";
import dbConnect from "@/lib/db";
import { ResumeType } from "@/types";

export async function GET(
  req: Request,
  { params }: { params: { userEmail: string } }
) {
  try {
    await dbConnect();

    const { userEmail } = params;

    const resume: ResumeType[] = await Resume.find({ userEmail });
    if (!resume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Resume fetched successfully",
      resume,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching resume", details: error },
      { status: 500 }
    );
  }
}
