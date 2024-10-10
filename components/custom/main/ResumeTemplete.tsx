import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ResumeType } from "@/types";
import Image from "next/image";

type ResumeTemplateProps = {
  resume: ResumeType;
  theme?: {
    bg: string;
    text: string;
    accent: string;
  };
};

const defaultTheme = {
  bg: "bg-white dark:bg-gray-800",
  text: "text-gray-900 dark:text-gray-100",
  accent: "bg-blue-500",
};

const ResumeTemplate = ({ resume, theme }: ResumeTemplateProps) => {
  return (
    <div className={`min-h-screen py-10 ${defaultTheme.bg} font-poppins`}>
      <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Personal Details */}
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Image
            width={96}
            height={96}
              src={resume.personalDetail.image!}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
            />
            <div>
              <h1 className={`text-3xl md:text-4xl font-bold ${theme?.text}`}>
                {resume.personalDetail.firstname} {resume.personalDetail.lastname}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {resume.personalDetail.jobtitle}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {resume.personalDetail.address}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                {resume.personalDetail.email}
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8">
          <h2 className={`text-xl font-semibold ${theme?.text}`}>Summary</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{resume.summary}</p>
        </div>

        {/* Professional Experience */}
        <div className="mt-8">
          <h2 className={`text-xl font-semibold ${theme?.text}`}>Professional Experience</h2>
          <div className="space-y-6 mt-4">
            {resume.professionalExperience.map((exp, index) => (
              <div key={index} className={`p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md`}>
                <h3 className={`text-lg font-bold ${theme?.text}`}>{exp.positionTitle}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {exp.companyName}, {exp.city}, {exp.state}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {new Date(exp.startDate).toLocaleDateString()} - {new Date(exp.endDate).toLocaleDateString()}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-8">
          <h2 className={`text-xl font-semibold ${theme?.text}`}>Education</h2>
          <div className="space-y-4 mt-4">
            {resume.education.map((edu, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <h3 className={`text-lg font-bold ${theme?.text}`}>{edu.degree}, {edu.major}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{edu.uniName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {new Date(edu.startDate).toLocaleDateString()} - {new Date(edu.endDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h2 className={`text-xl font-semibold ${theme?.text}`}>Skills</h2>
          <div className="mt-4 space-y-2">
            {resume.skill.map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                <div className="w-2/3 bg-gray-300 dark:bg-gray-600 rounded-lg h-4 print:h-6">
                  {/* Bar or Percentage for Print */}
                  <div
                    className={`h-full rounded-lg ${theme?.accent}`}
                    style={{ width: `${skill.rate * 20}%` }}
                  ></div>
                  <span className="print:hidden">{skill.rate * 20}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;
