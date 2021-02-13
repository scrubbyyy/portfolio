import { Nav, Navbar } from "react-bootstrap";

function Natigation() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <p style={styles.title}>Natalia Ong's Portfolio</p>
        <p style={styles.subtitle}>Concept Art & Illustration</p>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Portfolio</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
        <Nav.Link href="/about-me">About Me</Nav.Link>
      </Nav>
    </Navbar>
  );
}

const styles = {
  title: {
    fontSize: 25,
    margin: 0,
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
    margin: 0,
  },
};

export default Natigation;
