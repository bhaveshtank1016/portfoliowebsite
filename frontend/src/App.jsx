import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contect from "./pages/Contects/Contect";
import Applayout from "./pages/Applayout";
import Services from "./pages/services/Services";
import Projects from "./pages/Projects/Projects";
import AchievementsSection from "./pages/achivments/achievements ";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },

      {
        path: "/contect",
        element: <Contect />,
      },
       {
        path: "/achievements ",
        element: <AchievementsSection  />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
