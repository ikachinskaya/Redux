import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";

import * as actionCreators from "./../../../actions/taskCreators";

const TaskForm = (props) => {
  const { createTaskAction } = props;

  const submitHandler = (values, formikBag) => {
    createTaskAction(values);
    formikBag.reset();
  };

  return (
    <Formik
      initialValues={{
        text: "",
        isDone: false,
      }}
      onSubmit={submitHandler}
    >
      <Form>
        <Field name="text" placeholder="Введите задачу" />
        <button type="submit">Добавить задачу</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTaskAction: (values) => dispatch(actionCreators.createTask(values)),
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
