import { Nav, Navbar } from "react-bootstrap";
import { colors, content } from "../Config.js";

function Natigation() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <p style={styles.title}>{content.mainTitle}</p>
        <p style={styles.subtitle}>{content.subtitle}</p>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link style={styles.navItem} href="/">
          Portfolio
        </Nav.Link>
        <Nav.Link style={styles.navItem} href="/projects">
          Projects
        </Nav.Link>
        <Nav.Link style={styles.navItem} href="/resume">
          Resume
        </Nav.Link>
        <Nav.Link style={styles.navItem} href="/about-me">
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
    fontFamily: "Helvetica-Bold"
  },
  subtitle: {
    fontSize: 15,
    color: colors.secondaryFont,
    margin: 0,
  },
  navItem: {
    color: colors.navFont,
  },
};

export default Natigation;
