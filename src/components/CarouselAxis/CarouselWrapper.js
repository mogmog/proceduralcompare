import React from 'react';

const CarouselWrapper = (props) => {
    return (
        <div className="carousel-wrapper">
            {props.children}
        </div>
    );
};

export default CarouselWrapper;
