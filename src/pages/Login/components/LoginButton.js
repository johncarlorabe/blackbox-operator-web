import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { login } from "../../../utils/LoginUtil";
import { useFormContext } from "react-hook-form";

function userLoginRequest() {
  //REPLACE WITH API CALLING
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoginButton({ formdata, submitForm }) {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const isFormValid = Object.keys(formData).length !== 0 ? true : false;

  const { handleSubmit } = useFormContext();

  useEffect(() => {
    if (isFormValid) {
      login(); //change logic when redux is implemented
      userLoginRequest().then(() => {
        history.push("/home");
      });
    }
  }, [isFormValid]);

  return (
    <Button
      onClick={handleSubmit((data) => setFormData(data))}
      className="login-button px-4 mt-5"
      type="submit"
      variant="dark"
      size="lg"
      disabled={isFormValid}
    >
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        style={isFormValid == false ? { display: "none" } : {}}
      />
      {isFormValid ? " Logging in.." : "Login"}
    </Button>
  );
}

export default LoginButton;
