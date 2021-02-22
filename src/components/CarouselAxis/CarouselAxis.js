import React, { useMemo } from 'react';
import { useSpringCarousel } from 'react-spring-carousel-js';

import CarouselArrowButton from './CarouseArrowButton';
import CarouselThumbsWrapper from './CarouselThumbsWrapper';
import CarouselWrapper from './CarouselWrapper';

import './index.css';

const CarouselAxis = (props) => {
    const {
		carouselFragment,
		thumbsFragment,
		slideToPrevItem,
		slideToNextItem,
    } = useSpringCarousel({
		withThumbs: false,
		withLoop: false,
		carouselSlideAxis: 'x',
		items: props.items || []
    });

	return (
		<div className="carousel">
			<CarouselWrapper>
				<CarouselArrowButton
					type="prev"
					onClick={slideToNextItem}
				/>

				{carouselFragment}

				<CarouselArrowButton
					type="next"
					onClick={slideToPrevItem}
				/>
			</CarouselWrapper>


		</div>
	);
};

export default CarouselAxis;
