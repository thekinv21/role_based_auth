import React, { Fragment } from 'react'

import { ReactQueryProvider } from './ReactQueryProvider'
import { ReduxProvider } from './ReduxProvider'

interface IApplicationProvider {
	children: React.ReactNode
}

export function ApplicationProvider({ children }: IApplicationProvider) {
	return (
		<Fragment>
			<ReduxProvider>
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</ReduxProvider>
		</Fragment>
	)
}
