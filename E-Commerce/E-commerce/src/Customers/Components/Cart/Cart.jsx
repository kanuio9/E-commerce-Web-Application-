import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import { store } from "../../../State/store";

export default function Cart() {
    const navigate = useNavigate();
    const {cart} = useSelector(store => store);
    const dispatch = useDispatch();

    let handleCheckOut = () => {
        navigate("/checkOut?step=2");
    }

    useEffect(() => {
        dispatch(getCart());
    } , [cart.updateCartItem, cart.deleteCartItem]);

    return (

        <div>
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    {cart.cart?.CartItems.map((item) => <CartItem item={item} />)}
                </div>
                <div className="mt-10">
                    <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                        <div className="border p-5">
                            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                            <hr />
                            <div className="space-y-3 font-semibold mb-10 text-sm">
                                <div className="flex justify-between pt-5 text-black ">
                                    <span>Price</span>
                                    <span>₹{cart.cart?.totalPrice}</span>
                                </div>
                                <div className="flex justify-between pt-5 ">
                                    <span>Discount on MRP</span>
                                    <span className="text-green-700">-₹{cart.cart?.discounte}</span>
                                </div>
                                <div className="flex justify-between pt-5 ">
                                    <span>Shipping Fee</span>
                                    <span className="text-green-700">Free</span>
                                </div>
                                <div className="flex justify-between pt-5 font-bold text-base">
                                    <span>Total Amount</span>
                                    <span className="text-green-700">₹{cart.cart?.totalDiscountedPrice}</span>
                                </div>
                            </div>
                            <button
                                onClick={handleCheckOut}
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#FF3F6C] px-8 py-3 text-base font-medium text-white hover:bg-[#FF3F6C] focus:outline-none focus:ring-2 focus:ring-[#FF3F6C] focus:ring-offset-2"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}