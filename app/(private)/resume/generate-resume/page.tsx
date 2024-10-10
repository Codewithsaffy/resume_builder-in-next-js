"use client";
import HomeButton from "@/components/custom/buttons/Home";
import Education from "@/components/custom/form/Education";
import Experience from "@/components/custom/form/Experience";
import PersonalDetail from "@/components/custom/form/PersonalDetail";
import Skills from "@/components/custom/form/Skills";
import Summary from "@/components/custom/form/Summary";
import { Button } from "@/components/ui/button";
import ResumeContext from "@/context/Resume";
import { emptyResume } from "@/lib/emptyResume";
import { createResume } from "@/helper/axios";
import {
  faArrowLeft,
  faArrowRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";

function GenerateResume() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { resume, setResume } = useContext(ResumeContext);

  const [message, setMessage] = useState("");
  const feild = [
    <PersonalDetail key={count} />,
    // <SocailLinks />,
    <Summary key={count} />,
    <Education key={count} />,
    <Experience key={count} />,
    <Skills key={count} />,
  ];

  const handleGenerate = async () => {
    alert("hello world");
    const {
      education,
      personalDetail,
      professionalExperience,
      projectName,
      skill,
      summary,
      // socialLinks,
      userEmail,
    } = resume;

    setLoading(true);
    try {
      if (
        !education ||
        !personalDetail ||
        !professionalExperience ||
        !projectName ||
        !skill ||
        !summary ||
        // !socialLinks ||
        !userEmail
      ) {
        setMessage("Please fill all the fields");
        return new Error("Please fill all the fields");
      }
      const respose = await createResume(resume);
      console.log(respose);
      setMessage("Resume generated successfully");
      setResume(emptyResume);
    } catch (error) {
      setMessage("Error generating resume");
      setResume(emptyResume);
    } finally {
      console.log(message);
      setLoading(false);
    }
    console.log(message);
  };
  return (
    <div className="main grid   grid-cols-12 items-center justify-center min-h-[calc(100vh-64px)]">
      <div
        className="flex justify-center bg-card dark:bg-secondary shadow-md rounded-xl p-4 items-center flex-col col-span-8 col-start-3
        gap-5"
      >
        <div className="flex justify-between items-center w-full">
          <div>
            <HomeButton />
          </div>
          <div className="flex gap-1">
            {count !== 0 && (
              <Button onClick={() => setCount(count - 1)}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
            )}
            {count < feild.length - 1 && (
              <Button
                onClick={() => setCount(count + 1)}
                className="flex items-center justify-center gap-2"
              >
                Next
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            )}
          </div>
        </div>
        {feild[count]}
        {count === feild.length - 1 && (
          <Button className="hover:bg-red-500" onClick={() => handleGenerate()}>
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            ) : (
              "Generate"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
export default GenerateResume;
