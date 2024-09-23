export interface SchoolSimple {
    id: number;
    name: string;
    cn_name: string;
    region_name?: string;
    region_cn_name?: string;
}
export interface School {
    id: string;
    name: string;
    name_cn?: string;
    description?: string;
    description_cn?: string;
    us_news_ranking?: number;
    qs_ranking?: number;
    country?: string;
    ipeds_id?: string;
    ope_id?: string;
    basic_info?: BasicInfo;
    website?: Website;
    cost?: Cost;
    stats?: Stats;
    degrees?: SchoolDegree[];
    majors?: Major[];
    admission_profile?: AdmissionProfile;
}
export interface BasicInfo {
    school_id: string;
    address?: string;
    phone?: string;
    year_type?: YearType;
    school_type?: SchoolType;
    campus_setting?: CampusSetting;
    campus_housing?: boolean;
    student_to_faculty_ratio?: number;
}
export interface Website {
    school_id: string;
    homepage?: string;
    admission?: string;
    application?: string;
    financial_aid?: string;
    mission_statement?: string;
}
export interface Cost {
    school_id: string;
    tuition_regular?: number;
    tuition_out_of_state?: number;
    tuition_in_state?: number;
    tuition_international?: number;
    books_and_supplies?: number;
    food_and_housing?: number;
    other_expenses?: number;
}
export interface Stats {
    school_id: string;
    total_enrollment?: number;
    undergraduate_enrollment?: number;
    graduate_enrollment?: number;
    number_of_applicants?: number;
    percent_admitted?: number;
    percent_admitted_who_enrolled?: number;
    percent_students_submitted_sat?: number;
    percent_students_submitted_act?: number;
}
export interface SchoolDegree {
    id: string;
    school_id: string;
    degree: Degree;
}
export interface Major {
    id: string;
    school_id: string;
    name: string;
    name_cn?: string;
    description?: string;
    background_requirement?: string;
    interview_requirement?: string;
    tuition?: number;
    portfolio_requirement?: string;
    admission_profile?: AdmissionProfile;
}
export interface AdmissionProfile {
}
export declare enum Degree {
    LESS_THAN_ONE_YEAR = "LESS_THAN_ONE_YEAR",
    LESS_THAN_TWO_YEAR = "LESS_THAN_TWO_YEAR",
    TWO_YEARS_PLUS = "TWO_YEARS_PLUS",
    ASSOCIATE = "ASSOCIATE",
    BACHELOR = "BACHELOR",
    POST_BACHELOR = "POST_BACHELOR",
    MASTER = "MASTER",
    POST_MASTER = "POST_MASTER",
    DOCTOR = "DOCTOR",
    POST_DOCTOR = "POST_DOCTOR",
    PROFESSIONAL = "PROFESSIONAL",
    OTHER = "OTHER"
}
export declare enum Requirement {
    REQUIRED = "REQUIRED",
    CONSIDERED = "CONSIDERED",
    NOT_REQUIRED = "NOT_REQUIRED",
    UNSPECIFIED = "UNSPECIFIED"
}
export declare enum SchoolType {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
    FOR_PROFIT = "FOR_PROFIT",
    OTHER = "OTHER"
}
export declare enum CampusSetting {
    URBAN = "URBAN",
    SUBURBAN = "SUBURBAN",
    TOWN = "TOWN",
    RURAL = "RURAL",
    OTHER = "OTHER"
}
export declare enum YearType {
    TWO_YEAR = "TWO_YEAR",
    FOUR_YEAR = "FOUR_YEAR",
    POST_GRADUATE = "POST_GRADUATE",
    OTHER = "OTHER"
}
