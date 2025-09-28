import { Container, Row, Col, Image } from "react-bootstrap";
import { content } from "../Config.js";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function importAll(r) {
  return r.keys().map(r);
}

function Projects() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = importAll(
    require.context("../images/projects", false, /\.(png|jpe?g|svg)$/),
  );

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <Container className="pt-3">
      <Row className="justify-content-center text-center py-3">
        <Col md={8}>
          <h1>LolByte</h1>
          <p>{content.lolbyte}</p>
        </Col>
      </Row>
      <Row>
        {images.map((image, index) => (
          <Col md={9} className="mx-auto mb-4">
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              fluid
              thumbnail
              className="portfolio-image"
              onClick={() => openLightbox(index)}
            />
          </Col>
        ))}
      </Row>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((image) => ({ src: image }))}
        index={currentIndex}
      />
    </Container>
  );
}

export default Projects;
