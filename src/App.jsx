import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ReactQueryDevtools } from "react-query/devtools";

import Navbar from "./components/shared/Navbar";
import CustomInput from "./components/shared/FormComponents/CustomInput";
import TourCard from "./components/shared/TourCard";

//style
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Navbar />
        <CustomInput />
        <TourCard />
        <RouterProvider router={router} />
        <ToastContainer autoClose={2000} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
