export function LoginPage() {
	return (
		<div className='flex h-screen w-full items-center justify-center'>
			<div className='flex h-[500px] w-[500px] select-none flex-col items-center justify-center rounded-md border border-slate-700 bg-transparent shadow-2xl'>
				<div className='max-h-20 pt-10 text-center'>
					<h1 className='text-3xl font-semibold uppercase text-white'>
						React Auth
					</h1>
				</div>

				<form className='flex h-full w-full flex-col items-center justify-center space-y-8 px-8'>
					<div className='flex w-full flex-col items-start justify-center gap-2 text-sm'>
						<label>Username</label>
						<input
							placeholder='Enter username'
							className='w-full rounded-md border border-gray-500 bg-transparent px-4 py-2 outline-none transition-all duration-300 ease-out focus:border-purple-500'
						/>
					</div>

					<div className='flex w-full flex-col items-start justify-center gap-2 text-sm'>
						<label>Password</label>
						<input
							type='password'
							placeholder='Enter password'
							className='w-full rounded-md border border-gray-500 bg-transparent px-4 py-2 outline-none transition-all duration-300 ease-out focus:border-purple-500'
						/>
					</div>

					<button className='w-full rounded-md border-none bg-purple-700 py-2 text-sm font-semibold uppercase outline-none transition-all ease-in-out hover:bg-purple-800'>
						Get Start
					</button>
				</form>
			</div>
		</div>
	)
}
