import { createBrowserRouter } from 'react-router-dom'

import { PATH_URL } from '@/config/path.config'

import HomePage from '@/screens/home/HomePage'

export const router = createBrowserRouter([
	{
		path: PATH_URL.HOME,
		element: <HomePage />
	},
	{
		path: PATH_URL.AUTH.LOGIN,
		element: <div>Login Page</div>
	},
	{
		path: PATH_URL.AUTH.REGISTER,
		element: <div>Login Page</div>
	}
])
