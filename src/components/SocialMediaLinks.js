import { socialLinks } from "../Config.js";

function SocialMediaLinks({ isDarkMode }) {
  const styles = {
    container: {
      textAlign: "center",
    },
    link: {
      width: socialLinks.width,
      height: socialLinks.height,
    },
  };

  const Links = socialLinks.links.map((link) => {
    return (
      <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
        <img
          style={styles.link}
          src={isDarkMode ? link.darkModeIcon : link.icon}
          alt={link.title}
        />
      </a>
    );
  });

  return <div style={styles.container}>{Links}</div>;
}

export default SocialMediaLinks;
