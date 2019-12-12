import React, { useContext } from "react";
import Form from "../../utils/Form";
import AuthContext from "../../contexts/AuthContext";
function Login(props) {
  const auth = useContext(AuthContext).auth;
  const setAuth = useContext(AuthContext).setAuth;
  return <Form login={setAuth} auth={auth} view="login" {...props} />;
}

export default Login;
