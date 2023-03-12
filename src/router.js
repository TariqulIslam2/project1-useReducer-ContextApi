import { createBrowserRouter } from "react-router-dom";
import MultiForm from "./Components/Form/MultiForm";
import CartPage from "./Components/ProductCartDesign/CartPage/CartPage";
import OrderProducts from "./Components/ProductCartDesign/OrderProducts/OrderProducts";
import ProductsPage from "./Components/ProductCartDesign/ProductsPage/ProductsPage";
import SimpleCalculation from "./Components/SimpleCalculation/SimpleCalculation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage></ProductsPage>,
  },
  {
    path: "/form",
    element: <MultiForm></MultiForm>,
  },
  {
    path: "/calculator",
    element: <SimpleCalculation></SimpleCalculation>,
  },
  {
    path: "/products",
    element: <ProductsPage></ProductsPage>,
  },
  {
    path: "/myOrders",
    element: <OrderProducts></OrderProducts>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);
