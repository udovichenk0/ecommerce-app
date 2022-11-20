import { onAuthStateChanged } from 'firebase/auth';
// eslint-disable-next-line import/default
import { createRoot } from 'react-dom/client'

import '@/shared/api/firebase'
import './app/index.css'

import App from '@/App'
import { viewerModel } from '@/entities/viewer';
import { firebase,auth } from '@/shared/api';

import { store } from './app/store';
import { basketModel } from './entities/basket';
const root = document.getElementById('root')



createRoot(root as HTMLElement).render(<App />)