import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import MenuTrue from "./MenuTrue";
import MenuFalse from "./MenuFalse";

function TopMenu(props) {
  const auth = useContext(AuthContext).auth;
  const AuthCookie = props.cookies.get("auth");

  if (auth) return <MenuTrue />;
  else {
    return AuthCookie ? <MenuTrue /> : <MenuFalse />;
  }
}

export default TopMenu;
