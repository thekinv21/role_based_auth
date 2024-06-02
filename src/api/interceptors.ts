import axios from 'axios'

import { IRefrestToken } from '@/types/auth.types'

import { PATH_URL } from '@/config/path.config'

import { authService } from '@/services/auth.service'

import {
	getAccessToken,
	getRefreshToken,
	removeFromCookie,
	saveTokens
} from '@/utils/auth.util'

const options = {
	baseURL: `${import.meta.env.VITE_REACT_APP_URL_TEST}`,
	headers: {
		'Content-Type': 'application/json'
	}
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

axiosWithAuth.interceptors.response.use(
	response => response,
	async error => {
		const config = error.config
		if (error.response && error.response.status === 401 && !config._retry) {
			try {
				const request: IRefrestToken = {
					refreshToken: getRefreshToken() as string
				}

				const response = await authService.getNewTokens(
					request as IRefrestToken
				)

				if (response.status >= 200 && response.status < 300) {
					await removeFromCookie()
					await saveTokens(response.data.content)
				}
			} catch (error) {
				removeFromCookie()
				window.location.href = PATH_URL.AUTH.LOGIN
			}
		}
		return Promise.reject(error)
	}
)

export { axiosClassic, axiosWithAuth }
