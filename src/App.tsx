import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ReactQueryDevtools } from "react-query/devtools";

//style
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";
import "./style.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <RouterProvider router={router} />
        <ToastContainer autoClose={2000} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
