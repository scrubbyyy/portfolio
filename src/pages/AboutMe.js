import Header from "../components/Header.js";
import SocialMediaLinks from "../components/SocialMediaLinks.js";
import { content } from "../Config.js";

function AboutMe() {
  return (
    <div style={styles.container}>
      <Header title={"About Me"} />
      <p>{content.aboutMe}</p>
      <SocialMediaLinks />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
};

export default AboutMe;
