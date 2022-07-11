import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import itemReducer from './slices/itemSlice'
import sidebarReducer from './slices/sidebarSlice'

export const store = configureStore({
	reducer: {
		user: userReducer,
		playlist: itemReducer,
		sidebar: sidebarReducer,
	},
})
