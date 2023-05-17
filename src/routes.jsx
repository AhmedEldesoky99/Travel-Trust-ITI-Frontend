import { createBrowserRouter } from "react-router-dom";

//import components
import Home from "./pages/Home";

export const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
