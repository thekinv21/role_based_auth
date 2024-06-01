export interface IUser {
	createdBy: string
	updatedBy: string
	id: string
	name: string
	surname: string
	username: string
	email: string
	resetPassword: boolean
	profileImageUrl: string
	roles: string[]
	enabled: boolean
}
