import Cookies from 'js-cookie'
import { useMemo } from 'react'

import { IAuthEnum, IRoleEnum } from '@/enum/auth.enum'

export const useCustomAuth = () => {
	const jwtToken = Cookies.get(IAuthEnum.ACCESS_TOKEN)
	const userItem = localStorage.getItem(IAuthEnum.USER)

	const user =
		userItem && userItem !== 'undefined' ? JSON.parse(userItem) : null

	const isAdmin =
		user?.roles.includes(IRoleEnum.ADMIN) ||
		user?.roles.includes(IRoleEnum.SUPERADMIN)

	const isUser = user?.roles.includes(IRoleEnum.USER)

	return useMemo(
		() => ({
			jwtToken,
			user,
			isAdmin,
			isUser
		}),
		[jwtToken, user, isAdmin, isUser]
	)
}
