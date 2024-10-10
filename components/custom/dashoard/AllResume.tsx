import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getResume } from "@/helper/axios";
import { ResumeType } from "@/types";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faFolder,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons"; // Import required icons
import ResumeAcion from "./ResumeAcion";
import Image from "next/image";

const AllResume = ({ userEmail }: { userEmail: string }) => {
  const [resume, setResume] = useState<ResumeType[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  console.log(message);

  const getAllResume = async () => {
    try {
      setLoading(true);
      const resumes = await getResume(userEmail);
      setResume(resumes.data.resume);
      setLoading(false);
      setMessage("Resumes fetched successfully");
    } catch (error) {
      setResume([]);
      setLoading(false);
      setMessage("Error fetching resumes");
    }
  };

  useEffect(() => {
    getAllResume();
  },[]);

  return (
    <div className="px-4 py-6">
      {loading ? (
        <div className="text-center text-gray-500 text-sm">
          Loading resumes...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resume.length > 0
            ? resume.map((res) => (
                <Card
                  key={res._id}
                  className="bg-white relative shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out transform  border border-gray-200"
                >
                  <ResumeAcion userEmail={res.userEmail} _id={res._id} />
                  <CardHeader className="p-3 bg-blue-700 rounded-t-lg text-white">
                    <div className="flex items-center justify-center mb-1">
                      <FontAwesomeIcon icon={faFolder} className="text-2xl" />
                    </div>
                    <CardDescription className="text-xs mt-1 opacity-90 text-gray-200 font-medium text-center flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="mr-1 text-sm"
                      />
                      {res.personalDetail.jobtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-2 text-center">
                    <Image
                      width={64}
                      height={64}
                      src={res.personalDetail.image!}
                      alt="Profile"
                      className="w-16 h-16 rounded-full object-cover mx-auto mb-2 border-2 border-white shadow-md"
                    />
                    <p className="text-xs text-gray-600">
                      <strong>Email:</strong> {res.personalDetail.email}
                    </p>
                    <p className="text-xs text-gray-600">
                      <strong>Phone:</strong> {res.personalDetail.phone}
                    </p>
                  </CardContent>
                  <CardFooter className="p-2 border-t border-gray-200 bg-gray-50 rounded-b-lg text-center flex justify-center items-center space-x-1">
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="text-gray-500 text-sm"
                    />
                    <span className="text-xs text-gray-600 font-medium">
                      {res.projectName}
                    </span>
                  </CardFooter>
                </Card>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default AllResume;
