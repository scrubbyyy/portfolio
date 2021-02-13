import Header from "../components/Header.js";
import Image from "../components/Image.js";
import LolByte1 from "../images/projects/OngNataliaPortfolio202036.jpg";

function Projects() {
  return (
    <div className="App">
      <Header title={"LolByte"} />
      <p style={{ color: "lightgray" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Image src={LolByte1} title={"TODO"} />
    </div>
  );
}

export default Projects;
