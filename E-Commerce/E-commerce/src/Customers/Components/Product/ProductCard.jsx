import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
    const {title, brand, imageUrl, price, discountedPrice, color, discountPersent} = product;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/product/${product._id}`);
    }   
    return (
        <div onClick={handleNavigate} className="ProductCard w-[15rem] m-3 transition-all cursor-pointer flex flex-col items-center bg-white overflow-hidden">
            <div className=" h-[16rem] w-[13rem] object-cover object-left-top bg-white ">
                <img src={product.image} alt="Product-image" />
            </div>

            <div className="textPart bg-white p-3">
                <div>
                    <p className="font-bold opacity-60">{product.brand}</p>
                    <p>
                        {product.title}
                    </p>
                </div>
                <div className="flex items-center space-x-2"> 
                    <p className="font-semibold">{product.selling_price}</p>
                    <p className="line-through opacity-50">{product.price}</p>
                    <p className="text-green-800 font-semibold">{product.discount}</p>
                </div>
            </div>

        </div>
    );
}