import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ResumeContext from "@/context/Resume";
import { Education as EducationType } from "@/types";

const Education = () => {
  const { resume, setResume } = useContext(ResumeContext);
  const [educationEntries, setEducationEntries] = useState<EducationType[]>(
    resume.education
  );

  // Handler for adding a new education entry
  const addEducationEntry = () => {
    setEducationEntries([
      ...educationEntries,
      { uniName: "", degree: "", major: "", startDate: "", endDate: "" },
    ]);
  };

  // Handler for removing an education entry
  const removeEducationEntry = (index: number) => {
    const newEntries = [...educationEntries];
    newEntries.splice(index, 1);
    setEducationEntries(newEntries);
  };

  // Handler for updating the education fields
  const handleEducationChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newEntries = [...educationEntries];
    newEntries[index][name as keyof EducationType] = value;
    setEducationEntries(newEntries);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResume({ ...resume, education: educationEntries });
  };

  return (
    <div className="p-6 w-full bg-gray-50 shadow-xl rounded-lg max-w-3xl mx-auto lg:p-12 md:max-w-full sm:max-w-sm transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">
        Education
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {educationEntries.map((entry, index) => (
          <div key={index} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* University Name */}
            <div>
              <Label
                htmlFor={`uniName-${index}`}
                className="text-base font-medium text-gray-700"
              >
                University Name
              </Label>
              <Input
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="University Name"
                name="uniName"
                value={entry.uniName}
                onChange={(e) => handleEducationChange(index, e)}
                required
              />
            </div>

            {/* Degree */}
            <div>
              <Label
                htmlFor={`degree-${index}`}
                className="text-base font-medium text-gray-700"
              >
                Degree
              </Label>
              <Input
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="Degree"
                name="degree"
                value={entry.degree}
                onChange={(e) => handleEducationChange(index, e)}
                required
              />
            </div>

            {/* Major */}
            <div>
              <Label
                htmlFor={`major-${index}`}
                className="text-base font-medium text-gray-700"
              >
                Major
              </Label>
              <Input
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="Major"
                name="major"
                value={entry.major}
                onChange={(e) => handleEducationChange(index, e)}
                required
              />
            </div>

            {/* Start Date */}
            <div>
              <Label
                htmlFor={`startDate-${index}`}
                className="text-base font-medium text-gray-700"
              >
                Start Date
              </Label>
              <Input
                type="date"
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                name="startDate"
                value={entry.startDate.toString()}
                onChange={(e) => handleEducationChange(index, e)}
                required
              />
            </div>

            {/* End Date */}
            <div>
              <Label
                htmlFor={`endDate-${index}`}
                className="text-base font-medium text-gray-700"
              >
                End Date
              </Label>
              <Input
                type="date"
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                name="endDate"
                value={entry.endDate.toString()}
                onChange={(e) => handleEducationChange(index, e)}
                required
              />
            </div>

            {/* Remove Button */}
            <div className="flex items-center justify-end mt-2 md:col-span-2">
              <Button
                type="button"
                onClick={() => removeEducationEntry(index)}
                className="text-white bg-red-600 hover:text-red-700 focus:outline-none"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        {/* Add Education Entry Button */}
        <div className="flex justify-center mt-4">
          <Button
            type="button"
            onClick={addEducationEntry}
            variant={"outline"}
            className="px-6 py-3 font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            Add Another Education
          </Button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <Button
            type="submit"
            className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            Save Education
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Education;
