import viteLogo from '/vite.svg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import reactLogo from '@/assets/react.svg'

import { PATH_URL } from '@/config/path.config'

import { useCustomAuth } from '@/hooks/useCustomAuth'
import { useCustomDispatch } from '@/hooks/useCustomDispatch'

import { removeFromCookie } from '@/utils/auth.util'

import styles from './HomePage.module.scss'
import { IRoleEnum } from '@/enum/auth.enum'

type TypeNavLink = {
	title: string
	url: string
}

export function HomePage() {
	const { jwtToken, user } = useCustomAuth()
	const { reduxLoggedOut } = useCustomDispatch()

	const isAdminOrSuperAdmin =
		user?.roles.includes(IRoleEnum.ADMIN) ||
		user?.roles.includes(IRoleEnum.SUPERADMIN)

	const navigate = useNavigate()
	const location = useLocation()

	const onLogout = () => {
		removeFromCookie()
		reduxLoggedOut()
		navigate(PATH_URL.AUTH.LOGIN)
	}

	const navLinks: TypeNavLink[] = [
		{
			title: 'HOME PAGE',
			url: PATH_URL.HOME
		},
		{
			title: 'ABOUT PAGE',
			url: '#'
		},
		{
			title: 'CONTACT PAGE',
			url: '#'
		}
	]

	return (
		<section className='flex h-screen w-full flex-col items-center justify-center'>
			<nav className='mb-20 flex items-center justify-around gap-5'>
				{navLinks.map((item: TypeNavLink, idx: number) => (
					<NavLink
						key={idx}
						className={`font-semibold transition-all duration-300 ease-in-out hover:text-green-600 ${location.pathname.includes(item.url) ? 'text-green-400' : 'text-white'}`}
						to={item.url}
					>
						{item.title}
					</NavLink>
				))}
			</nav>

			<div className='mb-5 flex items-center justify-center gap-5'>
				<a href='#' target='_blank'>
					<img
						src={viteLogo}
						className={styles.logo}
						alt='Vite logo'
					/>
				</a>
				<a href='#' target='_blank'>
					<img
						src={reactLogo}
						className={styles.logo}
						alt='React logo'
					/>
				</a>
			</div>
			<h1 className='my-20 text-5xl'>Vite + React</h1>

			<div className='flex items-center justify-center gap-5'>
				<button
					type='button'
					onClick={onLogout}
					className='rounded-md border-none bg-purple-600 px-10 py-1.5 outline-none transition-all duration-500 ease-in-out hover:bg-purple-700'
				>
					{jwtToken ? 'Logout' : 'Login'}
				</button>

				{isAdminOrSuperAdmin && (
					<button
						type='button'
						onClick={() => {
							navigate(PATH_URL.ADMIN)
						}}
						className='rounded-md border-none bg-green-600 px-10 py-1.5 outline-none transition-all duration-500 ease-in-out hover:bg-green-700'
					>
						Admin Page
					</button>
				)}
			</div>
		</section>
	)
}
