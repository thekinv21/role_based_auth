import React from 'react'
import { Provider } from 'react-redux'

import { store } from '@/store/store'

interface IReduxProvider {
	children: React.ReactNode
}

export function ReduxProvider({ children }: IReduxProvider) {
	return <Provider store={store}>{children}</Provider>
}
