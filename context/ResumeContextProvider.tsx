"use client";
import React, { useState } from "react";
import ResumeContext from "./Resume";
import { ResumeType } from "@/types";
import { emptyResume } from "@/lib/emptyResume";

const ResumeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [resume, setResume] = useState<ResumeType>(emptyResume);
  
  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
