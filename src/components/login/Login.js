import React from "react";
import Form from "../../utils/Form";
import AuthContext from "../../contexts/AuthContext";
function Login() {
  return (
    <AuthContext.Consumer>
      {({ auth, setAuth }) => <Form login={setAuth} view="login" />}
    </AuthContext.Consumer>
  );
}

export default Login;
