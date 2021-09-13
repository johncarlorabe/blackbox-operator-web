import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function Home() {
  const user = "ADMIN USER";
  return (
    <div>
      <Row className="px-3 my-4 justify-content-start">
        <h7 className="secondary-text text-left">HOMEPAGE</h7>
        <h4 className="display-7 main-text text-left mb-0 pt-3">
          Welcome back, {user}!
        </h4>
        <small className="text-left text-secondary">
          Last login: August 31, 2021 06:00 PM
        </small>
      </Row>
      <Row className="px-3 m-auto d-flex justify-content-around">
        <Col>
          <Row>
            <Card
              className="card-custom bg-main shadow"
              style={{ height: "15rem" }}
            >
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col xs={8}></Col>
      </Row>
    </div>
  );
}

export default Home;
