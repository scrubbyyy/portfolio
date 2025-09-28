import { createImageComponents, importAll } from "../Utils.js";

import { Card } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { themedStyles } from "../Styles.js";

function Home({ theme }) {
  const styles = {
    container: {
      textAlign: "center",
    },
    portfolioLink: {
      color: theme.secondaryFont,
      margin: 5,
      textDecoration: "underline",
    },
    header: {
      color: theme.headerFont,
      fontFamily: theme.boldFont,
    },
    separator: {
      color: theme.outline,
      backgroundColor: theme.outline,
      height: 0.2,
      width: "97%",
    },
  };

  const apexImages = importAll(
    require.context("../images/home/apex", false, /\.(png|jpe?g|svg)$/)
  );

  const personalImages = importAll(
    require.context("../images/home/personal", false, /\.(png|jpe?g|svg)$/)
  );

  const illustrationImages = importAll(
    require.context("../images/home/illustrations", false, /\.(png|jpe?g|svg)$/)
  );

  const starWarsImages = importAll(
    require.context("../images/home/starwars", false, /\.(png|jpe?g|svg)$/)
  );

  const gluImages = importAll(
    require.context("../images/home/glu", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div style={styles.container}>
      <Card style={themedStyles(theme).card}>
        <Card.Header as="h4" style={themedStyles(theme).cardHeader}>
          Portfolio Links
        </Card.Header>
        <Card.Body style={themedStyles(theme).cardBody}>
          <Link style={styles.portfolioLink} to="/#apex">
            Apex Legends
          </Link>
          <Link style={styles.portfolioLink} to="/#personal">
            Personal Work
          </Link>
          <Link style={styles.portfolioLink} to="/#illustrations">
            Illustrations
          </Link>
          <Link style={styles.portfolioLink} to="/#starwars">
            Star Wars: Commander
          </Link>
          <Link style={styles.portfolioLink} to="/#glu">
            Glu Mobile
          </Link>
        </Card.Body>
      </Card>

      <h2 style={styles.header} id="apex">
        Apex Legends
      </h2>
      {createImageComponents(apexImages)}
      <hr style={styles.separator} />
      <h2 style={styles.header} id="personal">
        Personal Work
      </h2>
      {createImageComponents(personalImages)}
      <hr style={styles.separator} />
      <h2 style={styles.header} id="illustrations">
        Illustrations
      </h2>
      {createImageComponents(illustrationImages)}
      <hr style={styles.separator} />
      <h2 style={styles.header} id="starwars">
        Star Wars: Commander
      </h2>
      {createImageComponents(starWarsImages)}
      <hr style={styles.separator} />
      <h2 style={styles.header} id="glu">
        Glu Mobile
      </h2>
      {createImageComponents(gluImages)}
    </div>
  );
}

export default Home;
