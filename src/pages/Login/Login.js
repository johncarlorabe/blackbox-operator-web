import React from "react";
import Footer from "../../components/Display/Footer";
import CarouselLogin from "../../components/Display/CarouselLogin";
import { Col, Row } from "react-bootstrap";
import LoginButton from "./components/LoginButton";
import { withRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function Login() {
  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-5 d-none d-md-flex bg-black">
            <Col className="align-items-center">
              <Row className="justify-content-center my-2">
                <img className="login-logo" fluid="true" />
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
                      <h3 className="display-7 main-header text-left mb-0">
                        Welcome to Etisalat
                      </h3>
                      <p className="sub-header text-left mb-4">
                        Sign in to continue.
                      </p>
                    </div>
                    <LoginForm />
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
