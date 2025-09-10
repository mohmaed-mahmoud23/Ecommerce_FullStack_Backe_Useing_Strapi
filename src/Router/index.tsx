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
import { DachbordAdminPanal } from "../Pages/DachBord/DachbordAdminPanal";
import Inedx from "../Pages/DachBord/inedx";
const token = CookiServes.get("jwt");

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home   />} />
          <Route path="/Drower" element={<CardDrower />} />
          <Route path="/Prudact" element={<PruductPages />} />
          <Route path="/Login" element={<Login isAsuntketde={token} />} />
        </Route>

        <Route path="/dashBord" element={<DachbordAdminPanal />}>
          <Route index element={<Inedx />} />
          <Route path="Prudact" element={<h1>Prudact</h1>} />
          <Route path="catigory" element={<h1>catigory</h1>} />
        </Route>
      </Route>
    </>
  )
);

export default router;
