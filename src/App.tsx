import { onAuthStateChanged } from "firebase/auth";
import { Suspense, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { basketModel } from "@/entities/basket";
import { viewerModel } from "@/entities/viewer";
import { auth, firebase } from "@/shared/api";
import { Loader } from "@/shared/ui/spinner";

import { routes } from "./app/route";
import { persistor, store } from "./app/store";


function App() {
  const [loading, setLoading ] = useState(false)
useEffect(() => {
  onAuthStateChanged(auth, async (user) => {
    if(user) {
      const data = await firebase.getUser(user.uid)
      store.dispatch(viewerModel.actions.setProfile(data))
      store.dispatch(basketModel.actions.setBasket(data?.basket))
      setLoading(true)
    }
    setLoading(true)
})
}, [])
if(!loading) {
  return <Loader/>}
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div className=''>
        <Suspense fallback='loading'>
        <Routes>
            {Object.values(routes).map(({path, element}) => {
              return (
                <Route key={path}
                path={path} 
                element={element}/>
              )
            })}
          </Routes>
        </Suspense>
      </div>
      </BrowserRouter>
    </PersistGate>
    </Provider>
      
    
  );
}

export default App
