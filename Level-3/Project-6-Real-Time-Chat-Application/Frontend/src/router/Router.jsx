import { Route, Routes } from "react-router";
import Home from "../pages/Home";
function Router() {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default Router;