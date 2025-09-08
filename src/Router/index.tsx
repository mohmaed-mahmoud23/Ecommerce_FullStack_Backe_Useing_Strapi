import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from "../Pages/Home";

import PruductPages from "../Pages/PruductPages";
import Login from "../Auth/Login";
import AppLayout from "../Layout/AppLayout";
import CookiServes from "../servers/CookiServes";
import { CardDrower } from "../Pages/CardDrower";
const token = CookiServes.get("jwt");

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/Drower" element={<CardDrower />} />
          <Route path="/Prudact" element={<PruductPages />} />!
          <Route path="/Login" element={<Login isAsuntketde={token} />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
