import React, { useState } from "react";
import { Col, Row, Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import RegiserUserButton from "../../components/Buttons/RegisterUserButton";

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
        <h4 className="display-7 main-text text-left mb-0 pt-3">
          Register Account
        </h4>
        <small className="text-left text-secondary">
          Please fill all the required fields (*)
        </small>
      </Row>
      <Card className="my-3 border-0 shadow rounded">
        <Card.Body>
          <form id="regiserUserForm" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Form.Group className="col-4 mb-3" controlId="FirstName">
                <Form.Label>First Name</Form.Label>
                <input
                  className={`form-control ${errors.FirstName && "is-invalid"}`}
                  type="text"
                  placeholder="First Name"
                  {...register("FirstName", { required: true, maxLength: 80 })}
                />
                {errors.FirstName && (
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid First Name
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group className="col-4 mb-3" controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <input
                  className={`form-control ${errors.LastName && "is-invalid"}`}
                  type="text"
                  placeholder="Last Name"
                  {...register("LastName", { required: true, maxLength: 80 })}
                />
                {errors.LastName && (
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Last Name
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group className="col-4 mb-3" controlId="EmailAddress">
                <Form.Label>Email Address</Form.Label>
                <input
                  className={`form-control ${
                    errors.EmailAddress && "is-invalid"
                  }`}
                  type="text"
                  placeholder="Email Address"
                  {...register("EmailAddress", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.EmailAddress && (
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Email Address
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group className="col-4 mb-3" controlId="MobileNumber">
                <Form.Label>Mobile Number</Form.Label>
                <input
                  className={`form-control ${
                    errors.MobileNumber && "is-invalid"
                  }`}
                  type="tel"
                  placeholder="Mobile Number"
                  {...register("MobileNumber", {
                    required: true,
                  })}
                />
                {errors.MobileNumber && (
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Mobile Number
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group className="col-4 mb-3" controlId="Userlevel">
                <Form.Label>Userlevel</Form.Label>
                <select
                  {...register("Userlevel", { required: true })}
                  className={`form-control ${errors.Userlevel && "is-invalid"}`}
                >
                  <option value="ADMIN">ADMIN</option>
                  <option value="IT">IT</option>
                  <option value="REPORT">REPORT</option>
                  <option value="FINANCE">FINANCE</option>
                </select>
                {errors.Userlevel && (
                  <Form.Control.Feedback type="invalid">
                    Please select Userlevel
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group className="col-4 mb-3" controlId="Status">
                <Form.Label>Status</Form.Label>
                <select
                  {...register("Status", { required: true })}
                  className={`form-control ${errors.Status && "is-invalid"}`}
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>
                {errors.Status && (
                  <Form.Control.Feedback type="invalid">
                    Please select Status
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Row>
            <Row>
              <Col
                className="d-flex justify-content-end"
                md={{ span: 4, offset: 8 }}
              >
                <Button className="mx-2" variant="light">
                  Cancel
                </Button>
                <RegiserUserButton {...formData} />
              </Col>
            </Row>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterUser;
