import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ResumeContext from "@/context/Resume";
import { ProfessionalExperience } from "@/types";

const Experience = () => {
  const { resume, setResume } = useContext(ResumeContext);
  const [experienceEntries, setExperienceEntries] = useState<
    ProfessionalExperience[]
  >(resume.professionalExperience);

  // Handler for adding a new experience entry
  const addExperienceEntry = () => {
    setExperienceEntries([
      ...experienceEntries,
      {
        positionTitle: "",
        companyName: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        summary: "",
      },
    ]);
  };

  // Handler for removing an experience entry
  const removeExperienceEntry = (index: number) => {
    const newEntries = [...experienceEntries];
    newEntries.splice(index, 1);
    setExperienceEntries(newEntries);
  };

  // Handler for updating the experience fields
  const handleExperienceChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newEntries = [...experienceEntries];
    newEntries[index][name as keyof ProfessionalExperience] = value;
    setExperienceEntries(newEntries);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResume({ ...resume, professionalExperience: experienceEntries });
  };

  return (
    <div className="p-6 w-full bg-gray-50 shadow-xl rounded-lg max-w-3xl mx-auto lg:p-12 md:max-w-full sm:max-w-sm transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">
        Professional Experience
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {experienceEntries.map((experience, index) => (
          <div key={index} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Position Title */}
            <div>
              <Label
                htmlFor={`positionTitle-${index}`}
                className="text-base font-medium text-gray-700"
              >
                Position Title
              </Label>
              <Input
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="e.g., Software Engineer"
                name="positionTitle"
                value={experience.positionTitle}
                onChange={(e) => handleExperienceChange(index, e)}
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <Label
                htmlFor={`companyName-${index}`}
                className="text-base font-medium text-gray-700"
              >
                Company Name
              </Label>
              <Input
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="e.g., ABC Corp"
                name="companyName"
                value={experience.companyName}
                onChange={(e) => handleExperienceChange(index, e)}
                required
              />
            </div>

            {/* City */}
            <div>
              <Label
                htmlFor={`city-${index}`}
                className="text-base font-medium text-gray-700"
              >
                City
              </Label>
              <Input
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="City"
                name="city"
                value={experience.city}
                onChange={(e) => handleExperienceChange(index, e)}
                required
              />
            </div>

            {/* State */}
            <div>
              <Label
                htmlFor={`state-${index}`}
                className="text-base font-medium text-gray-700"
              >
                State
              </Label>
              <Input
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="State"
                name="state"
                value={experience.state}
                onChange={(e) => handleExperienceChange(index, e)}
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
                value={experience.startDate.toLocaleString()}
                onChange={(e) => handleExperienceChange(index, e)}
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
                value={experience.endDate.toLocaleString()}
                onChange={(e) => handleExperienceChange(index, e)}
                required
              />
            </div>

            {/* Summary */}
            <div className="md:col-span-2">
              <Label
                htmlFor={`summary-${index}`}
                className="text-base font-medium text-gray-700"
              >
                Summary
              </Label>
              <textarea
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="Brief summary of your role"
                name="summary"
                value={experience.summary}
                onChange={(e) => handleExperienceChange(index, e)}
                required
              />
            </div>

            {/* Remove Button */}
            <div className="flex items-center justify-end mt-2 md:col-span-2">
              <Button
                type="button"
                onClick={() => removeExperienceEntry(index)}
                className="text-white bg-red-600 hover:text-red-700 focus:outline-none"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        {/* Add Experience Entry Button */}
        <div className="flex justify-center mt-4">
          <Button
            type="button"
            onClick={addExperienceEntry}
            variant={"outline"}
            className="px-6 py-3 font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            Add Another Experience
          </Button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <Button
            type="submit"
            className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            Save Experience
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Experience;
