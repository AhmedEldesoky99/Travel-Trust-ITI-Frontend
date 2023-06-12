import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ReactQueryDevtools } from "react-query/devtools";

//style
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import { AddTourFormProvider } from "./context/AddTourFormContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        {/* <AddTourFormProvider></AddTourFormProvider> */}
        <RouterProvider router={router} />
        <ToastContainer limit={1} rtl={false} pauseOnFocusLoss />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
