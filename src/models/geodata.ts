export interface CountrySimple {
	id: number
	name: string
	cname: string
}

export interface Country extends CountrySimple {
	continent_id?: number
	lower_name?: string
	country_code?: string
	full_name?: string
	full_cname?: string
	remark?: string
	continent?: string
}


export type CnArea = {
	id: number
	parent_id: number
	name: string
}