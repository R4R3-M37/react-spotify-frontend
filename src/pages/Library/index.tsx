import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Authpage from '@pages/Auth'

import { FavoriteIcon, LeftArrowIcon, RightArrowIcon, StartListeningIcon } from '@icons'

const Library: React.FC = () => {
	const navigate = useNavigate()
	const { playlist } = useSelector((state: any) => state)
	const { user } = useSelector((state: any) => state.user)
	console.log(playlist)
	if (!user) {
		return <Authpage />
	}

	return (
		<>
			<main className='h-full overflow-y-auto'>
				<div className='container px-6 mx-auto grid'>
					<h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>Dashboard</h2>
					<div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
						<div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gradient-to-b from-[#1f1f1f] to-[#121212]'>
							<div className='p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500'>
								<FavoriteIcon />
							</div>
							<div>
								<p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
									Audio in Your Library
								</p>
								<p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
									{playlist.favoriteID.length}
								</p>
							</div>
						</div>
						<div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gradient-to-b from-[#1f1f1f] to-[#121212]'>
							<div className='p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500'>
								<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
									<path
										fillRule='evenodd'
										d='M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z'
										clipRule='evenodd'></path>
								</svg>
							</div>
							<div>
								<p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
									Audio in App
								</p>
								<p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
									{playlist.items.length}
								</p>
							</div>
						</div>
					</div>
					<div className='w-full overflow-hidden rounded-lg shadow-xs'>
						<div className='w-full overflow-x-auto'>
							<table className='w-full whitespace-no-wrap'>
								<thead>
									<tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 dark:text-gray-400 dark:bg-gradient-to-b from-[#1f1f1f] to-[#121212]'>
										<th className='px-4 py-3'>Music</th>
										<th className='px-4 py-3'>Listening</th>
										<th className='px-4 py-3'>Date</th>
									</tr>
								</thead>
								{playlist.items.map((item: any) => (
									<tbody
										className='divide-y dark:divide-gray-700 dark:bg-gradient-to-b from-[#1f1f1f] to-[#121212]'
										key={item.id}>
										<tr className='text-gray-700 dark:text-gray-400'>
											<td className='px-4 py-3'>
												<div className='flex items-center text-sm'>
													<div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
														<img
															className='object-cover w-full h-full rounded-full'
															src={item.imageURL}
															alt=''
															loading='lazy'
														/>
														<div
															className='absolute inset-0 rounded-full shadow-inner'
															aria-hidden='true'
														/>
													</div>
													<div>
														<p className='font-semibold'>{item.title}</p>
														<p className='text-xs text-gray-600 dark:text-gray-400'>
															{item.producedBy}
														</p>
													</div>
												</div>
											</td>
											<td className='px-4 py-3 text-xs'>
												<td className='px-4 py-3 text-xs'>
													<StartListeningIcon className='w-8 h-8 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 rounded-full shadow-xl' />
												</td>
											</td>
											<td className='px-4 py-3 text-sm'>{item.createdAt}</td>
										</tr>
									</tbody>
								))}
							</table>
						</div>
						<div className='grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 sm:grid-cols-9 dark:text-gray-400 dark:bg-gradient-to-b from-[#1f1f1f] to-[#121212]'>
							<span className='col-span-2' />
							<span className='flex col-span-4 mt-2 sm:mt-auto sm:justify-end'>
								<nav aria-label='Table navigation'>
									<ul className='inline-flex items-center'>
										<li>
											<button
												className='px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple'
												aria-label='Previous'>
												<LeftArrowIcon />
											</button>
										</li>
										<li>
											<button className='px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple'>
												1
											</button>
										</li>
										<li>
											<button
												className='px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple'
												aria-label='Next'>
												<RightArrowIcon />
											</button>
										</li>
									</ul>
								</nav>
							</span>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Library
