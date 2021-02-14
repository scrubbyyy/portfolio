import Header from "../components/Header.js";
import LolByte1 from "../images/projects/OngNataliaPortfolio202150.jpg";
import LolByte2 from "../images/projects/OngNataliaPortfolio202151.jpg";
import { content } from "../Config.js";

function Projects({ theme }) {
  const styles = {
    container: {
      textAlign: "center",
    },
    description: {
      color: theme.secondaryFont,
      marginLeft: 25,
      marginRight: 25,
    },
    image: {
      width: "99%",
      maxWidth: "1000px",
      height: "auto",
    },
  };
  
  return (
    <div style={styles.container}>
      <br />
      <Header title="LolByte" theme={theme} />
      <p style={styles.description}>{content.lolbyte}</p>
      <img style={styles.image} src={LolByte1} alt="Natalia Ong Art" />
      <br />
      <br />
      <img style={styles.image} src={LolByte2} alt="Natalia Ong Art" />
    </div>
  );
}

export default Projects;
