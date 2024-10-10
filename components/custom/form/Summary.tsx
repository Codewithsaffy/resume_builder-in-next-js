"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useChat } from "ai/react";
import { useEffect, useState, useContext } from "react";
import ResumeContext from "@/context/Resume";

export default function Summary() {
  const { resume, setResume } = useContext(ResumeContext);
  const [summary, setSummary] = useState(resume.summary);
  const { handleSubmit, messages, setInput } = useChat();
  
  const prompt = `write a summary for a job as a ${resume.personalDetail.jobtitle} in 5 lines in one para`;

  useEffect(() => {
    const newPrompt = `write a summary for a job as a ${resume.personalDetail.jobtitle} in 5 lines in one para`;
    if (setInput && newPrompt !== prompt) {
      setInput(newPrompt);
    }
  }, [resume.personalDetail.jobtitle, setInput]);

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      setSummary(lastMessage.content);
    }
  }, [messages]);

  const handleGenerate = async () => {
    handleSubmit();
  };

  const handleSave = () => {
    setResume({
      ...resume,
      summary,
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Summary</h1>
      <p className="text-gray-600">
        Generate a summary of your content with the help of AI. Just click the
        button below to get started.
      </p>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between w-full">
          <Label className="text-lg font-medium text-gray-700">Summary</Label>
          <Button
            onClick={handleGenerate}
            className={`flex items-center gap-2 px-4 py-2 font-semibold rounded-lg shadow bg-indigo-600 hover:bg-indigo-700 text-white transition duration-300 focus:ring focus:ring-indigo-300`}
          >
            <FontAwesomeIcon icon={faBrain} />
            Generate
          </Button>
        </div>
        <textarea
          name="summary"
          id="summary"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
          placeholder="Your generated summary will appear here..."
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={6}
        ></textarea>
      </div>

      <Button
        onClick={handleSave}
        className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
      >
        Save
      </Button>
    </div>
  );
}
