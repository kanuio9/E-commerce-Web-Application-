import React from "react";
import { Add, DomainVerification } from "@mui/icons-material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

export default function CartItem({item}) {
    const dispatch = useDispatch();
    const handleUpdateCartItem = (num) => {
        const data = {data: {quantity:item.quantity+num}, cartItemId:item?._id};
        dispatch(updateCartItem(data));
    }
    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item.id));
    }
    return (
        <div className="p-5 shadow-lg border rounded-md mt-10">
            <div className="flex items-center ">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
                    {/* <img className="w-full h-full object-cover object-top" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/28427370/2024/9/2/ccf1149d-24bb-42f9-a525-7110fbb9fda21725259692919-CAVA-Women-High-Rise-Ankle-Length-Training-Gym-Aerial-Leggin-2.jpg" alt="cart-img" /> */}
                    <img className="w-full h-full object-cover object-top" src={item.product.imageUrl} alt="cart-img" />
                </div>
                <div className="ml-5 space-y-1 ">
                    {/* <p className="font-semibold text-sm">Women High-Rise Ankle-Length Training Gym Aerial Leggings Tights</p> */}
                    <p className="font-semibold text-sm">{item.product.title}</p>
                    <p className="opacity-70 text-xs">size: {item.size}, Brown</p>
                    <p className="opacity-70 mt-2 text-xs">sold by: {item.product.brand}</p>
                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>₹{item.price}</p>
                        <p className='opacity-50 line-through'>₹{item.discountedPrice}</p>
                        <p className='text-green-700 font-semibold'>{item.discountPersent}% off</p>
                    </div>
                </div>

            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <RemoveIcon onClick={() => handleUpdateCartItem(-1)} disabled={item.quantity<= 1} />
                    <span className="py-1 px-7 border rounded-sm text-sm">{item.quantity}</span>
                    <AddIcon onClick={() => handleUpdateCartItem(1)} sx={{color: "#FF3F6C"}} />
                </div>
                <div>
                    <Button onClick={handleRemoveCartItem} sx={{color: "#FF3F6C"}}>remove</Button>
                </div>
            </div>
        </div>
    );
}