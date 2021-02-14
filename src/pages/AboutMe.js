import { colors, content } from "../Config.js";

import Header from "../components/Header.js";

function AboutMe() {
  return (
    <div style={styles.container}>
      <Header title="About Me" />
      <br />
      <p style={styles.content}>{content.aboutMe}</p>
      <p style={styles.content}>Thanks for checking out my portfolio!</p>
      <br />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
  content: {
    color: colors.secondaryFont,
    marginLeft: 25,
    marginRight: 25,
  },
};

export default AboutMe;
