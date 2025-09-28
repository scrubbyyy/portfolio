import { Container, Row, Col, Image } from "react-bootstrap";
import { content } from "../Config.js";

import headshot from "../images/headshot/natalia.jpeg";
import SocialMediaLinks from "../components/SocialMediaLinks.js";

function Resume({ isDarkMode }) {
  return (
    <Container className="pt-3">
      <Row className="justify-content-center align-items-center py-3">
        <Col md={4} className="text-center">
          <Image
            src={headshot}
            roundedCircle
            fluid
            className="headshot-image"
          />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>{content.aboutMe}</p>
          <p>{content.aboutMeFooter}</p>
          <div className="d-flex justify-content-start mt-4">
            <SocialMediaLinks isDarkMode={isDarkMode} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
