import { ILogin, IRegister } from '@/types/auth.types'

import { axiosClassic, axiosWithAuth } from '@/api/interceptors'

class AuthService {
	private BASE_URL = '/api/auth'

	async login(data: ILogin) {
		const response = await axiosClassic.post(this.BASE_URL + `/login`, data)
		return response
	}

	async register(data: IRegister) {
		const response = await axiosClassic.post(
			this.BASE_URL + `/register`,
			data
		)
		return response
	}

	async getNewTokens(refreshToken: string) {
		const response = await axiosWithAuth.post(
			this.BASE_URL + `/refresh-token`,
			refreshToken
		)
		return response
	}
}

export const authService = new AuthService()
