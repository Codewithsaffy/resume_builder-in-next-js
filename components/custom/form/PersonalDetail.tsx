import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ResumeContext from "@/context/Resume";
import { PersonalDetail as personalDetailType } from "@/types";
import Image from "next/image";

const PersonalDetail = () => {
  const { resume, setResume } = useContext(ResumeContext);
  const [image, setImage] = useState<File | null>(null);
  const [personalDetail, setPersonalDetail] = useState<personalDetailType>(
    resume.personalDetail
  );

  useEffect(() => {
    setPersonalDetail(resume.personalDetail);
  },[resume.personalDetail]);
  const uploadImageToCloudinary = async () => {
    if (!image) return null;

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "resume-builder");
    data.append("cloud_name", "dj5ohnk3g");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dj5ohnk3g/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const cloudData = await res.json();
      return cloudData.url; // Return the uploaded image URL
    } catch (error) {
      // console.error("Image upload error:", error);
      return null; // Return null if upload fails
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalDetail({
      ...personalDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const uploadedImageUrl = await uploadImageToCloudinary();

    // Set personal detail state with uploaded image or keep previous one
    const updatedPersonalDetail = {
      ...personalDetail,
      image: uploadedImageUrl || personalDetail.image, // Use uploaded image or fallback to previous
    };

    setResume({
      ...resume,
      personalDetail: updatedPersonalDetail,
    });

    // console.log("Updated resume:", resume);
  };
  // console.log("correcc", resume);

  return (
    <div className="p-6 w-full bg-gray-50 shadow-xl rounded-lg max-w-3xl mx-auto lg:p-12 md:max-w-full sm:max-w-sm transition-all duration-300 ease-in-out">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
        Personal Details
      </h1>
      <p className="mb-8 text-gray-500 text-center">
        Fill in your personal details to get started.
      </p>

      {/* Personal details form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* First Name */}
          <div>
            <Label
              htmlFor="firstname"
              className="text-base font-medium text-gray-700"
            >
              First Name
            </Label>
            <Input
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="First Name"
              name="firstname"
              required
              value={personalDetail.firstname}
              onChange={handleInputChange}
            />
          </div>

          {/* Last Name */}
          <div>
            <Label
              htmlFor="lastname"
              className="text-base font-medium text-gray-700"
            >
              Last Name
            </Label>
            <Input
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="Last Name"
              name="lastname"
              required
              value={personalDetail.lastname}
              onChange={handleInputChange}
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <Label
              htmlFor="address"
              className="text-base font-medium text-gray-700"
            >
              Address
            </Label>
            <Input
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="Address"
              name="address"
              required
              value={personalDetail.address}
              onChange={handleInputChange}
            />
          </div>

          {/* Phone */}
          <div>
            <Label
              htmlFor="phone"
              className="text-base font-medium text-gray-700"
            >
              Phone
            </Label>
            <Input
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="Phone"
              name="phone"
              required
              value={personalDetail.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div>
            <Label
              htmlFor="email"
              className="text-base font-medium text-gray-700"
            >
              Email
            </Label>
            <Input
              type="email"
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="Email"
              name="email"
              required
              value={personalDetail.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Job Title */}
          <div className="md:col-span-2">
            <Label
              htmlFor="jobtitle"
              className="text-base font-medium text-gray-700"
            >
              Job Title
            </Label>
            <Input
              className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="Job Title"
              name="jobtitle"
              required
              value={personalDetail.jobtitle}
              onChange={handleInputChange}
            />
          </div>

          {/* Profile Image */}
          <div className="md:col-span-2">
            <Label
              htmlFor="image"
              className="text-base font-medium text-gray-700"
            >
              Profile Image
            </Label>
            <div className="mt-2 flex items-center space-x-6">
              {image && (
                <Image
                  width={80}
                  height={80}
                  src={URL.createObjectURL(image)}
                  alt="Profile Preview"
                  className="w-20 h-20 rounded-full object-cover shadow-md"
                />
              )}
              <Input
                type="file"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="Profile Image"
                name="image"
                onChange={(e) => setImage(e.target.files![0])} // Update image file
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <Button
            type="submit"
            className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            Save Details
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;
