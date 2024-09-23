import { UserDataPackage } from  "./user-data-package.entity"
import { Feature } from  "./feature.entity"

export type DataPackage = {
	id: string
	name: string
	description: string
	price: number
	features: DataPackageFeature[]
	user_data_package: UserDataPackage[]
}

export type DataPackageFeature = {
	id: string
	data_package_id: string
	feature_handle: string
	quota: number
	feature: Feature
	data_package: DataPackage
}
