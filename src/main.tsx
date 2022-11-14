import { onAuthStateChanged } from 'firebase/auth';
// eslint-disable-next-line import/default
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import '@/shared/api/firebase'
import './app/index.css'

import App from '@/App'
import { viewerModel } from '@/entities/viewer';
import { firebase,auth } from '@/shared/api';

import { persistor, store } from './app/store';


if(onAuthStateChanged(auth, async (user) => {
    if(user) {
        const data = await firebase.getUser(user.uid)
        store.dispatch(viewerModel.actions.onAuthStateChanged(data))
    }
    else{
        console.log('failed to auth')
    }
}))

createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
            <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>
);