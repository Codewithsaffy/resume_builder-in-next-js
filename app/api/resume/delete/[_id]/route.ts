import dbConnect from "@/lib/db";
import Resume from "@/model/resume.model";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { _id: string } }
) {
  const { _id } = params;
  try {
    await dbConnect();
    const deleteResume = await Resume.findByIdAndDelete(_id);
    if (!deleteResume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Resume deleted successfully",
      resume: deleteResume,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting resume" },
      { status: 500 }
    );
  }
}
