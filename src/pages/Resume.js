import Header from "../components/Header.js";
import ResumePdf from "../images/resume/OngNataliaResume2021.png";

function Resume() {
  return (
    <div style={styles.container}>
      <Header title="Resume" />
      <img style={styles.image} src={ResumePdf} alt="Resume" />
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
