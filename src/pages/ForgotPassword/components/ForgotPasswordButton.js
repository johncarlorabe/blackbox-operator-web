import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function apiRequest() {
  //REPLACE WITH API CALLING
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function ForgotPasswordButton(props) {
  console.log(props);
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      apiRequest().then(() => {
        history.push("/");
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <Button
      onClick={() => setLoading(true)}
      className="px-4"
      type="submit"
      variant="dark"
      disabled={isLoading}
    >
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        style={isLoading == false ? { display: "none" } : {}}
      />
      {isLoading ? " Please wait.." : "Submit"}
    </Button>
  );
}

export default ForgotPasswordButton;
