import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
function MenuTrue() {
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
          name="logout"
          onClick={handleItemClick}
          active={activeItem === "logout"}
        >
          Logout
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default MenuTrue;
