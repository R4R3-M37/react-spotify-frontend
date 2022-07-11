import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { LoginFacebookIcon, LoginGoogleIcon, LoginTweeterIcon, SpotifyIcon } from '@icons'

const Authpage: React.FC = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const isLoginPage = location.pathname === '/login'

	return (
		<>
			<div className="text-center mt-24">
				<Link to={'/'}>
					<div className="flex items-center justify-center">
						<SpotifyIcon className="w-[190px] pb-5" style={{ color: 'darkgreen', width: '30vh' }} />
					</div>
				</Link>
			</div>
			<div className="flex justify-center my-2 mx-4 md:mx-0">
				<form className="w-full max-w-xl bg-white rounded-lg shadow-md bg-gradient-to-b from-[#1f1f1f] to-[#121212] p-6">
					<div className="flex flex-wrap -mx-3 mb-6">
						{isLoginPage ? (
							<>
								<div className="w-full md:w-full px-3 mb-6">
									<label
										className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
										htmlFor="Password">
										Email address
									</label>
									<input
										className="appearance-none block w-full bg-white text-white font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
										type="email"
										required
									/>
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label
										className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
										htmlFor="Password">
										Password
									</label>
									<input
										className="appearance-none block w-full bg-white text-white font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
										type="password"
										required
									/>
								</div>
							</>
						) : (
							<>
								<div className="w-full md:w-full px-3 mb-6">
									<label
										className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
										htmlFor="Password">
										Email address
									</label>
									<input
										className="appearance-none block w-full bg-white text-white font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
										type="email"
										required
									/>
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label
										className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
										htmlFor="Password">
										Username
									</label>
									<input
										className="appearance-none block w-full bg-white text-white font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
										type="email"
										required
									/>
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label
										className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
										htmlFor="Password">
										Password
									</label>
									<input
										className="appearance-none block w-full bg-white text-white font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
										type="password"
										required
									/>
								</div>
							</>
						)}
						<div className="w-full flex items-center justify-between px-3 mb-3 ">
							{isLoginPage && (
								<label htmlFor="remember" className="flex items-center w-1/2">
									<input type="checkbox" name="" id="" className="mr-1 bg-white shadow" />
									<span className="text-sm text-white pt-1">Remember Me</span>
								</label>
							)}
							<div className={isLoginPage ? 'w-1/2 text-center' : 'w-1/2 text-left'}>
								<Link to={'/forget-password'} className="text-blue-500 text-sm tracking-tight">
									Forget password?
								</Link>
							</div>
							<div className="w-1/2 text-right">
								<Link
									to={isLoginPage ? '/register' : '/login'}
									className="text-blue-500 text-sm tracking-tight">
									{isLoginPage ? 'Need an account?' : 'Have an account?'}
								</Link>
							</div>
						</div>
						<div className="w-full md:w-full px-3 mb-6">
							<button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-blue-900 focus:border-gray-500">
								{isLoginPage ? 'Sign in' : 'Register'}
							</button>
							<button
								onClick={() => navigate(-1)}
								className="appearance-none block w-full bg-red-600 text-gray-100 font-bold border-gray-200 rounded-lg py-3 mt-3 px-3 leading-tight hover:bg-red-500 focus:outline-none focus:bg-red-900 focus:border-gray-500">
								Back
							</button>
						</div>
						{!isLoginPage && (
							<>
								<div className="mx-auto -mb-6 pb-1">
									<span className="text-center text-xs text-gray-700">or sign up with</span>
								</div>
								<div className="flex items-center w-full mt-2">
									<div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
										<button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
											<LoginFacebookIcon />
										</button>
									</div>
									<div className="w-full md:w-1/3 px-3 pt-4 mx-2">
										<button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
											<LoginGoogleIcon />
										</button>
									</div>
									<div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
										<button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
											<LoginTweeterIcon />
										</button>
									</div>
								</div>
							</>
						)}
					</div>
				</form>
			</div>
		</>
	)
}

export default Authpage
