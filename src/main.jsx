import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./Components/About/about";
import Homepage from "./Components/Homepage/homepage";
import Services from "./Components/Services/service";
import Contact from "./Components/Contact/contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: [
          <Homepage key={Homepage} />,
          <About key={About} />,
          <Services key={Services} />,
          <Contact key={Contact} />,
        ],
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
