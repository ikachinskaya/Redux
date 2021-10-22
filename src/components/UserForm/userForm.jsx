import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import * as UserActionCreators from "../../actions/userCreators";
const initialValues = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
};
const UserForm = (props) => {
  const { createUserRequest } = props;
  const submitHandler = (values, formikBag) => {
    createUserRequest(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
        <Field name="firstName" placeholder="firstName" />
        <Field name="lastName" placeholder="lastName" />
        <Field name="password" placeholder="password" type="password" />
        <Field name="email" placeholder="email" />
        <button type="submit">Создать пользователя</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUserRequest: (userData) => {
      dispatch(UserActionCreators.createUserRequest(userData));
    },
  };
};
export default connect(null, mapDispatchToProps)(UserForm);
