import { colors, content } from "../Config.js";

import Header from "../components/Header.js";

function AboutMe() {
  return (
    <div style={styles.container}>
      <Header title="About Me" />
      <p style={styles.content}>{content.aboutMe}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
  content: {
    color: colors.secondaryFont,
  },
};

export default AboutMe;
