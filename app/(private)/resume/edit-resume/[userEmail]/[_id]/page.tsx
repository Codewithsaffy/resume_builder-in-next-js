"use client";
import HomeButton from "@/components/custom/buttons/Home";
import Education from "@/components/custom/form/Education";
import Experience from "@/components/custom/form/Experience";
import PersonalDetail from "@/components/custom/form/PersonalDetail";
import Skills from "@/components/custom/form/Skills";
import Summary from "@/components/custom/form/Summary";
import { Button } from "@/components/ui/button";
import ResumeContext from "@/context/Resume";
import { editResume, getResumeWillUpdate } from "@/helper/axios";
import {
  faArrowLeft,
  faArrowRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";

function EditResume({ params }: { params: { _id: string; userEmail: string } }) {
  const { _id, userEmail } = params;
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { resume, setResume } = useContext(ResumeContext);

  // Fetch resume on component mount
  const getResume = async () => {
    setLoading(true);
    try {
      const res = await getResumeWillUpdate(userEmail, _id);
      if (res.data?.resume) {
        setResume(res.data.resume);
      } else {
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResume();
  }, []);

  // Update resume logic
  const updateResume = async () => {
    setLoading(true);
    // setMessage(""); // Clear any existing message before starting
    try {
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

      // Validation: Ensure all necessary fields are filled
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
        // setMessage("Please fill all the fields");
        setLoading(false); // Stop loading on validation failure
        return;
      }

      // Call API to update the resume
      const response = await editResume(resume);
      if (response?.message) {
        // setMessage("Resume updated successfully");
      } else {
        // setMessage("Error updating resume");
      }
    } catch (error) {
      // console.error("Error updating resume:", error.message);
      // setMessage("Error updating resume. Please try again.");
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  const feild = [
    <PersonalDetail key={count}/>,
    // <SocailLinks />,
    <Summary  key={count}/>,
    <Education  key={count}/>,
    <Experience  key={count}/>,
    <Skills key={count} />,
  ];

  return (
    <div className="main grid grid-cols-12 items-center justify-center min-h-[calc(100vh-64px)]">
      <div key={count} className="flex justify-center bg-card dark:bg-secondary shadow-md rounded-xl p-4 items-center flex-col col-span-8 col-start-3 gap-5">
        <div key={count} className="flex justify-between items-center w-full">
          <div key={count}>
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
          <Button
            disabled={loading}
            className="hover:bg-green-500 bg-green-600 text-white"
            onClick={updateResume}
          >
            {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Update"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default EditResume;
