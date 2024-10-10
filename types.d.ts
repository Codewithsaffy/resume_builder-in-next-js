import { Document } from "mongoose";

export interface PersonalDetail {
  firstname: string;
  lastname: string;
  jobtitle: string;
  address: string;
  phone: string;
  email: string;
  image?: string; 
}

export interface ProfessionalExperience {
  positionTitle: string;
  companyName: string;
  city: string;
  state: string;
  startDate: Date | string;
  endDate: Date |string;
  summary: string;
}

export interface Education {
  uniName: string;
  degree: string;
  major: string;
  startDate: Date | string;
  endDate: Date | string;
}

export interface Skill {
  name: string;
  rate: number;
}

// export interface SocialLink {
//   platform: string;
//   url: string;
// }

export interface ResumeType {
  _id?: string;
  userEmail: string;
  projectName: string;
  personalDetail: PersonalDetail;
  // socialLinks: SocialLink[];  // Add social links
  summary: string;
  professionalExperience: ProfessionalExperience[];
  education: Education[];
  skill: Skill[];
}
