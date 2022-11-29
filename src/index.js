import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/Error/Error";
import Profile from "./routes/Profile/Profile";
import Documents from "./routes/Documents/Documents";
import Faq from "./routes/Faq/Faq";
import Admin from "./routes/Admin/Admin";
import Auth from "./routes/Auth/Auth";
import Home from "./routes/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
