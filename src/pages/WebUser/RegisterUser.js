import React, { useState } from "react";
import { Col, Row, Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import RegiserUserButton from "./components/RegisterUserButton";
import RegisterUserForm from "./components/RegisterUserForm";
import CancelButton from "../../components/Buttons/CancelButton";

function RegisterUser() {
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    setFormData(data);
  };
  console.log(errors);
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
            <Row>
              <Col
                className="d-flex justify-content-end"
                md={{ span: 4, offset: 8 }}
              >
                <CancelButton />
                <RegiserUserButton {...formData} />
              </Col>
            </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterUser;
