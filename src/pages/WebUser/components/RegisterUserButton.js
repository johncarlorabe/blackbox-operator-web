import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

function registerUserRequest(data) {
  //REPLACE WITH API CALLING
  console.log("data",data);
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function RegisterUserButton(props) {
  console.log("props", props);
  const [formData, setFormData] = useState({});
  let isFormValid = Object.keys(formData).length !== 0 ? true : false;

  const { handleSubmit } = useFormContext();

  useEffect(() => {
    if (isFormValid) {
      registerUserRequest(formData).then(() => {
        isFormValid=false;
      });
    }
  }, [isFormValid]);

  return (
    <Button
      onClick={handleSubmit((data) => setFormData(data))}
      type="submit"
      variant="dark"
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
      {isFormValid ? " Please wait.." : "Register"}
    </Button>
  );
}

export default RegisterUserButton;
