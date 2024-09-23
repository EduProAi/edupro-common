export type SmSchool = {
	id: string

	country?: string

	qs_ranking?: number

	name: string

	name_cn?: string

	ipeds_id?: string

	ope_id?: string

	address?: string

	phone?: string

	year_type?: string

	school_type?: string

	campus_setting?: string

	campus_housing: boolean

	student_to_faculty_ratio?: number

	website?: SmSchoolWebsite

	cost?: SmSchoolCost

	stats?: SmSchoolStats

	admission_requirement?: SmSchoolAdmissionRequirement

	degrees: SmSchoolDegree[]

	school_majors: SmSchoolMajor[]

	school_colleges?: SmSchoolCollege[]
}

export type SmSchoolWebsite = {
	sm_school_id: string

	homepage?: string

	admission?: string

	application?: string

	financial_aid?: string

	mission_statement?: string
}

export type SmSchoolCost = {
	sm_school_id: string

	tuition?: number

	books_and_supplies?: number

	food_and_housing?: number

	other_expenses?: number
}

export type SmSchoolStats = {
	sm_school_id: string

	total_enrollment?: number

	undergraduate_enrollment?: number

	graduate_enrollment?: number

	number_of_applicants?: number

	percent_admitted?: number

	percent_admitted_who_enrolled?: number

	percent_students_submitted_sat?: number

	percent_students_submitted_act?: number
}

export enum sm_admission_require_level {
	REQUIRED = "REQUIRED",
	CONSIDERED = "CONSIDERED",
	NOT_REQUIRED = "NOT_REQUIRED",
	UNSPECIFIED = "UNSPECIFIED",
}

export type SmSchoolAdmissionRequirement = {
	sm_school_id: string

	gpa_required: sm_admission_require_level

	gpa_low?: number

	gpa_median?: number

	gpa_high?: number

	secondary_school_rank_required: sm_admission_require_level

	secondary_school_record_required: sm_admission_require_level

	college_prep_program_required: sm_admission_require_level

	recommendations_required: sm_admission_require_level

	formal_demonstration_of_competencies_required: sm_admission_require_level

	work_experience_required: sm_admission_require_level

	personal_statement_required: sm_admission_require_level

	sat_act_required: sm_admission_require_level

	other_test_required: sm_admission_require_level

	english_proficiency_test_required: sm_admission_require_level

	sat_reading_writing_low?: number

	sat_reading_writing_median?: number

	sat_reading_writing_high?: number

	sat_math_low?: number

	sat_math_median?: number

	sat_math_high?: number

	act_composite_low?: number

	act_composite_median?: number

	act_composite_high?: number

	act_english_low?: number

	act_english_median?: number

	act_english_high?: number

	act_math_low?: number

	act_math_median?: number

	act_math_high?: number

	data_date: string
}

export type SmSchoolDegree = {
	id: string
	degree_id: string
	sm_school_id: string
}

export type SmSchoolMajor = {
	sm_school_id: string

	name: string

	name_cn?: string

	description?: string

	background_requirement?: string

	interview_requirement?: string

	english_proficiency_toefl?: number

	english_proficiency_toefl_band?: number

	english_proficiency_ielts?: number

	english_proficiency_ielts_band?: number

	english_proficiency_note?: string

	tuition?: number

	portfolio_requirement?: string
}

type SmSchoolCollege = {
	id: string
	sm_school_id: string
	name: string
	name_cn?: string
	description?: string
	description_cn?: string
}
