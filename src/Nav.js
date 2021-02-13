import "./Nav.css";

import { Nav, Navbar } from "react-bootstrap";

function Natigation() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">
          <p style={{fontSize: 25, margin: 0}}>Natalia Ong's Portfolio</p>
          <p style={{fontSize: 15, color: "grey", margin: 0}}>2D Artist | Illustrator | Concept Artist</p>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Portfolio</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/about-me">About Me</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Natigation;
