import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import { store } from '@redux/store'

import '@styles/normilize.css'
import '@styles/tailwind.css'

import KeyboardNavigation from '@components/KeyboardNavigation'
import CustomContextMenu from '@components/CustomContextMenu'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Router>
		<KeyboardNavigation />
		<Provider store={store}>
			<CustomContextMenu />
			<App />
		</Provider>
	</Router>,
)
