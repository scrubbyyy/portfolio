import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ResumePdf from "../images/resume/OngNataliaResume2021.pdf";
import ResumePng from "../images/resume/OngNataliaResume2021.png";
import SocialMediaLinks from "../components/SocialMediaLinks.js";
import { content } from "../Config.js";

function Resume({ theme, isDarkMode }) {
  const styles = {
    container: {
      textAlign: "center",
    },
    image: {
      width: "98%",
      maxWidth: "1000px",
      height: "auto",
    },
    content: {
      color: theme.secondaryFont,
      marginLeft: 25,
      marginRight: 25,
    },
  };

  return (
    <>
      <div style={styles.container}>
        <Card
          style={{
            marginTop: 10,
            marginBottom: 10,
            maxWidth: "800px",
            width: "98%",
            borderColor: theme.separator,
          }}
        >
          <Card.Header
            as="h4"
            style={{
              textAlign: "center",
              backgroundColor: theme.navBackground,
              color: theme.mainFont,
              fontFamily: "Helvetica-Bold",
            }}
          >
            Resume
          </Card.Header>
          <Card.Body style={{ backgroundColor: theme.background }}>
            <Card.Text style={{ color: theme.secondaryFont }}>
              {content.aboutMe}
            </Card.Text>
            <Card.Text style={{ color: theme.secondaryFont }}>
              Thanks for checking out my portfolio!
            </Card.Text>
            <SocialMediaLinks isDarkMode={isDarkMode} />
            <a href={ResumePdf} download>
              <Button variant="link">Natalia Ong Resume.pdf</Button>
            </a>
          </Card.Body>
        </Card>
        <img style={styles.image} src={ResumePng} alt="Resume" />
      </div>
    </>
  );
}

export default Resume;
