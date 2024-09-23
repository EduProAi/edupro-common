export type CreateFeatureDto = {
	name: string
	handle: string
	description: string
}

export type UpdateFeatureDto = {
	name: string
	description: string

	// handle 不应该随意更改，因为检查费率基于handle
}
