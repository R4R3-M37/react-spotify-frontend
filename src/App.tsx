import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Authpage from '@pages/Auth'

import Sidebar from '@components/Sidebar'
import Header from '@components/Header'
import AppRoutes from '@components/AppRoutes'
import Footer from '@components/Footer'

const App: React.FC = () => {
	const location = useLocation()
	const { user } = useSelector((state: any) => state.user)

	const isLoginPage: boolean = location.pathname === '/login' || location.pathname === '/register'

	if (isLoginPage) {
		return <Authpage />
	}

	return (
		<>
			<div className='flex flex-grow overflow-auto'>
				<Sidebar />
				<div className='flex-1 overflow-auto'>
					<Header />
					<AppRoutes />
				</div>
			</div>
			{!user && <Footer />}
		</>
	)
}

export default App
