import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Applayout from "./pages/applayout";
import Services from './pages/Services';
import Projects from './pages/Projects'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'

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
        path: "/team",
        element: <Team />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
          {
        path: "/contect",
        element: <Contect/>,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
