import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TopMenu extends React.Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          as={Link}
          name="home"
          to="/"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          name="about"
          to="/about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/register"
            name="register"
            onClick={this.handleItemClick}
            active={activeItem === "register"}
          >
            Register
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            onClick={this.handleItemClick}
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
