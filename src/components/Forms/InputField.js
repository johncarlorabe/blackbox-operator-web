import React from "react";
import { Form } from "react-bootstrap";
import { useController } from "react-hook-form";

const checkErrors = (errors, name) => {
  const errorMessage = (errors[`${name}`] && errors[`${name}`].message) || "";
  return {
    errorMessage,
    hasError: !!errorMessage,
  };
};

function InputField(props) {
  const { type, label, labelclass, inputclass, size, errors } = props;
  const { field } = useController(props);
  const { errorMessage, hasError } = checkErrors(errors, field.name);

  return (
    <Form.Group className="mb-5 text-left">
      <Form.Label className={labelclass}>{label}</Form.Label>
      <Form.Control
        className={`${inputclass} border-0 shadow-sm 
        ${hasError && "is-invalid"}`}
        size={size}
        type={type}
        {...field}
      />
      {hasError && (
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}
export default InputField;
