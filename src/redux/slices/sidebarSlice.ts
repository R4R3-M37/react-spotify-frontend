import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
	active: false,
}

export const sidebarSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setSidebarActive: (state) => {
			state.active = true
		},
		setSidebarClosed: (state) => {
			state.active = false
		},
	},
})

export const { setSidebarActive, setSidebarClosed } = sidebarSlice.actions

export default sidebarSlice.reducer
