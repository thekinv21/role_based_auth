import viteLogo from '/vite.svg'

import reactLogo from '@/assets/react.svg'

import styles from './HomePage.module.scss'

export default function App() {
	return (
		<section className='flex h-screen w-full flex-col items-center justify-center'>
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
			<h1 className='text-2xl'>Vite + React</h1>
			<p className='my-5 text-xl'>
				Click on the Vite and React logos to learn more
			</p>
		</section>
	)
}
