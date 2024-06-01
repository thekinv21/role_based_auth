import Cookies from 'js-cookie'

import { IAuth } from '@/types/auth.types'

import { IAuthEnum } from '@/enum/auth.enum'

export const removeFromCookie = () => {
	Cookies.remove(IAuthEnum.ACCESS_TOKEN)
	Cookies.remove(IAuthEnum.REFRESH_TOKEN)
	localStorage.removeItem(IAuthEnum.USER)
}

export const saveTokens = (data: IAuth) => {
	Cookies.set(IAuthEnum.ACCESS_TOKEN, data.accessToken)
	Cookies.set(IAuthEnum.REFRESH_TOKEN, data.refreshToken)
	localStorage.setItem(IAuthEnum.USER, JSON.stringify(data.user))
}

export const getAccessToken = () => {
	return Cookies.get(IAuthEnum.ACCESS_TOKEN)
}

export const getRefreshToken = () => {
	return Cookies.get(IAuthEnum.REFRESH_TOKEN)
}
