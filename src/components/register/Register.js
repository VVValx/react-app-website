import React from "react";
import Joi from "joi-browser";
import Form from "../../utils/Form";
import { toast } from "react-toastify";

class Register extends Form {
  state = {
    login: { username: "valentine", password: "pass" },
    data: { username: "", password: "", email: "" },
    errors: { username: "", password: "" }
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string()
      .email()
      .required()
  };

  callSubmit = () => {
    toast.success("Account created successfully");
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-container">
          {this.renderFormHeader("Signup Page")}
          {this.renderInput("username")}
          {this.renderInput("password", "password")}
          {this.renderInput("email")}
          {this.renderButton("Register", this.validateForm())}
        </div>
      </form>
    );
  }
}

export default Register;
