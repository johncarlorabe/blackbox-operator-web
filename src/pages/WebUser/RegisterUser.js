import React from "react";
import { Row, Card} from "react-bootstrap";
import RegisterUserForm from "./components/RegisterUserForm";

function RegisterUser() {
  return (
    <div className="m-3 text-left">
      <Row>
        <h4 className="display-7 main-header text-left mb-0 pt-3">
          Register Account
        </h4>
        <small className="text-left text-secondary">
          Please fill all the required fields (*)
        </small>
      </Row>
      <Card className="my-3 shadow card-white">
        <Card.Body>
          <Row>
            <RegisterUserForm />
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterUser;
