import React from "react";
import HomeButton from "../buttons/Home";
import Back from "../buttons/Back";
import { usePathname } from "next/navigation";
import Next from "../buttons/Next";

const SubNavebar = ({
  backUrl,
  nextUrl,
}: {
  backUrl?: string;
  nextUrl?: string;
}) => {
  const path = usePathname();
  return (
    <div className="flex items-center justify-between w-full">
      <HomeButton />
      <div>
        {path !== "/resume/generate-resume/personal-detail" && (
          <Back link={backUrl!} />
        )}
        {path === "/resume/generate-resume/skill" && <Next link={nextUrl!} />}
      </div>
    </div>
  );
};

export default SubNavebar;
