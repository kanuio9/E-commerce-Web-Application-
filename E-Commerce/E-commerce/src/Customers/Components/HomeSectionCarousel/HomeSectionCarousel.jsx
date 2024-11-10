import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../public/CSS/Carousel.css';


const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
};



const Carousel = ({ data, SectionName }) => {
    const items = data.map((item) => (
        <div className="carousel-item" key={item.id}>
            <img
                className="carousel-image"
                role="presentation"
                src={item.image}
                alt="product"
            />
            <div className="shop-overlay">
                <button className="shop-button">Shop Now</button>
                <p className="shop"><i>{item.title}</i></p>
            </div>
        </div>
    ));

    return (
        <div className="relative">
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{SectionName}</h2>
            <div>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                />

            </div>
        </div>
    );
};

export default Carousel;
