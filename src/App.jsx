import "./main.css";
import Navbar from "./Component/navbar/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import { Children } from "react";
import Footer from "./Component/footer/Footer";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
