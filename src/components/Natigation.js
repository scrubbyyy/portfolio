import { Nav, Navbar } from "react-bootstrap";
import { colors, content } from "../Config.js";

function Natigation() {
  return (
    <Navbar sticky="top" bg="light">
      <Navbar.Brand href="#home">
        <p style={styles.title}>{content.mainTitle}</p>
        <p style={styles.subtitle}>{content.subtitle}</p>
      </Navbar.Brand>
      <Nav
        style={window.location.pathname === "/" ? null : { visibility: "hidden" }}
        className="ml-auto"
      >
        <Nav.Link style={styles.secondaryNavItem} href="#env">
          Environments
        </Nav.Link>
        <Nav.Link style={styles.secondaryNavItem} href="#starwars">
          Star Wars: Commander
        </Nav.Link>
        <Nav.Link style={styles.secondaryNavItem} href="#glu">
          Glu Mobile
        </Nav.Link>
        <Nav.Link style={styles.secondaryNavItem} href="#personal">
          Personal Work
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link style={styles.mainNavItem} href="/">
          Portfolio
        </Nav.Link>
        <Nav.Link style={styles.mainNavItem} href="/projects">
          Projects
        </Nav.Link>
        <Nav.Link style={styles.mainNavItem} href="/resume">
          Resume
        </Nav.Link>
        <Nav.Link style={styles.mainNavItem} href="/about-me">
          About Me
        </Nav.Link>
      </Nav>
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
  },
};

export default Natigation;
