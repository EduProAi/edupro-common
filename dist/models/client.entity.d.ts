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
    id?: string;
    client_id?: string;
    idcard_number: string;
    full_name?: string;
    gender?: number;
    birth_date?: Date | string;
    address?: string;
    issue_org?: string;
    issue_date?: Date | string;
    expiration_date?: Date | string;
    race?: string;
};
export type ClientPassport = {
    id?: string;
    client_id?: string;
    passport_number: string;
    issue_date?: Date | string;
    expiration_date?: Date | string;
    place_of_issue?: string;
    full_name?: string;
    country?: string;
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
export declare enum Gender {
    unknown = 0,
    male = 1,
    female = 2
}
export declare enum MaritalStatus {
    single = "single",
    married = "married",
    divorced = "divorced",
    widowed = "widowed"
}
export declare enum ClientAttributeType {
    AcademicAchievement = "AcademicAchievement",
    ExtracurricularActivity = "ExtracurricularActivity",
    PersonalInterestAndHobby = "PersonalInterestAndHobby",
    CareerAspiration = "CareerAspiration",
    PersonalExperienceAndChallenge = "PersonalExperienceAndChallenge",
    SkillAndQuality = "SkillAndQuality",
    PersonalGrowthAndDevelopment = "PersonalGrowthAndDevelopment"
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
    education_level?: "elementary" | "middleschool" | "highschool" | "undergraduate" | "graduate" | "phd";
    major?: string;
    gpa?: number;
    extra_info?: string;
    note?: string;
    start_date?: Date | null;
    end_date?: Date | null;
};
export declare enum ClientContactInfoType {
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
    other = "other"
}
export declare enum client_honor_award_scope {
    scholastic = "scholastic",
    municipal = "municipal",
    provincial = "provincial",
    national = "national",
    international = "international"
}
