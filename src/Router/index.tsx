import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from "../Pages/Home";

import PruductPages from "../Pages/PruductPages";
import Login from "../Auth/Login";
import AppLayout from "../Layout/AppLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home />} />
          <Route path="/Prudact" element={<PruductPages />} />
        </Route>
          <Route path="/Login" element={<Login />} />
      </Route>
    </>
  )
);

export default router;
