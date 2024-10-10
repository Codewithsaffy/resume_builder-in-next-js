// import React, { useContext, useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import ResumeContext from "@/context/Resume";
// import { SocialLink } from "@/types";

// const SocialLinks = () => {
//   const { resume, setResume } = useContext(ResumeContext);
//   const [socialLinks, setSocialLinks] = useState<SocialLink[]>(resume.socialLinks);

//   // Handler for adding new social links
//   const addSocialLink = () => {
//     setSocialLinks([...socialLinks, { platform: "", url: "" }]);
//   };

//   // Handler for removing a social link
//   const removeSocialLink = (index: number) => {
//     const newLinks = [...socialLinks];
//     newLinks.splice(index, 1);
//     setSocialLinks(newLinks);
//   };

//   // Handler for updating the social link fields
//   const handleSocialChange = (
//     index: number,
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { name, value } = e.target;
//     const newLinks = [...socialLinks];
//     newLinks[index][name as keyof SocialLink] = value;
//     setSocialLinks(newLinks);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//    setResume({ ...resume, socialLinks });
//   };

//   return (
//     <div className="p-6 w-full bg-gray-50 shadow-xl rounded-lg max-w-3xl mx-auto lg:p-12 md:max-w-full sm:max-w-sm transition-all duration-300 ease-in-out">
//       <h2 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">
//         Social Links
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {socialLinks.map((link, index) => (
//           <div key={index} className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             {/* Platform Input */}
//             <div>
//               <Label
//                 htmlFor={`platform-${index}`}
//                 className="text-base font-medium text-gray-700"
//               >
//                 Platform
//               </Label>
//               <Input
//                 className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
//                 placeholder="e.g., LinkedIn, Twitter"
//                 name="platform"
//                 value={link.platform}
//                 onChange={(e) => handleSocialChange(index, e)}
//                 required
//               />
//             </div>

//             {/* URL Input */}
//             <div>
//               <Label
//                 htmlFor={`url-${index}`}
//                 className="text-base font-medium text-gray-700"
//               >
//                 URL
//               </Label>
//               <Input
//                 className="mt-2 w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
//                 placeholder="https://example.com/your-profile"
//                 name="url"
//                 value={link.url}
//                 onChange={(e) => handleSocialChange(index, e)}
//                 required
//               />
//             </div>

//             {/* Remove Button */}
//             <div className="flex items-center justify-end mt-2 md:col-span-2">
//               <Button
//                 type="button"
//                 onClick={() => removeSocialLink(index)}
//                 className="text-white bg-red-600 hover:text-red-700 focus:outline-none"
//               >
//                 Remove
//               </Button>
//             </div>
//           </div>
//         ))}

//         {/* Add Social Link Button */}
//         <div className="flex justify-center mt-4">
//           <Button
//             type="button"
//             onClick={addSocialLink}
//             variant={"outline"}
//             className="px-6 py-3 t font-semibold rounded-lg shadow-lg  focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
//           >
//             Add Another Social Link
//           </Button>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center mt-8">
//           <Button
//             type="submit"
//             className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
//           >
//             Save Social Links
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SocialLinks;
