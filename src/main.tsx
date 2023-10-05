import { createRoot } from 'react-dom/client'
import '@/shared/api/firebase'
import '@/app/index.css'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from '@/App'

import { store, persistor } from './app/store'


createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
)

