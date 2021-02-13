import Header from "./Header.js";
import Image from "./Image.js";
import LolByte1 from "./images/projects/OngNataliaPortfolio202036.jpg";

function Projects() {
  return (
    <div className="App">
      <Header title={"LolByte"} />
      <Image src={LolByte1} title={"TODO"} />
    </div>
  );
}

export default Projects;
