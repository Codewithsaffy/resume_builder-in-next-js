"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { emptyResume } from "@/lib/emptyResume";
import ResumeContext from "@/context/Resume";
import { useRouter } from "next/navigation";

import React, { useContext, useState } from "react";

const CreateProject = ({
  children,
  userEmail,
}: {
  children: React.ReactNode;
  userEmail: string;
}) => {
  const { setResume, resume } = useContext(ResumeContext);
  const router = useRouter();
  const [input, setInput] = useState("");
  const handleSubmit = async () => {
    if (resume && input.trim() !== "") {
      // console.log("before resume", resume);
      setResume(emptyResume);
      setResume({
        ...resume,
        projectName: input,
        userEmail: userEmail,
      });

      router.push("/resume/generate-resume");
      // setMessage("Project created successfully");
      // console.log("after resume", resume);
    } else {
      setResume(emptyResume);
      // setMessage("Project not created");
      router.push("/dashboard");
    }
  };
  console.log("crea", resume);
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="bg-white text-black">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            <Input
              placeholder="Project Name"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              minLength={3}
              maxLength={30}
              required
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-red-500 rounded-lg text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="rounded-lg text-white"
            onClick={() => handleSubmit()}
          >
            Create
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateProject;
