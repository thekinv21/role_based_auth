import axios, { type CreateAxiosDefaults } from 'axios'

import { authService } from '@/services/auth.service'

import { getAccessToken, getRefreshToken } from '@/utils/auth.util'

const options: CreateAxiosDefaults = {
	baseURL: `${import.meta.env.VITE_REACT_APP_URL_TEST}`,
	headers: {
		'Content-Type': 'application/json'
	}
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			error?.response?.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				const refreshToken = getRefreshToken()

				await authService.getNewTokens(refreshToken as string)
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				// if (errorCatch(error) === 'jwt expired') {}
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth }
