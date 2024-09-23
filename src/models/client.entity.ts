import { ClientStatus } from "./client.dto";

export type Client = {
  id?: string;
  nickname: string;
  create_time?: Date;
  status: ClientStatus;
  client_contact_info?: ClientContactInfo[];
  client_personal_info?: ClientPersonalInfo;
  client_id_card?: ClientIDCard[];
  client_passport?: ClientPassport[];
  client_address?: ClientAddress[];
  client_attribute?: ClientAttribute[];
  client_education?: ClientEducation[];
  client_work_experience?: ClientWorkExperience[];
  client_honor_award?: ClientHonorAward[];
  client_research_paper?: ClientResearchPaper[];
};

export type ClientIDCard = {
  id?: string; // Auto-increment field, so it's optional for creation
  client_id?: string; // Nullable in your schema
  idcard_number: string;
  full_name?: string; // Nullable in your schema
  gender?: number; // Nullable in your schema
  birth_date?: Date | string; // Nullable in your schema
  address?: string; // Nullable in your schema
  issue_org?: string; // Nullable in your schema
  issue_date?: Date | string; // Nullable in your schema
  expiration_date?: Date | string; // Nullable in your schema
  race?: string; // Nullable in your schema
};

export type ClientPassport = {
  id?: string; // Auto-increment field, optional for creation
  client_id?: string; // Nullable in your schema
  passport_number: string;
  issue_date?: Date | string; // Nullable in your schema
  expiration_date?: Date | string; // Nullable in your schema
  place_of_issue?: string; // Nullable in your schema
  full_name?: string; // Nullable in your schema
  country?: string; // Nullable in your schema, assuming it refers to a country ID
};

export type ClientAddress = {
  id: string;
  client_id: string;
  country: string;
  province: string;
  city: string;
  street_address: string;
};

export type ClientPersonalInfo = {
  client_id?: string;
  full_name?: string;
  marital_status?: MaritalStatus;
  city_of_birth?: string;
  gender?: number;
};

export type ClientAttribute = {
  id: string;
  client_id: string;
  type?: string;
  content?: string;
};

export type ClientWorkExperience = {
  id: string;
  client_id: string;
  company?: string | null;
  position?: string | null;
  start_date?: Date | null;
  end_date?: Date | null;
  description?: string | null;
};

export type ClientHonorAward = {
  id?: string | null;
  client_id?: string | null;
  title?: string | null;
  scope?: client_honor_award_scope;
  acquired_date?: Date | null;
  description?: string | null;
};

export type ClientResearchPaper = {
  id?: string;
  client_id?: string;
  title?: string;
  date?: Date;
  research_topic?: string;
  mentor?: string;
  description?: string;
  paper_author_name?: string;
  paper_journal_name?: string;
  paper_journal_year?: number;
  paper_journal_issue_number?: string;
  paper_journal_page_number?: number;
};

// Enums

export enum Gender {
  unknown = 0,
  male = 1,
  female = 2,
}

export enum MaritalStatus {
  single = "single",
  married = "married",
  divorced = "divorced",
  widowed = "widowed",
}

export enum ClientAttributeType {
  AcademicAchievement = "AcademicAchievement",
  ExtracurricularActivity = "ExtracurricularActivity",
  PersonalInterestAndHobby = "PersonalInterestAndHobby",
  CareerAspiration = "CareerAspiration",
  PersonalExperienceAndChallenge = "PersonalExperienceAndChallenge",
  SkillAndQuality = "SkillAndQuality",
  PersonalGrowthAndDevelopment = "PersonalGrowthAndDevelopment",
}

export type ClientContactInfo = {
  id: string;
  client_id: string;
  handle: string;
  type: ClientContactInfoType;
};

export type ClientEducation = {
  id: string;
  client_id: string;
  school_name?: string;
  education_level?:
    | "elementary"
    | "middleschool"
    | "highschool"
    | "undergraduate"
    | "graduate"
    | "phd";
  major?: string;
  gpa?: number;
  extra_info?: string;
  note?: string;
  start_date?: Date | null;
  end_date?: Date | null;
};

export enum ClientContactInfoType {
  email = "email",
  phone = "phone",
  wechat = "wechat",
  qq = "qq",
  facebook = "facebook",
  twitter = "twitter",
  instagram = "instagram",
  linkedin = "linkedin",
  github = "github",
  website = "website",
  weibo = "weibo",
  blog = "blog",
  other = "other",
}

export enum client_honor_award_scope {
  scholastic = "scholastic",
  municipal = "municipal",
  provincial = "provincial",
  national = "national",
  international = "international",
}
