import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { withCookies } from "react-cookie";

function AuthHoc(props) {
  const auth = useContext(AuthContext).auth;
  const authCookie = props.cookies.get("auth");
  const renderValue = () => {
    if (auth) {
      return <React.Fragment>{props.children}</React.Fragment>;
    } else if (!auth) {
      if (authCookie) {
        return <React.Fragment>{props.children}</React.Fragment>;
      } else {
        props.history.replace("/login");
        return <p></p>;
      }
    }
  };

  return renderValue();
}

export default withCookies(AuthHoc);
