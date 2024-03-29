import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import MenuTrue from "./MenuTrue";
import MenuFalse from "./MenuFalse";

function TopMenu(props) {
  const auth = useContext(AuthContext).auth;

  if (auth) return <MenuTrue />;
  else return <MenuFalse />;
}

export default TopMenu;
