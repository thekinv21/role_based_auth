import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { PATH_URL } from '@/config/path.config'

import { useCustomAuth } from '@/hooks/useCustomAuth'

interface IProtectedAdminRoute {
	children: React.ReactNode
}

export function ProtectedAdminRoute({ children }: IProtectedAdminRoute) {
	// for get all information from auth
	const { jwtToken, isAdmin } = useCustomAuth()

	// for navigation
	const navigate = useNavigate()

	// for get current location and pathname
	const location = useLocation()

	// control user role and redirect for role base

	useEffect(() => {
		// if jwt token is not exist redirect to login
		if (!jwtToken) {
			navigate(PATH_URL.AUTH.LOGIN)
			return
		}

		if (isAdmin && location.pathname !== PATH_URL.ADMIN) {
			navigate(PATH_URL.ADMIN)
		}

		// if logged in user trying go to admin page and he is not have role admin redirect to 404 page
		else if (!isAdmin && location.pathname !== PATH_URL.HOME) {
			navigate(PATH_URL[404])
		}
	}, [jwtToken, navigate, location.pathname, isAdmin])

	return children
}
