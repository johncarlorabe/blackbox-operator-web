import React from "react";
import { Form } from "react-bootstrap";
import { useController } from "react-hook-form";
import { checkErrors } from "../../utils/InputFieldUtil";

function SelectField(props) {
  const { label, labelclass, inputclass, size, errors, options } = props;
  const { field } = useController(props);
  const { errorMessage, hasError } = checkErrors(errors, field.name, label);

  return (
    <Form.Group className="mb-5 text-left">
      <Form.Label className={labelclass}>{label}</Form.Label>
      <select
        className={`${inputclass} 
        ${hasError && "is-invalid"}`}
        size={size}
        {...field}
      >
        <option selected disabled>
          - Select {label} -
        </option>
        {options.map((e, key) => {
          return (
            <option key={key} value={e.value}>
              {e.name}
            </option>
          );
        })}
      </select>
      {hasError && (
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}
export default SelectField;
