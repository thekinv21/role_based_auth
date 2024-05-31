import Cookies from 'js-cookie'
import { useMemo } from 'react'

import { IAuthEnum } from '@/enum/auth.enum'

export const useCustomAuth = () => {
	const jwtToken = Cookies.get(IAuthEnum.ACCESS_TOKEN)
	const userItem = localStorage.getItem(IAuthEnum.USER)

	const user =
		userItem && userItem !== 'undefined' ? JSON.parse(userItem) : null

	return useMemo(
		() => ({
			jwtToken,
			user
		}),
		[jwtToken, user]
	)
}
