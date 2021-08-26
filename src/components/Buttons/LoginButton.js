import React, { useState,useEffect } from "react";
import { Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function userLoginRequest() {
    //REPLACE WITH API CALLING
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  
function LoginButton(props) {
    console.log(props);
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            userLoginRequest().then(() => {
            history.push("/main");
            setLoading(false);
          });
        }
      }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button onClick={() => handleClick()} className="login-button px-4 mt-5" type="submit" variant="dark" size="lg" disabled={isLoading}>
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                style={isLoading == false ? { display: 'none' } : {}}
            />
            {isLoading ? ' Logging in..':'Login'}
        </Button>
    );
}

export default LoginButton;