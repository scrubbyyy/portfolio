import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { HashLink as Link } from "react-router-hash-link";

function importAll(r) {
  return r.keys().map(r);
}

function Home() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  const apexImages = importAll(
    require.context("../images/home/apex", false, /\.(png|jpe?g|svg)$/),
  );

  const personalImages = importAll(
    require.context("../images/home/personal", false, /\.(png|jpe?g|svg)$/),
  );

  const illustrationImages = importAll(
    require.context(
      "../images/home/illustrations",
      false,
      /\.(png|jpe?g|svg)$/,
    ),
  );

  const starWarsImages = importAll(
    require.context("../images/home/starwars", false, /\.(png|jpe?g|svg)$/),
  );

  const gluImages = importAll(
    require.context("../images/home/glu", false, /\.(png|jpe?g|svg)$/),
  );

  const sections = [
    { title: "Apex Legends", images: apexImages, id: "apex" },
    { title: "Personal Work", images: personalImages, id: "personal" },
    { title: "Illustrations", images: illustrationImages, id: "illustrations" },
    { title: "Star Wars: Commander", images: starWarsImages, id: "starwars" },
    { title: "Glu Mobile", images: gluImages, id: "glu" },
  ];

  const openLightbox = (images, index) => {
    setCurrentImages(images.map((image) => ({ src: image })));
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <Container fluid className="pt-3" id="top">
      <Row className="justify-content-center text-center">
        <Col md={8}></Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="portfolio-card">
            <Card.Header as="h5" className="text-center">
              Portfolio Links
            </Card.Header>
            <Card.Body className="text-center">
              <div className="d-flex justify-content-center flex-wrap flex-column flex-md-row">
                {sections.map((section, index) => (
                  <Button
                    key={index}
                    as={Link}
                    to={`/#${section.id}`}
                    variant="secondary"
                    size="md"
                    className="m-2 portfolio-button-custom"
                  >
                    {section.title}
                  </Button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          <div className="d-flex align-items-center my-4 px-3">
            <div className="flex-grow-1 text-center">
              <h2 className="mb-0">{section.title}</h2>
            </div>
          </div>
          <Row>
            {section.images.map((image, index) => (
              <Col md={4} key={index} className="mb-4">
                <Image
                  src={image}
                  alt={`${section.title} ${index + 1}`}
                  fluid
                  thumbnail
                  className="portfolio-image"
                  onClick={() => openLightbox(section.images, index)}
                />
              </Col>
            ))}
          </Row>
          <hr />
        </div>
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentImages}
        index={currentIndex}
      />
    </Container>
  );
}

export default Home;
