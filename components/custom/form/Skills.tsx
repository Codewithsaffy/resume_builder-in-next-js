import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ResumeContext from "@/context/Resume";
import { Skill } from "@/types";

const Skills = () => {
  const { resume, setResume } = useContext(ResumeContext);
  const [skill, setSkill] = useState<Skill[]>(resume.skill);

  // Handler for adding a new skill
  const addSkill = () => {
    setSkill([...skill, { name: "", rate: 0 }]);
  };

  // Handler for removing a skill
  const removeSkill = (index: number) => {
    const newSkills = [...skill];
    newSkills.splice(index, 1);
    setSkill(newSkills);
  };

  // Handler for updating skill fields
  const handleSkillChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newSkills = [...skill];
    if (name === "rate") {
      newSkills[index].rate = Number(value); // Ensures the rate is a number
    } else {
      newSkills[index].name = value;
    }
    setSkill(newSkills);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResume({ ...resume, skill });
  };

  return (
    <div className="p-6 w-full bg-gray-50 shadow-xl rounded-lg max-w-3xl mx-auto lg:p-12 md:max-w-full sm:max-w-sm transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">
        Skills
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {skill.map((skill, index) => (
          <div key={index} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Skill Name Input */}
            <div>
              <Label
                htmlFor={`skill-name-${index}`}
                className="text-base font-medium text-gray-700"
              >
                Skill Name
              </Label>
              <Input
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="e.g., JavaScript"
                name="name"
                value={skill.name}
                onChange={(e) => handleSkillChange(index, e)}
                required
              />
            </div>

            {/* Skill Rating Input */}
            <div>
              <Label
                htmlFor={`skill-rate-${index}`}
                className="text-base font-medium text-gray-700"
              >
                Rating (0-10)
              </Label>
              <Input
                type="number"
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="Rate your skill (0-10)"
                name="rate"
                value={skill.rate}
                min={0}
                max={10}
                onChange={(e) => handleSkillChange(index, e)}
                required
              />
            </div>

            {/* Remove Skill Button */}
            <div className="flex items-center justify-end mt-2 md:col-span-2">
              <Button
                type="button"
                onClick={() => removeSkill(index)}
                className="text-white bg-red-600 hover:text-red-700 focus:outline-none"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        {/* Add Skill Button */}
        <div className="flex justify-center mt-4">
          <Button
            type="button"
            onClick={addSkill}
            variant={"outline"}
            className="px-6 py-3 font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            Add Another Skill
          </Button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <Button
            type="submit"
            className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            Save Skills
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Skills;
