import { IUser } from './user.types'

export interface IAuth {
	accessToken: string
	refreshToken: string
	user: IUser
}

export interface ILogin {
	username: string
	password: string
}

export interface IRegister {
	username: string
	password: string
	name?: string
	surname?: string
}
