import { createImageComponents, importAll } from "../Utils.js";

import { Card } from "react-bootstrap";
import { content } from "../Config.js";
import { themedStyles } from "../Styles.js";

function Projects({ theme }) {
  const styles = {
    container: {
      textAlign: "center",
    },
  };

  const images = importAll(
    require.context("../images/projects", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div style={styles.container}>
      <Card style={themedStyles(theme).card}>
        <Card.Header as="h4" style={themedStyles(theme).cardHeader}>
          LolByte
        </Card.Header>
        <Card.Body style={themedStyles(theme).cardBody}>
          <Card.Text style={themedStyles(theme).cardText}>
            {content.lolbyte}
          </Card.Text>
        </Card.Body>
      </Card>
      {createImageComponents(images)}
    </div>
  );
}

export default Projects;
