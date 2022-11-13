import { onAuthStateChanged } from 'firebase/auth';
// eslint-disable-next-line import/default
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './shared/api/firebase'
import App from './App'
import './app/index.css'
import { persistor, store } from './app/store';
import { viewerModel } from './entities/viewer';
import { firebase } from './shared/api';
// eslint-disable-next-line import/no-internal-modules
import { auth } from './shared/api/config';


if(onAuthStateChanged(auth, async (user) => {
    if(user) {
        const data = await firebase.getUser(user.uid)
        store.dispatch(viewerModel.actions.onAuthStateChanged(data))
    }
    else{
        console.log('failed to auth')
    }
})

)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
            <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>
);