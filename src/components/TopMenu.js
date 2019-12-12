import React, { useState, useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function TopMenu() {
  const [activeItem, setActive] = useState("");
  const handleItemClick = (e, { name }) => {
    setActive(name);
  };

  const auth = useContext(AuthContext).auth;

  if (auth) {
    return (
      <Menu>
        <Menu.Item
          as={Link}
          name="home"
          to="/"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="about"
          to="/about"
          active={activeItem === "about"}
          onClick={handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            onClick={handleItemClick}
            active={activeItem === "logout"}
          >
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  } else {
    return (
      <Menu>
        <Menu.Item
          as={Link}
          name="home"
          to="/"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="about"
          to="/about"
          active={activeItem === "about"}
          onClick={handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/register"
            name="register"
            onClick={handleItemClick}
            active={activeItem === "register"}
          >
            Register
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            onClick={handleItemClick}
            active={activeItem === "login"}
          >
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default TopMenu;
