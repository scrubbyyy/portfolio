import { Nav, Navbar } from "react-bootstrap";
import { colors, content } from "../Config.js";

function Natigation() {
  return (
    <Navbar expand="lg" sticky="top" bg="light">
      <Navbar.Brand href="/">
        <p style={styles.title}>{content.mainTitle}</p>
        <p style={styles.subtitle}>{content.subtitle}</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          style={
            window.location.pathname === "/" ? null : { display: "none" }
          }
          className="ml-auto"
          defaultActiveKey="#env"
          variant="tabs"
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
  },
};

export default Natigation;
