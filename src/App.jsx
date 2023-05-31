import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";
import { RouterProvider, useLocation } from "react-router-dom";
import { router } from "./routes";
import { ReactQueryDevtools } from "react-query/devtools";

import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

//style
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  // const location = useLocation();
  const pathsToHide = [
    "/join",
    "/login",
    "/signup",
    "/admin/login",
    "/admin/signup",
  ];
  const pathIncluded = pathsToHide.includes(location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        {/* {!pathIncluded && <Navbar />} */}
        <RouterProvider router={router} />
        <ToastContainer autoClose={2000} />
        {/* {!pathIncluded && <Footer />} */}
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
