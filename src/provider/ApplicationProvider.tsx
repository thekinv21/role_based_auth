import React, { Fragment } from 'react'

import { ReduxProvider } from './ReduxProvider'

interface IApplicationProvider {
	children: React.ReactNode
}

export function ApplicationProvider({ children }: IApplicationProvider) {
	return (
		<Fragment>
			<ReduxProvider>{children}</ReduxProvider>
		</Fragment>
	)
}
