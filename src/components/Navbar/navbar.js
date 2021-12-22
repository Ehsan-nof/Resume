import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: null,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme(e) {
    e.preventDefault();
    if (this.state.theme == null) this.setState({ theme: "dark" });
    if (this.state.theme === "dark") this.setState({ theme: "blue" });
    if (this.state.theme === "blue") this.setState({ theme: "purple" });
    if (this.state.theme === "purple") this.setState({ theme: null });
    document.documentElement.classList = this.state.theme;
  }
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbarLogo">React</h1>
        <ul className="navMenu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href={item.url}
                  onClick={
                    item.label === "Theme" ? (e) => this.toggleTheme(e) : null
                  }
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
