import React, { useState } from "react";
import FormButton from "./FormButton";
import FormHeader from "./FormHeader";
import Input from "./Input";
import Joi from "joi-browser";
import { toast } from "react-toastify";

function Form({login, view}) {
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

  const details = { username: "valentine", password: "pass" };

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
    newData[input.name] = input.value;
    setData(newData);
    setErrors(errors);
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
    const newLogin = { ...details };
    if (
      newData.username === newLogin.username &&
      newData.password === newLogin.password
    ) {
      login(true);
    } else {
      return toast.error("Incorrect username or password");
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const errors = validateForm();
    if (errors) setErrors(errors);
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
  
  
  const renderForm = ()=>{
    if(view === "login"){
      return (
      <form onSubmit={onSubmit}>
      <div className="form-container">
        {renderFormHeader("Login")}
        {renderInput("username")}
        {renderInput("password", "password")}
        {renderButton("Login", validateForm())}
      </div>
    </form>
  )
    }
    
  }

  return (
    renderForm()
  );
}
export default Form;
