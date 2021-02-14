import { Button } from "react-bootstrap";
import Header from "../components/Header.js";
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
      width: "99%",
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
    <div style={styles.container}>
      <br />
      <Header title="Resume" theme={theme} />
      <p style={styles.content}>{content.aboutMe}</p>
      <p style={styles.content}>Thanks for checking out my portfolio!</p>
      <SocialMediaLinks isDarkMode={isDarkMode} />
      <br />
      <a href={ResumePdf} download>
        <Button variant="link">Natalia Ong Resume.pdf</Button>
      </a>
      <br />
      <br />
      <img style={styles.image} src={ResumePng} alt="Resume" />
    </div>
  );
}

export default Resume;
