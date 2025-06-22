// import Login from "./pages/Login";
// import Connter from "./pages/Connter";
import { RouterProvider } from "react-router";
import router from "./Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />

    
    </div>
  );
};

export default App;
