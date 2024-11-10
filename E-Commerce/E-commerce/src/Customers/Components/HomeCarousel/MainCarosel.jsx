import React from "react";
import MainCaroselData  from "./MainCaroselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Height } from "@mui/icons-material";
import { width } from "@mui/system";

export default function MainCarosel() {
    const items = MainCaroselData.map((item) => (
        <img
            className="cursor-pointer -z-10 object-cover object-top w-full h-full" 
            role="presentation" 
            src={item.image} 
            alt="lehenga" 
        />
    ));

    return (
        <AliceCarousel 
            animationType="fadeout" 
            items={items}
            disableButtonsControls
            disableDotsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
        />
    );
}
