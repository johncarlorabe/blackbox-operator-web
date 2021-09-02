import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Navigation/Sidebar";
import { Col, Row, Container, Card } from 'react-bootstrap';
import Home from "./Homepage/Home";
import Login from "./Login/Login";
import SearchBar from "../components/Forms/SearchBar";
import NavigationBar from "../components/Navigation/NavigationBar";

function Main() {
    const user = "ADMIN USER";
    return (
        <Container fluid className="mainPage">
            <Row>
                <Col sm="auto" className="p-0">
                    <Sidebar />
                </Col>
                <Col sm>
                    <Row>
                        <NavigationBar />
                    </Row>
                    <Row className="px-3 my-4 justify-content-start">
                        <h7 className="secondary-text text-left">HOMEPAGE</h7>
                        <h4 className="display-7 main-text text-left mb-0 pt-3">Welcome back, {user}!</h4>
                        <small className="text-left text-secondary">Last login: August 31, 2021 06:00 PM</small>
                    </Row>
                    <Row className="px-3 m-auto d-flex justify-content-around">
                        <Col>
                            <Row>
                                <Card className="card-custom bg-main shadow" style={{ height: '15rem' }}>
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                        <Card.Text>
                                           
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            
                        </Col>
                        <Col xs={8}>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;