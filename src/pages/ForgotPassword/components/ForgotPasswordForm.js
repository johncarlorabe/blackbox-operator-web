import React from "react";
import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../components/Forms/InputField";
import { Email } from "../../../utils/DatatypeUtil";
import ForgotPasswordButton from "./ForgotPasswordButton";
import CancelButton from "../../../components/Buttons/CancelButton";

function ForgotPasswordForm() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Form>
        <div className="mb-5">
          <InputField
            name="Email"
            size="lg"
            type="email"
            label="Email Address"
            inputclass="border-0 shadow-sm login-field"
            control={methods.control}
            errors={methods.formState.errors}
            rules={Email}
          />
        </div>
      </Form>
      <div className="text-center">
        <CancelButton />
        <ForgotPasswordButton />
      </div>
    </FormProvider>
  );
}
export default withRouter(ForgotPasswordForm);
