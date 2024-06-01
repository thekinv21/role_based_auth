import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ILogin } from '@/types/auth.types'

import { PATH_URL } from '@/config/path.config'

import { useCustomAuth } from '@/hooks/useCustomAuth'
import { useCustomDispatch } from '@/hooks/useCustomDispatch'

import { authService } from '@/services/auth.service'

import { saveTokens } from '@/utils/auth.util'

export function LoginPage() {
	const navigate = useNavigate()

	const { jwtToken } = useCustomAuth()

	useEffect(() => {
		if (jwtToken && location.pathname.includes('/auth')) {
			navigate(PATH_URL.HOME)
		}
	}, [jwtToken, navigate])

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<ILogin>({
		mode: 'onChange'
	})

	const { reduxLoggedIn } = useCustomDispatch()

	const { mutate: login } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: ILogin) => authService.login(data),
		onSuccess: ({ data }) => {
			saveTokens(data.content)
			reduxLoggedIn({
				isLoggedIn: true,
				username: data?.content?.user?.username
			})

			navigate(PATH_URL.HOME)
		}
	})

	const onSubmit: SubmitHandler<ILogin> = data => {
		login(data)
	}

	return (
		<div className='flex h-screen w-full items-center justify-center'>
			<div className='flex h-[500px] w-[500px] select-none flex-col items-center justify-center rounded-md border border-slate-700 bg-transparent shadow-2xl'>
				<div className='max-h-20 pt-10 text-center'>
					<h1 className='text-3xl font-semibold uppercase text-white'>
						React Auth
					</h1>
				</div>

				<form
					className='flex h-full w-full flex-col items-center justify-center space-y-8 px-8'
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='flex w-full flex-col items-start justify-center gap-2 text-sm'>
						<label>Username</label>
						<input
							placeholder='Enter username'
							{...register('username', { required: true })}
							className='w-full rounded-md border border-gray-500 bg-transparent px-4 py-2 outline-none transition-all duration-300 ease-out focus:border-purple-500'
							autoComplete='off'
						/>
						{errors.username && (
							<p className='mt-2 text-xs text-red-600'>
								Username is required...
							</p>
						)}
					</div>

					<div className='flex w-full flex-col items-start justify-center gap-2 text-sm'>
						<label>Password</label>
						<input
							type='password'
							{...register('password', { required: true })}
							placeholder='Enter password'
							className='w-full rounded-md border border-gray-500 bg-transparent px-4 py-2 outline-none transition-all duration-300 ease-out focus:border-purple-500'
							autoComplete='off'
						/>

						{errors.password && (
							<p className='mt-2 text-xs text-red-600'>
								Password is required...
							</p>
						)}
					</div>

					<button className='w-full rounded-md border-none bg-purple-700 py-2 text-sm font-semibold uppercase outline-none transition-all ease-in-out hover:bg-purple-800'>
						Get Start
					</button>
				</form>
			</div>
		</div>
	)
}
