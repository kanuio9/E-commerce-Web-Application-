import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customers/Pages/HomePage/HomePage.jsx";
import Cart from "../Customers/Components/Cart/Cart";
import Footer from "../Customers/Components/Footer/Footer";
import Product from "../Customers/Components/Product/Product.jsx";
import ProductDetails from "../Customers/Components/ProductDetails.jsx/ProductDetails.jsx";
import Navigation from "../Customers/Components/Navigation/Navigation.jsx";
import CheckOut from "../Customers/Components/CheckOut/CheckOut.jsx";
import Order from "../Customers/Components/Order/Order.jsx";
import OrderDetails from "../Customers/Components/Order/OrderDetails.jsx";


export default function CustomerRouters() {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path="/login" element={<HomePage />} />
                <Route path="/register" element={<HomePage />} />

                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/checkout" element={<CheckOut />}></Route>
                <Route path="/account/order" element={<Order />}></Route>
                <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>

            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    );
}