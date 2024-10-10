"use client";
import { useContext, useEffect, useState } from "react";
import ResumeContext from "@/context/Resume";
import { getResumeWillUpdate } from "@/helper/axios";
import { emptyResume } from "@/lib/emptyResume";
import ResumeActions from "@/components/custom/buttons/ResumAciton";
import ResumeTemplate from "@/components/custom/main/ResumeTemplete";

export default function Resume({ params }: { params: { userName: string, resumeId: string } }) {
  const { userName, resumeId } = params;
  const { resume, setResume } = useContext(ResumeContext);
  const [theme, setTheme] = useState("blue");

  // Fetch resume on component mount
  const getResume = async () => {
    try {
      const res = await getResumeWillUpdate(userName, resumeId);
      if (res.data.resume) {
        setResume(res.data.resume);
      } else {
        setResume(emptyResume);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResume();
  });

  // Theme colors for various options
  const themes = {
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900",
      text: "text-blue-900 dark:text-blue-100",
      accent: "bg-blue-500",
    },
    red: {
      bg: "bg-red-100 dark:bg-red-900",
      text: "text-red-900 dark:text-red-100",
      accent: "bg-red-500",
    },
    green: {
      bg: "bg-green-100 dark:bg-green-900",
      text: "text-green-900 dark:text-green-100",
      accent: "bg-green-500",
    },
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900",
      text: "text-purple-900 dark:text-purple-100",
      accent: "bg-purple-500",
    },
    orange: {
      bg: "bg-orange-100 dark:bg-orange-900",
      text: "text-orange-900 dark:text-orange-100",
      accent: "bg-orange-500",
    },
    pink: {
      bg: "bg-pink-100 dark:bg-pink-900",
      text: "text-pink-900 dark:text-pink-100",
      accent: "bg-pink-500",
    },
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <ResumeActions theme={theme} setTheme={setTheme} handlePrint={handlePrint} />
      {resume && <ResumeTemplate resume={resume} theme={themes[theme as keyof typeof themes]} />}
    </div>
  );
}
