import { createSlice } from '@reduxjs/toolkit'

interface IReduxStoreUser {
	username: string | null
	isLoggedIn: boolean
}
const initialState: IReduxStoreUser = {
	isLoggedIn: false,
	username: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		reduxLoggedIn(state, { payload }) {
			state.isLoggedIn = payload.isLoggedIn
			state.username = payload.username
		},
		reduxLoggedOut(state) {
			state.isLoggedIn = false
			state.username = null
		},
		reduxLoggedInUser(state) {
			return state
		}
	}
})

export const { reduxLoggedIn, reduxLoggedOut, reduxLoggedInUser } =
	userSlice.actions

export default userSlice.reducer
