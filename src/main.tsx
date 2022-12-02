// eslint-disable-next-line import/default
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { createRoot } from 'react-dom/client'
import '@/shared/api/firebase'
import '@/app/index.css'

import App from '@/App'

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY)

createRoot(document.getElementById('root') as HTMLElement).render(
<Elements stripe={stripePromise}>
	<App />
</Elements>
)

