import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';

function CarouselLogin() {
    return (
        <Carousel controls={false} interval={5000} fade wrap touch indicators={true}>
            <Carousel.Item>
                <Image
                    className="h-30 carousel-img-1"
                    alt="First slide" fluid
                />
                <Carousel.Caption>
                    <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie magna ultrices massa efficitur facilisis.</p>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselLogin;