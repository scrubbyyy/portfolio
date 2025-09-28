import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { HashLink as Link } from "react-router-hash-link";
import { content } from "../Config.js";

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

  const imagesProjects = importAll(
    require.context("../images/projects", false, /\.(png|jpe?g|svg)$/),
  );

  const sections = [
    { title: "Apex Legends", images: apexImages, id: "apex", emoji: "🎮" },
    { title: "Personal Work", images: personalImages, id: "personal", emoji: "🎨" },
    { title: "Illustrations", images: illustrationImages, id: "illustrations", emoji: "✏️" },
    { title: "Star Wars: Commander", images: starWarsImages, id: "starwars", emoji: "🚀" },
    { title: "Glu Mobile", images: gluImages, id: "glu", emoji: "📱" },
    { title: "LolByte", images: imagesProjects, id: "lolbyte", emoji: "🎮" },
  ];

  const openLightbox = (images, index) => {
    setCurrentImages(images.map((image) => ({ src: image })));
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <Container fluid className="pt-3" id="top">
      <Row className="justify-content-center text-center">
        <Col md={8}>
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
        </Col>
      </Row>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentImages}
        index={currentIndex}
        plugins={[Thumbnails, Zoom]}
        closeOnSwipeDown={true}
        thumbnails={{ showToggle: true, scroll: true }}
      />

      {sections.map((section, index) => (
        <div key={section.id} id={section.id}>
          {index > 0 && <hr />}
          <div className="d-flex align-items-center my-4 px-3">
            <div className="flex-grow-1 text-center">
              <h2 className="mb-0">{section.title}</h2>
            </div>
          </div>
          {section.id === "lolbyte" && (
            <Row className="justify-content-center text-center py-3">
              <Col md={8}>
                <p>{content.lolbyte}</p>
              </Col>
            </Row>
          )}
          <Row>
            {section.images.map((image, index) => (
              <Col md={section.id === "lolbyte" ? 7 : 4} className="mx-auto mb-4">
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
        </div>
      ))}
    </Container>
  );
}

export default Home;
