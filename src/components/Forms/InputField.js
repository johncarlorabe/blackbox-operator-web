import React from "react";
import { Form } from "react-bootstrap";
import { useController } from "react-hook-form";
import { checkErrors } from "../../utils/InputFieldUtil";

function InputField(props) {
  const { type, label, labelclass, inputclass, size, errors, placeholder } = props;
  const { field } = useController(props);
  const { errorMessage, hasError } = checkErrors(errors, field.name, label);

  return (
    <Form.Group className="text-left">
      <Form.Label className={labelclass}>{label}</Form.Label>
      <Form.Control
        className={`${inputclass} 
        ${hasError && "is-invalid"}`}
        size={size}
        type={type}
        {...field}
        placeholder={placeholder}
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
