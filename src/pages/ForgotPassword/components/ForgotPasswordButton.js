import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useFormContext } from "react-hook-form";

function apiRequest() {
  //REPLACE WITH API CALLING
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function ForgotPasswordButton(props) {
  console.log(props);
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const isFormValid = Object.keys(formData).length !== 0 ? true : false;

  const { handleSubmit } = useFormContext();

  useEffect(() => {
    if (isFormValid) {
      apiRequest().then(() => {
        history.push("/");
      });
    }
  }, [isFormValid]);

  return (
    <Button
      onClick={handleSubmit((data) => setFormData(data))}
      className="px-4"
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
      {isFormValid ? " Please wait.." : "Submit"}
    </Button>
  );
}

export default ForgotPasswordButton;
