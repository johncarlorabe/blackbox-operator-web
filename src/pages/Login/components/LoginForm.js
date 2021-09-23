import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../components/Forms/InputField";
import LoginButton from "./LoginButton";

function LoginForm() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form>
        <InputField
          name="Username"
          label="Username"
          labelclass="login-label"
          inputclass="login-field"
          control={methods.control}
          size="lg"
          type="text"
          errors={methods.formState.errors}
          rules={{ required: "Please enter Username" }}
        />
        <Link className="float-end forgot-password-link" to="/forgotpassword">Forgot Password?</Link>
        <InputField
          name="Password"
          label="Password"
          labelclass="login-label"
          inputclass="login-field"
          control={methods.control}
          size="lg"
          type="password"
          errors={methods.formState.errors}
          rules={{ required: "Please enter Password" }}
        />
      </Form>
      <div className="text-center">
        <LoginButton />
      </div>
    </FormProvider>
  );
}
export default withRouter(LoginForm);
