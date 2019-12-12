import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function AuthHoc(props) {
  const auth = useContext(AuthContext).auth;

  const renderValue = () => {
    if (auth) {
      return <div>{props.children}</div>;
    } else {
      props.history.replace("/login");
      return <p></p>;
    }
  };

  return renderValue();
}

export default AuthHoc;
