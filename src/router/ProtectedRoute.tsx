import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { PATH_URL } from '@/config/path.config'

import { useCustomAuth } from '@/hooks/useCustomAuth'

interface IProtectedRoute {
	children: React.ReactNode
}

export function ProtectedRoute({ children }: IProtectedRoute) {
	const { jwtToken } = useCustomAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (jwtToken === undefined || jwtToken === null) {
			navigate(PATH_URL.AUTH.LOGIN, { replace: true })
		}
	}, [navigate, jwtToken])

	return children
}
