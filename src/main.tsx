import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { ApplicationProvider } from './provider/ApplicationProvider'
import { router } from './router/router'
import './style/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApplicationProvider>
			<RouterProvider router={router} />
		</ApplicationProvider>
	</React.StrictMode>
)
