import { ResumeType } from "@/types";

export const emptyResume:ResumeType =  {
  _id: "",
  userEmail: "",
  projectName: "",
  personalDetail: {
    firstname: "",
    lastname: "",
    jobtitle: "",
    address: "",
    phone: "",
    email: "",
    image: ""
  },
  summary: "",
  professionalExperience: [
    {
      positionTitle: "",
      companyName: "",
      city: "",
      state: "",
      startDate: new Date(),
      endDate: new Date(),
      summary: ""
    }
  ],
  education: [
    {
      uniName: "",
      degree: "",
      major: "",
      startDate: new Date(),
      endDate: new Date()
    }
  ],
  skill: [
    {
      name: "",
      rate: 0
    }
  ],
};
