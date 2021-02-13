import Header from "../components/Header.js";
import ResumePdf from "../images/resume/OngNataliaResume2021.png";

function Resume() {
  return (
    <div style={styles.container}>
      <Header title={"Resume"} />
      <img src={ResumePdf} width="60%" height="auto" alt="Resume" />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
};

export default Resume;
