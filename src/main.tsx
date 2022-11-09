// eslint-disable-next-line import/default
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App'
import './app/index.css'
import { persistor, store } from './app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
            <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>
);
