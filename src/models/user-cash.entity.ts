export type UserCashBalance = {
	user_id: string
	balance: number
	update_time: Date
}

export type UserCashTransaction = {
	user_id: string
	transaction_id: string
	transaction_type: string
	amount: number
	transaction_time: Date
}
