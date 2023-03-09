import { createBrowserRouter } from "react-router-dom";
import MultiForm from "./Components/Form/MultiForm";
import ProductsPage from "./Components/ProductCartDesign/ProductsPage/ProductsPage";
import SimpleCalculation from "./Components/SimpleCalculation/SimpleCalculation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Deshboard</h1>
      </div>
    ),
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
]);
