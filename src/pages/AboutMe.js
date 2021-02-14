import Header from "../components/Header.js";
import { content } from "../Config.js";

function AboutMe({ theme }) {
  const styles = {
    container: {
      textAlign: "center",
    },
    content: {
      color: theme.secondaryFont,
      marginLeft: 25,
      marginRight: 25,
    },
  };

  return (
    <div style={styles.container}>
      <Header title="About Me" theme={theme} />
      <br />
      <p style={styles.content}>{content.aboutMe}</p>
      <p style={styles.content}>Thanks for checking out my portfolio!</p>
      <br />
    </div>
  );
}

export default AboutMe;
