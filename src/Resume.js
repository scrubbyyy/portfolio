import Links from "./Links.js";
import ResumePdf from "./images/resume/OngNataliaResume2021.png";

function Resume() {
  return (
    <div className="App">
      <p>Hello I am Natali</p>
      <Links />
      <br />
      <img src={ResumePdf} width="60%" height="auto" alt="Resume" />
    </div>
  );
}

export default Resume;
