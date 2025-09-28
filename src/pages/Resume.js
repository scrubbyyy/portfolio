import { styles as defaultStyles, themedStyles } from "../Styles.js";

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ResumePdf from "../images/resume/OngNataliaResume2021.pdf";
import ResumePng from "../images/resume/OngNataliaResume2021.png";
import SocialMediaLinks from "../components/SocialMediaLinks.js";
import { content } from "../Config.js";

function Resume({ theme, isDarkMode }) {
  const styles = {
    container: {
      textAlign: "center",
    },
    socialLinks: {
      paddingTop: 10,
      paddingBottom: 10,
    },
  };

  return (
    <div style={styles.container}>
      <Card style={themedStyles(theme).card}>
        <Card.Header as="h4" style={themedStyles(theme).cardHeader}>
          About Me
        </Card.Header>
        <Card.Body style={themedStyles(theme).cardBody}>
          <Card.Text style={themedStyles(theme).cardText}>
            {content.aboutMe}
          </Card.Text>
          <Card.Text style={themedStyles(theme).cardText}>
            {content.aboutMeFooter}
          </Card.Text>
          {/* <div style={styles.socialLinks}>
            <SocialMediaLinks isDarkMode={isDarkMode} />
          </div> */}
          {/* <a href={ResumePdf} download>
            <Button variant="link">Natalia Ong Resume.pdf</Button>
          </a> */}
        </Card.Body>
      </Card>
      {/* <img style={defaultStyles.image} src={ResumePng} alt="Resume" /> */}
    </div>
  );
}

export default Resume;
