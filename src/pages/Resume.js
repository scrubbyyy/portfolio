import { Button } from "react-bootstrap";
import Header from "../components/Header.js";
import ResumePdf from "../images/resume/OngNataliaResume2021.pdf";
import ResumePng from "../images/resume/OngNataliaResume2021.png";

function Resume() {
  return (
    <div style={styles.container}>
      <Header title="Resume" />
      <a href={ResumePdf} download>
        <Button variant="link">Click To Download</Button>
      </a>
      <br />
      <img style={styles.image} src={ResumePng} alt="Resume" />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
  image: {
    width: "99%",
    maxWidth: "1000px",
    height: "auto",
  },
};

export default Resume;
