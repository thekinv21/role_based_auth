import { PATH_URL } from '@/config/path.config'

export function NotFoundPage() {
	return (
		<div className='flex h-screen w-full items-center justify-center'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-3xl font-bold text-white'>
					404 - Page is not found
				</h1>

				<button
					type='button'
					onClick={() => {
						window.location.href = PATH_URL.HOME
					}}
					className='my-10 rounded-md border-none bg-purple-600 px-10 py-1.5 outline-none transition-all duration-500 ease-in-out hover:bg-purple-700'
				>
					Go Home
				</button>
			</div>
		</div>
	)
}
