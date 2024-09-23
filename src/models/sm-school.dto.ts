enum SortOrder {
	ASC = "asc",
	DESC = "desc",
}

export type FindSmSchoolsDto = {
	page_size?: number

	page?: number

	search?: string

	sort_by?: string

	sort_order?: SortOrder

	country?: string

	gpa?: number

	sat_reading_writing_score?: number

	sat_math_score?: number

	act_composite_score?: number

	act_english_score?: number

	act_math_score?: number
}
