import Artstation from "../images/svg/artstation.svg";
import ArtstationDark from "../images/svg/artstation_dark.svg";
import Instagram from "../images/svg/instagram.svg";
import InstagramDark from "../images/svg/instagram_dark.svg";
import LinkedIn from "../images/svg/linkedin.svg";
import LinkedInDark from "../images/svg/linkedin_dark.svg";
import { links } from "../Config.js";

function SocialMediaLinks({ isDarkMode }) {
  return (
    <div style={styles.container}>
      <a href={links.instagram} target="_blank" rel="noreferrer">
        <img
          style={styles.image}
          src={isDarkMode ? InstagramDark : Instagram}
          alt="See my Instagram"
        />
      </a>
      <a href={links.linkedin} target="_blank" rel="noreferrer">
        <img
          style={styles.image}
          src={isDarkMode ? LinkedInDark : LinkedIn}
          alt="See my LinkedIn"
        />
      </a>
      <a href={links.artstation} target="_blank" rel="noreferrer">
        <img
          style={styles.image}
          src={isDarkMode ? ArtstationDark : Artstation}
          alt="See my Artstation"
        />
      </a>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: 20,
    paddingBottom: 20,
  },
  image: {
    marginTop: 5,
    width: "40px",
    height: "40px",
  },
};

export default SocialMediaLinks;
