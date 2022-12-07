import { onAuthStateChanged } from "firebase/auth";
import { Suspense, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { basketModel } from "@/entities/basket";
import { api, viewerModel } from "@/entities/session";
import { auth } from "@/shared/api";
import { Loader } from "@/shared/ui/spinner";

import { routes } from "./app/route";
import { persistor, store } from "./app/store";
import { NotificationPopup } from "./entities/notification";


function App() {
  const [loading, setLoading ] = useState(false)
useEffect(() => {
  onAuthStateChanged(auth, async (user) => {
    if(user) {
      const data = await api.getUser(user.uid)
      store.dispatch(viewerModel.actions.setProfile(data))
      store.dispatch(basketModel.actions.setBasket(data?.basket))
      setLoading(true)
    }
    setLoading(true)
})
}, [])
if(!loading) return <div className="h-screen w-full flex items-center justify-center"><Loader/></div> 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
          <div className=''>
          <Suspense fallback={null}>
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
            <NotificationPopup/>
        </div>
      </BrowserRouter>
    </PersistGate>
    </Provider>
      
    
  );
}

export default App
