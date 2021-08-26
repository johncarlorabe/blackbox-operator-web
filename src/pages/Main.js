import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Navigation/Sidebar";
import { Col, Row, Container } from 'react-bootstrap';
import Home from "./Homepage/Home";
import Login from "./Login/Login";

function Main() {
    return (
        <Container fluid>
            <Row>
                <Col sm="auto" className="p-0">
                <Sidebar />
                </Col>
                <Col sm="auto">
                <h3 className="display-7 main-text text-left mb-0">MAIN PAGE</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;