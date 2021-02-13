import { Nav, Navbar } from "react-bootstrap";

function Natigation() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">Natalia Ong</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Natigation;
