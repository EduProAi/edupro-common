export type CountryCodeData = {
	country: string
	country_cn: string
	code: string
	iso: string
	priority: number
}

export type LoginUserDto = {
	// mobile_country_code: string
	// mobile_number: string
	username: string
	password: string
}

export type ChangePasswordDto = {
	currentPassword?: string
	newPassword: string
}

export type CreateUserDto = {
	username: string
	password: string
	email: string
	nickname?: string
	mobile_country_code?: string
	mobile_number?: string
}

// Import decorators if you're using them elsewhere, but note that decorators are not part of the type system.
// They are runtime metadata and won't appear in the type definition.

export type FindUserDto = {
	search?: string
	take?: number
	skip?: number
	sort?: "asc" | "desc"
}
