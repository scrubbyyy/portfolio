import { Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

import DarkModeToggle from "react-dark-mode-toggle";
import { content } from "../Config.js";

function Natigation({ theme, isDarkMode, darkModeHandler }) {
  const [expanded, setExpanded] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const styles = {
    navBar: {
      backgroundColor: theme.navBackground,
      top: visible ? 0 : -1000,
      transition: 'top 2s' 
    },
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
      style={styles.navBar}
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

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default Natigation;
