import { useCustomAuth } from '@/hooks/useCustomAuth'

export function AdminPage() {
	const { user } = useCustomAuth()

	return (
		<div className='flex h-screen w-full flex-col items-center justify-center gap-10'>
			<h1 className='text-3xl text-white'>ADMIN OR SUPERADMIN</h1>

			<p className='text-2xl'>
				Visit this side user with username:{' '}
				<strong className='text-green-500'>{user?.username}</strong>
			</p>
		</div>
	)
}
