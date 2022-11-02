import { initializeApp } from "@firebase/app";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./pages";
import { getDatabase } from "firebase/database";
import firebaseConfig from './shared/api/config'
import { firebase } from "./shared/api";

function App() {
  firebase.getProducts()
  return (
    <div className="App">
      <Suspense >
        <Routes>
          <Route>
            {routes.map(({path, Component})=> {
              return <Route key={path} path={path} element={<Component/>}/>
            }) }
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App
