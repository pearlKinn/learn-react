import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact ";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
