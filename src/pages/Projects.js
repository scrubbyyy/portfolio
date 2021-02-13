import { colors, content } from "../Config.js";

import Header from "../components/Header.js";
import Image from "../components/Image.js";
import LolByte1 from "../images/projects/OngNataliaPortfolio202036.jpg";

function Projects() {
  return (
    <div style={styles.container}>
      <Header title={"LolByte"} />
      <p style={styles.description}>{content.lolbyte}</p>
      <Image src={LolByte1} title={"TODO"} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
  description: {
    color: colors.secondaryFont,
  },
};

export default Projects;
