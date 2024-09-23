import { DataPackage } from  "./data-package.entity"
import { User } from  "./user.entity"

export type UserDataPackage = {
	id: string
	data_package_id: string
	user_id: string
	expire_time: Date | null
	used: boolean
	used_date: Date | null
	user: User
	data_package: DataPackage
}
