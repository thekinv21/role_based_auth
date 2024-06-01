import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { PATH_URL } from '@/config/path.config'

import { ProtectedAdminRoute } from './ProtectedAdminRoute'
import { ProtectedRoute } from './ProtectedRoute'
import { AdminPage } from '@/screens/admin/AdminPage'
import { LoginPage } from '@/screens/auth/login'
import { NotFoundPage } from '@/screens/error/404'
import { HomePage } from '@/screens/home/HomePage'

export const routes: RouteObject[] = [
	{
		path: PATH_URL[404],
		element: <NotFoundPage />
	},

	{
		path: PATH_URL.HOME,
		element: (
			<ProtectedRoute>
				<HomePage />
			</ProtectedRoute>
		)
	},

	{
		path: PATH_URL.ADMIN,
		element: (
			<ProtectedAdminRoute>
				<AdminPage />
			</ProtectedAdminRoute>
		)
	},
	{
		path: PATH_URL.AUTH.LOGIN,
		element: <LoginPage />
	}
]

export const router = createBrowserRouter(routes)
