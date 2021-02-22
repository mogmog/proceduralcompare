import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as ArrowIcon } from '../../svg/arrow-down.svg';

const CarouselArrowButton = (props) => {
    return (
        <button 
            className="carousel-arrow-btn"
            onClick={props.onClick}
        >
            <ArrowIcon className={props.type === 'next' ? 'carousel-arrow-btn-next' : 'carousel-arrow-btn-prev'} />
        </button>
    )
};

CarouselArrowButton.propTypes = {
    type: PropTypes.oneOf(['next', 'prev']).isRequired,
    onClick: PropTypes.func,
};

export default CarouselArrowButton;
