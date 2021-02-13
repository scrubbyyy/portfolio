import Header from "./Header.js";
import ResumePdf from "./images/resume/OngNataliaResume2021.png";

function Resume() {
  return (
    <div className="App">
      <Header title={"Resume"} />
      <img src={ResumePdf} width="60%" height="auto" alt="Resume" />
    </div>
  );
}

export default Resume;
