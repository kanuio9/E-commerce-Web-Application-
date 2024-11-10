import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navigation from './Customers/Components/Navigation/Navigation.jsx';
import HomePage from './Customers/Pages/HomePage/HomePage';
import { Home } from '@mui/icons-material';
import Footer from './Customers/Components/Footer/Footer';
import Product from "./Customers/Components/Product/Product.jsx";
import ProductDetails from './Customers/Components/ProductDetails.jsx/ProductDetails.jsx';
import Cart from './Customers/Components/Cart/Cart.jsx';
import CheckOut from './Customers/Components/CheckOut/CheckOut.jsx';
import Order from "./Customers/Components/Order/Order.jsx";
import OrderDetails from './Customers/Components/Order/OrderDetails.jsx';
import CustomerRouters from './Routers/CustomerRouters.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<CustomerRouters />}></Route>
        </Routes>

      </div>
    </>
  )
}

export default App;
