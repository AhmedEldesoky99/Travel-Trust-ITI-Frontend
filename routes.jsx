import { createBrowserRouter } from "react-router-dom";

//import components
import { HomePage } from "../src/pages/Home";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
]);
