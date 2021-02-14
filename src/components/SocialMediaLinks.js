import Artstation from "../images/svg/artstation.svg";
import Instagram from "../images/svg/instagram.svg";
import LinkedIn from "../images/svg/linkedin.svg";
import { links } from "../Config.js";

function SocialMediaLinks() {
  return (
    <div style={styles.container}>
      <a href={links.instagram} target="_blank" rel="noreferrer">
        <img style={styles.image} src={Instagram} alt="See my Instagram" />
      </a>
      <a href={links.linkedin} target="_blank" rel="noreferrer">
        <img style={styles.image} src={LinkedIn} alt="See my LinkedIn" />
      </a>
      <a href={links.artstation} target="_blank" rel="noreferrer">
        <img style={styles.image} src={Artstation} alt="See my Artstation" />
      </a>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
  image: {
    width: "40px",
    height: "40px",
  },
};

export default SocialMediaLinks;
