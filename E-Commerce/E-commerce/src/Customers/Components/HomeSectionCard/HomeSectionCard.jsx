import React from "react";

export default function HomeSectionCard({ product }) {
    return (
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-gray">
            <div className="h-[15rem] w-[13rem]">
                <img className="object-cover object-top w-[10rem] h-[13rem]" src={product.image} alt="" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.title}</p>
            </div>
        </div>
    );
}