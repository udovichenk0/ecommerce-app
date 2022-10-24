import { Route, Routes } from "react-router-dom";
import { routes } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          {routes.map(({path, Component})=> {
            return <Route key={path} path={path} element={<Component/>}/>
          }) }
        </Route>
      </Routes>
    </div>
  );
}

export default App
