import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { colors, content } from "../Config.js";

import { HashLink as Link } from "react-router-hash-link";

function Natigation() {
  return (
    <Navbar expand="lg" sticky="top" bg="light">
      <Navbar.Brand href="/">
        <p style={styles.title}>{content.mainTitle}</p>
        <p style={styles.subtitle}>{content.subtitle}</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown
            title={<span style={styles.mainNavItem}>Portfolio</span>}
          >
            <NavDropdown.Item>
              <Link style={styles.secondaryNavItem} to="/#env">
                Environments
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link style={styles.secondaryNavItem} to="/#starwars">
                Star Wars: Commander
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link style={styles.secondaryNavItem} to="/#glu">
                Glu Mobile
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link style={styles.secondaryNavItem} to="/#illustrations">
                Illustrations
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link style={styles.mainNavItem} href="/#/projects">
            Projects
          </Nav.Link>
          <Nav.Link style={styles.mainNavItem} href="/#/resume">
            Resume
          </Nav.Link>
          <Nav.Link style={styles.mainNavItem} href="/#/about-me">
            About Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const styles = {
  title: {
    fontSize: 25,
    color: colors.mainFont,
    margin: 0,
    fontFamily: "Helvetica-Bold",
  },
  subtitle: {
    fontSize: 15,
    color: colors.secondaryFont,
    margin: 0,
  },
  mainNavItem: {
    color: colors.mainNavFont,
    fontFamily: "Helvetica-Bold",
  },
  secondaryNavItem: {
    color: colors.secondaryNavFont,
    fontSize: 14,
    margin: 5,
  },
};

export default Natigation;
