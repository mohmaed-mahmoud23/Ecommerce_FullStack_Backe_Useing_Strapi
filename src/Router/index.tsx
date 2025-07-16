import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from "../Pages/Home";

import PruductPages from "../Pages/PruductPages";
import Login from "../Auth/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route index element={<Home />} />
        <Route path="/Prudact" element={<PruductPages />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    </>
  )
);

export default router;
