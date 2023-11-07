import { Component } from "react";
import { MenuItems } from "./MenuItems";

import logo from "../assets/logo.png";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "40px", margin: "10px 0" }}
          />
        </h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link className="text-decoration-none" to="/Dashboard">
            <button type="submit">Dashboard</button>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
