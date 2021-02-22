import React from 'react';
import CarouselAxis from './CarouselAxis';
import CarouselItem from './CarouselItem';
import CarouselThumbItem from './CarouselThumbItem';

const CarouselAxisExample = () => {
    const items = [
        {
            id: "1",
            renderItem: (
                <CarouselItem backgroundColor="#343434">
                    Annapurna Circuit
                </CarouselItem>
            )

        },

        {
            id: "1",
            renderItem: (
                <CarouselItem backgroundColor="#34495e">
                    Day 01 - From Kathmandu, travel west to Besisahar [820m/2690 ft] via private vehicle or public bus, taking six to seven hours.
                </CarouselItem>
            )

        },
        {
            id: "2",
            renderItem: (
                <CarouselItem backgroundColor="#e74c3c">
                    Day 02 - Trek to Khudi [790m/2592 ft]
                </CarouselItem>
            )

        },
        {
            id: "3",
            renderItem: (
                <CarouselItem backgroundColor="#9b59b6">
                    Day 03 - Trek to Bahundanda [1310m/4298 ft]
                </CarouselItem>
            )
        },
        {
            id: "4",
            renderItem: (
                <CarouselItem backgroundColor="#f1c40f">
                    Day 04 - Trek to Jagat [1290m/4232 ft]
                </CarouselItem>
            )
        },
        {
            id: "5",
            renderItem: (
                <CarouselItem backgroundColor="#e67e22">
                    Carousel Item 5
                </CarouselItem>
            )
        },
    ];

    return (
        <CarouselAxis items={items} />
    );
};

export default CarouselAxisExample;
