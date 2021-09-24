import React from "react";
import { Row, Col } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../components/Forms/InputField";
import SelectField from "../../../components/Forms/SelectField";
import { MultiWord, Email, Msisdn } from "../../../utils/DatatypeUtil";
import RegisterUserButton from "./RegisterUserButton";
import CancelButton from "../../../components/Buttons/CancelButton";

function RegisterUserForm() {
  const methods = useForm();

  let statusOptions = [
    {value: 'ACTIVE', name:'Active'},  
    {value: 'INACTIVE', name:'Inactive'},  
  ];

  let userslevelOptions = [
    {value: 'ADMIN', name:'Administrator'},  
    {value: 'MANAGER', name:'Manager'},  
  ];
  return (
    <FormProvider {...methods}>
      <form>
        <Row>
          <div className="col-4 mb-3">
            <InputField
              name="FirstName"
              label="First Name"
              inputclass="form-control"
              placeholder="First Name"
              type="text"
              control={methods.control}
              errors={methods.formState.errors}
              rules={MultiWord}
            />
          </div>
          <div className="col-4 mb-3">
            <InputField
              name="LastName"
              label="Last Name"
              inputclass="form-control"
              placeholder="Last Name"
              type="text"
              control={methods.control}
              errors={methods.formState.errors}
              rules={MultiWord}
            />
          </div>
          <div className="col-4 mb-3">
            <InputField
              name="EmailAddress"
              label="Email Address"
              inputclass="form-control"
              placeholder="Email Address"
              type="email"
              control={methods.control}
              errors={methods.formState.errors}
              rules={Email}
            />
          </div>
          <div className="col-4 mb-3">
            <InputField
              name="MobileNumber"
              label="Mobile Number"
              inputclass="form-control"
              placeholder="Mobile Number"
              type="text"
              control={methods.control}
              errors={methods.formState.errors}
              rules={Msisdn}
            />
          </div>
          <div className="col-4 mb-3">
            <SelectField
              name="Userlevel"
              label="Userlevel"
              inputclass="form-control"
              control={methods.control}
              errors={methods.formState.errors}
              rules={{ required: "Please select Userlevel" }}
              options={userslevelOptions}
            />
          </div>
          <div className="col-4 mb-3">
            <SelectField
              name="Status"
              label="Status"
              inputclass="form-control"
              control={methods.control}
              errors={methods.formState.errors}
              rules={{ required: "Please select Status" }}
              options={statusOptions}
            />
          </div>
        </Row>
      </form>
      <Row>
        <Col className="d-flex justify-content-end" md={{ span: 4, offset: 8 }}>
          <CancelButton />
          <RegisterUserButton />
        </Col>
      </Row>
    </FormProvider>
  );
}

export default RegisterUserForm;
