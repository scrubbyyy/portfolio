import { colors, content } from "../Config.js";

import Header from "../components/Header.js";
import LolByte1 from "../images/projects/OngNataliaPortfolio202036.jpg";

function Projects() {
  return (
    <div style={styles.container}>
      <Header title={"LolByte"} />
      <p style={styles.description}>{content.lolbyte}</p>
      <img style={styles.image} src={LolByte1} alt={"TODO"} />
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
  image: {
    width: "60%",
    height: "auto",
  },
};

export default Projects;
