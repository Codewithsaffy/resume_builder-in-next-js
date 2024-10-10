import { Education, ProfessionalExperience, ResumeType, Skill } from "@/types";
import mongoose, { Schema } from "mongoose";

// Define the schema for social links
// const socialLinkSchema = new Schema({
//   platform: {
//     type: String,
//     required: [true, "Platform name is required"], // E.g., LinkedIn, GitHub
//     maxlength: [50, "Platform name must be less than 50 characters"],
//   },
//   url: {
//     type: String,
//     required: [true, "URL is required"],
//   },
// });

// Define the schema for professional experience
const professionalExperienceSchema = new Schema<ProfessionalExperience>({
  positionTitle: {
    type: String,
    required: [true, "Position title is required"],
    maxlength: [100, "Position title must be less than 100 characters"],
  },
  companyName: {
    type: String,
    required: [true, "Company name is required"],
    maxlength: [100, "Company name must be less than 100 characters"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
    maxlength: [50, "City name must be less than 50 characters"],
  },
  state: {
    type: String,
    required: [true, "State is required"],
    maxlength: [50, "State name must be less than 50 characters"],
  },
  startDate: {
    type: String,
    required: [true, "Start date is required"],
  },
  endDate: {
    type: String,
    required: [true, "End date is required"],
  },
  summary: {
    type: String,
    required: [true, "Experience summary is required"],
    maxlength: [1000, "Experience summary must be less than 1000 characters"],
  },
});

// Define the schema for education
const educationSchema = new Schema<Education>({
  uniName: {
    type: String,
    required: [true, "University name is required"],
    maxlength: [100, "University name must be less than 100 characters"],
  },
  degree: {
    type: String,
    required: [true, "Degree is required"],
    maxlength: [100, "Degree must be less than 100 characters"],
  },
  major: {
    type: String,
    required: [true, "Major is required"],
    maxlength: [100, "Major must be less than 100 characters"],
  },
  startDate: {
    type: String,
    required: [true, "Start date is required"],
  },
  endDate: {
    type: String,
    required: [true, "End date is required"],
  },
});

// Define the schema for skills
const skillSchema = new Schema<Skill>({
  name: {
    type: String,
    required: [true, "Skill name is required"],
    maxlength: [50, "Skill name must be less than 50 characters"],
  },
  rate: {
    type: Number,
    required: [true, "Skill rate is required"],
    min: [1, "Skill rate must be at least 1"],
    max: [10, "Skill rate must be at most 10"],
  },
});

// Define the main resume schema
const resumeSchema = new Schema<ResumeType>(
  {
    userEmail: {
      type: String,
      required: [true, "User email is required"], // Corrected message
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
      maxlength: [100, "Email must be less than 100 characters"],
    },
    projectName: {
      type: String,
      unique: true,
      required: [true, "Project name is required"], // Ensured project name is required
      minlength: [3, "Project name must be at least 3 characters long"],
      maxlength: [50, "Project name must be less than 50 characters"],
    },
    personalDetail: {
      firstname: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"],
        maxlength: [50, "First name must be less than 50 characters"],
      },
      lastname: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"],
        maxlength: [50, "Last name must be less than 50 characters"],
      },
      jobtitle: {
        type: String,
        required: [true, "Job title is required"],
        maxlength: [100, "Job title must be less than 100 characters"],
      },
      address: {
        type: String,
        required: [true, "Address is required"],
        maxlength: [200, "Address must be less than 200 characters"],
      },
      phone: {
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{10,15}$/, "Please enter a valid phone number"],
      },
      email: {
        type: String,
        required: [true, "Personal email is required"],
        match: [/.+\@.+\..+/, "Please enter a valid email address"],
      },
      image: {
        type: String,
      },
    },
    summary: {
      type: String,
      required: [true, "Summary is required"],
      maxlength: [2000, "Summary must be less than 2000 characters"],
    },
    professionalExperience: {
      type: [professionalExperienceSchema],
      required: [true, "Professional experience is required"],
    },
    education: {
      type: [educationSchema],
      required: [true, "Education is required"],
    },
    skill: {
      type: [skillSchema],
      required: [true, "Skills are required"],
    },
    // socialLinks: {
    //   type: [socialLinkSchema],
    //   required: [true, "At least one social link is required"],
    // },
  },
  {
    timestamps: true,
  }
);

const Resume =
  mongoose.models.Resume || mongoose.model<ResumeType>("Resume", resumeSchema);
export default Resume;
