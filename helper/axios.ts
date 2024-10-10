import { ResumeType } from "@/types";
import axios from "axios";

export const createResume = async (resume: ResumeType) => {
  const response = await axios.post("/api/resume/create", {
    ...resume,
  });
  return response;
};
export const editResume = async (resume: ResumeType) => {
  const response = await axios.put("/api/resume/update", resume);
  return response.data; // Return the API response data
};

export const getResumeWillUpdate = async (userEmail: string, _id: string) => {
  const response = await axios.get(`/api/resume/update/${userEmail}/${_id}`);
  return response;
};

export const getResume = async (userEmail: string) => {
  const response = await axios.get(`/api/resume/get/${userEmail}`);
  return response;
};
export const deleteResume = async (_id: string) => {
  const response = await axios.delete(`/api/resume/delete/${_id}`);
  return response;
};
