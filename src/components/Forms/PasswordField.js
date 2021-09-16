import React from "react";
import { Form } from 'react-bootstrap';

function PasswordField(props) {
    console.log(props);
    return (
        <Form.Control className="login-field border-0 shadow-sm" size="lg" type="password" placeholder="" />
    );
}

export default PasswordField;