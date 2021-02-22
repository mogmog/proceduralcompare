import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CarouselItem = (props) => {
    return (
        <div 
            className={classNames('carousel-item', props.className)} 
            style={{
                color: props.primaryColor,
                backgroundColor: props.backgroundColor,
                ...props.style
            }}
        >
            {props.children}
        </div>
    );
};

CarouselItem.propTypes = {
    children: PropTypes.node.isRequired,
    primaryColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

export default CarouselItem;
