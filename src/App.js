import { RouterProvider } from 'react-router-dom';
import './App.css';
import ProductProvider from './Components/ProductCartDesign/Context/ProductProvider';
import { router } from './router';


function App() {
  return (
    <div className="App">
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
