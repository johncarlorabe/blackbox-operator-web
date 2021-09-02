import React from "react";
import Footer from '../../components/Display/Footer'
import CarouselLogin from '../../components/Display/CarouselLogin'
import { Col, Row, Form } from 'react-bootstrap';
import LoginButton from '../../components/Buttons/LoginButton';
import { Link, withRouter } from "react-router-dom";
import PasswordField from "../../components/Forms/PasswordField";

function Login() {
    const test = {
        param1: 'val1',
        param2: 'val2',
    };
    return (
        <div className="maincontainer">
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="col-md-5 d-none d-md-flex bg-black">
                        <Col className="align-items-center">
                            <Row className="justify-content-center my-2">
                                <img style={{ height: '170px', width: 'auto' }} src="/img/etisalat-logo.png" fluid />
                            </Row>
                            <Row className="justify-content-center mt-5">
                                <CarouselLogin />
                            </Row>
                        </Col>
                    </div>
                    <div className="col-md-7 bg-light">
                        <div className="login d-flex row align-items-center py-4">
                            <div className="container align-self-end">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto px-5 ">
                                        <div className="col justify-items-end">
                                            <h3 className="display-7 main-text text-left mb-0">Welcome to Etisalat</h3>
                                            <p className="secondary-text text-left mb-4">Sign in to continue.</p>
                                        </div>
                                        <Form>
                                            <Form.Group className="mb-5 text-left" controlId="loginUsername">
                                                <Form.Label className="loginLabel">Username</Form.Label>
                                                <Form.Control className="loginField border-0 shadow-sm" size="lg" type="text" placeholder="" />
                                            </Form.Group>
                                            <Form.Group className="mb-3 text-left" controlId="loginPassword">
                                                <Form.Label className="loginLabel">Password</Form.Label>
                                                <Link className="float-end forgot-password-link" to="/forgotpassword">Forgot Password?</Link>
                                                <PasswordField />
                                            </Form.Group>
                                        </Form>
                                        <LoginButton  {...test} />
                                    </div>
                                </div>
                            </div>
                            <div className="container align-self-end">
                                <div className="row">
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default withRouter(Login);