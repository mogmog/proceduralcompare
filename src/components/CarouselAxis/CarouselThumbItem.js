import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { UseSpringCarouselContext } from 'react-spring-carousel-js';

const CarouselThumbItem = (props) => {
    const { slideToItem } = React.useContext(UseSpringCarouselContext);

    return (
        <div 
            className={classNames("carousel-thumb-item", props.className)}
            style={{
                color: props.primaryColor,
                backgroundColor: props.backgroundColor,
                ...props.style
            }}
            onClick={() => {
                slideToItem(props.id);
                if (props.onClick) {
                    props.onClick();
                }
            }}
        >
            {props.children}
        </div>
    );
};

CarouselThumbItem.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    primaryColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default CarouselThumbItem;
