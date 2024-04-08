import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/components/App/App'
import './src/styles/index.css'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
