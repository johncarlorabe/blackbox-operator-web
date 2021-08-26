import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';

function CarouselLogin() {
    return (
        <Carousel controls={false} interval={5000} fade wrap touch indicators={true}>
            <Carousel.Item>
                <Row className="justify-content-center">
                    <Col className="align-self-center">
                        <Image
                            className="h-60"
                            src="/img/carousel/img_1.png"
                            alt="First slide" fluid
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="mt-5">
                        <Carousel.Caption>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie magna ultrices massa efficitur facilisis.</p>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselLogin;