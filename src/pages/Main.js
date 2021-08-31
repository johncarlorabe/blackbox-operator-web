import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Navigation/Sidebar";
import { Col, Row, Container } from 'react-bootstrap';
import Home from "./Homepage/Home";
import Login from "./Login/Login";
import SearchBar from "../components/Forms/SearchBar";
import NavigationBar from "../components/Navigation/NavigationBar";

function Main() {
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
                    <h4 className="display-7 main-text text-left mb-0 pt-3">Welcome back, USER!</h4>
                    <small className="text-left text-secondary">Last login: August 31, 2021 06:00 PM</small>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;