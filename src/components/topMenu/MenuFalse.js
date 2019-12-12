import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
function MenuFalse() {
  const [activeItem, setActive] = useState("");
  const handleItemClick = (e, { name }) => {
    setActive(name);
  };
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

export default MenuFalse;
