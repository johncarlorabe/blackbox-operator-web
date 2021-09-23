import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";

function ForgotPasswordForm() {
  const [formdata, setFormdata] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form submitted");
    setFormdata(data);
    setIsValidForm(true);
  };
  const onError = (errors) => {
    console.log("error");
    console.log(errors);
  };

  const submitForm = () => {
    handleSubmit(onSubmit, onError)();
  };
  return (
    <Form>
      <Form.Group className="mb-5 text-left" controlId="loginUsername">
        <Form.Control
          className={`login-field border-0 shadow-sm ${
            errors.Email && "is-invalid"
          }`}
          size="lg"
          type="email"
          {...register("Email", { required: true })}
        />
        {errors.Email && (
          <Form.Control.Feedback type="invalid">
            Please enter valid Email Address
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </Form>
  );
}
export default withRouter(ForgotPasswordForm);
