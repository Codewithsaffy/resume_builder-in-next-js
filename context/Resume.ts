import { emptyResume } from "@/lib/emptyResume";
import { ResumeType } from "@/types";
import { createContext, Dispatch, SetStateAction } from "react";

interface ResumeContextType {
  resume: ResumeType;
  setResume: Dispatch<SetStateAction<ResumeType>>;
}
const ResumeContext = createContext<ResumeContextType>({
  resume: emptyResume,
  setResume: () => {},
});

export default ResumeContext;
