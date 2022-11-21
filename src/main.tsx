// eslint-disable-next-line import/default
import { createRoot } from 'react-dom/client'

import '@/shared/api/firebase'
import '@/app/index.css'

import App from '@/App'
const root = document.getElementById('root')



createRoot(root as HTMLElement).render(<App />)