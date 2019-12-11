import React, { Component } from "react";
import FormButton from "./FormButton";
import FormHeader from "./FormHeader";
import Input from "./Input";
import Joi from "joi-browser";

class Form extends Component {
  validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  onChange = ({ target: input }) => {
    const data = { ...this.state.data };
    const errors = {};
    const errorMessage = this.validateInput(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validateForm = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    const errors = {};

    if (!error) return null;

    for (let items of error.details) {
      errors[items.path[0]] = items.message;
    }

    return errors;
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validateForm();
    if (errors) this.setState({ errors });
    else this.callSubmit();
  };

  renderButton = (label, validator = null) => {
    return <FormButton label={label} validator={validator} />;
  };

  renderFormHeader = title => {
    return <FormHeader title={title} />;
  };

  renderInput = (name, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        onChange={this.onChange}
        errors={errors[name]}
      />
    );
  };
}

export default Form;
