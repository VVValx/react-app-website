import React, { useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import FormButton from "../../utils/FormButton";
import FormHeader from "../../utils/FormHeader";
import Input from "../../utils/Input";
import Joi from "joi-browser";
import { toast } from "react-toastify";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  const schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };

  const login = { username: "valentine", password: "pass" };

  const validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);

    return error ? error.details[0].message : null;
  };

  const onChange = ({ target: input }) => {
    const newData = { ...data };
    const errors = {};
    const errorMessage = validateInput(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    data[input.name] = input.value;

    console.log(input.value);
    setData({ data: newData });
    // setErrors({ errors });
  };

  const validateForm = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    const errors = {};

    if (!error) return null;

    for (let items of error.details) {
      errors[items.path[0]] = items.message;
    }

    return errors;
  };

  const callSubmit = () => {
    const newData = { ...data };
    const newLogin = { ...login };
    if (
      newData.username === newLogin.username &&
      newData.password === newLogin.password
    ) {
      console.log("Correct");
    } else {
      return toast.error("Incorrect username or password");
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const errors = validateForm();
    if (errors) setErrors({ errors });
    else callSubmit();
  };

  const renderButton = (label, validator = null) => {
    return <FormButton label={label} validator={validator} />;
  };

  const renderFormHeader = title => {
    return <FormHeader title={title} />;
  };

  const renderInput = (name, type = "text") => {
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        onChange={onChange}
        errors={errors[name]}
      />
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-container">
        {renderFormHeader("Login")}
        {renderInput("username")}
        {renderInput("password", "password")}
        {renderButton("Login", validateForm())}
      </div>
    </form>
  );
}
export default Login;