import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./Login/Login";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
