import "./Natigation.css";

import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

import DarkModeToggle from "react-dark-mode-toggle";
import { content } from "../Config.js";

function Natigation({ theme, isDarkMode, darkModeHandler }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      variant={isDarkMode ? "dark" : "light"}
      className="nav-bar"
      expanded={expanded}
    >
      <Navbar.Brand href="/">
        <p className="nav-bar-title">{content.mainTitle}</p>
        <p className="nav-bar-subtitle">{content.subtitle}</p>
      </Navbar.Brand>
      <div className="dark-mode-toggle-container">
        <DarkModeToggle
          onChange={darkModeHandler}
          checked={isDarkMode}
          size={45}
          speed={3}
        />
      </div>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            onClick={() => setExpanded(false)}
            className="nav-item"
            href="/#"
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            onClick={() => setExpanded(false)}
            className="nav-item"
            href="/#/resume"
          >
            About Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Natigation;
