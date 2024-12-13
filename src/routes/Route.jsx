import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Blog from "../pages/blog/Blog";
import SingleProducts from "../pages/product/SingleProducts";
import CartPage from "../pages/cart/CartPage";
import SingleBlog from "../pages/blog/SingleBlog";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import PrivareRoutes from "../privateRoutes/PrivareRoutes";
import Login from "../pages/login_regis/Login";
import SignUp from "../pages/login_regis/SignUp";

const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "blog/:id",
          element: <SingleBlog />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "shop/:id",
          element: <SingleProducts />,
        },
        {
          path: "cart-page",
          element: (
            <PrivareRoutes>
              <CartPage />
            </PrivareRoutes>
          ),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {},
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default route;
