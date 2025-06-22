import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from "../Pages/Home";

import PruductPages from "../Pages/PruductPages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route index element={<Home />} />
        <Route path="/Prudact" element={<PruductPages />} />
      </Route>
    </>
  )
);

export default router;
