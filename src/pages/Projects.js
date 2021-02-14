import { Card } from "react-bootstrap";
import LolByte1 from "../images/projects/LolBytePortfolio1.jpg";
import LolByte2 from "../images/projects/LolBytePortfolio2.jpg";
import LolByte3 from "../images/projects/LolBytePortfolio3.jpg";
import LolByte4 from "../images/projects/LolBytePortfolio4.png";
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
      width: "98%",
      maxWidth: "1000px",
      height: "auto",
      marginBottom: 20,
    },
  };

  return (
    <div style={styles.container}>
      <Card
        style={{
          marginTop: 10,
          marginBottom: 10,
          maxWidth: "800px",
          width: "98%",
          borderColor: theme.separator,
        }}
      >
        <Card.Header
          as="h4"
          style={{
            textAlign: "center",
            backgroundColor: theme.navBackground,
            color: theme.mainFont,
            fontFamily: "Helvetica-Bold",
          }}
        >
          LolByte
        </Card.Header>
        <Card.Body style={{ backgroundColor: theme.background }}>
          <Card.Text style={{ color: theme.secondaryFont }}>
            {content.lolbyte}
          </Card.Text>
        </Card.Body>
      </Card>
      <img style={styles.image} src={LolByte1} alt="Natalia Ong Art" />
      <img style={styles.image} src={LolByte2} alt="Natalia Ong Art" />
      <img style={styles.image} src={LolByte3} alt="Natalia Ong Art" />
      <img style={styles.image} src={LolByte4} alt="Natalia Ong Art" />
    </div>
  );
}

export default Projects;
