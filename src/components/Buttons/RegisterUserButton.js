import React, { useState,useEffect } from "react";
import { Button, Spinner } from 'react-bootstrap';

function registerUserRequest() {
    //REPLACE WITH API CALLING
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  
function RegisterUserButton(props) {
    console.log("props");
    console.log(props);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            registerUserRequest().then(() => {
            setLoading(false);
          });
        }
      }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button onClick={() => handleClick()} type="submit" variant="dark" disabled={isLoading}>
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                style={isLoading == false ? { display: 'none' } : {}}
            />
            {isLoading ? ' Please wait..':'Submit'}
        </Button>
    );
}

export default RegisterUserButton;