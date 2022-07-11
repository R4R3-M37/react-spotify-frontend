import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from '@pages/Home'
import Authpage from '@pages/Auth'
import Library from '@pages/Library'
import Release from '@pages/Release'

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/library' element={<Library />} />
			<Route path='/release/:type' element={<Release />} />
			<Route path='/login' element={<Authpage />} />
			<Route path='/register' element={<Authpage />} />
		</Routes>
	)
}

export default AppRoutes
