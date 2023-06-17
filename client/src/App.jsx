import "./App.css";
import { productsData } from "./api/api";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  // ScrollRestoration,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
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
        loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
