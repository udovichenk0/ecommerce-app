import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "./pages";
function App() {
  return (
    <div className='App'>
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
