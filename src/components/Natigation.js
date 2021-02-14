import { Nav, Navbar } from "react-bootstrap";

import DarkModeToggle from "react-dark-mode-toggle";
import { content } from "../Config.js";
import { useState } from "react";

function Natigation({ theme, isDarkMode, darkModeHandler }) {
  const [expanded, setExpanded] = useState(false);

  const styles = {
    title: {
      fontSize: 25,
      color: theme.mainFont,
      margin: 0,
      fontFamily: "Helvetica-Bold",
    },
    subtitle: {
      fontSize: 15,
      color: theme.secondaryFont,
      margin: 0,
    },
    navItem: {
      color: theme.navFont,
      fontFamily: "Helvetica-Bold",
    },
    darkModeToggleContainer: {
      flex: 1,
    },
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      variant={isDarkMode ? "dark" : "light"}
      style={{ backgroundColor: theme.navBackground }}
      expanded={expanded}
    >
      <Navbar.Brand href="/">
        <p style={styles.title}>{content.mainTitle}</p>
        <p style={styles.subtitle}>{content.subtitle}</p>
      </Navbar.Brand>
      <div style={styles.darkModeToggleContainer}>
        <DarkModeToggle
          onChange={darkModeHandler}
          checked={isDarkMode}
          size={45}
          speed={10}
        />
      </div>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            onClick={() => setExpanded(false)}
            style={styles.navItem}
            href="/"
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            onClick={() => setExpanded(false)}
            style={styles.navItem}
            href="/#/projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            onClick={() => setExpanded(false)}
            style={styles.navItem}
            href="/#/resume"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Natigation;
