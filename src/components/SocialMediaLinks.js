import Artstation from "../images/svg/artstation.svg";
import Instagram from "../images/svg/instagram.svg";
import LinkedIn from "../images/svg/linkedin.svg";
import { links } from "../Config.js";

function SocialMediaLinks() {
  return (
    <>
      <a href={links.artstation} target="_blank" rel="noreferrer">
        <img
          src={Artstation}
          width="40"
          height="40"
          alt={"See my Artstation"}
        />
      </a>
      <a href={links.instagram} target="_blank" rel="noreferrer">
        <img src={Instagram} width="40" height="40" alt={"See my Instagram"} />
      </a>
      <a href={links.linkedin} target="_blank" rel="noreferrer">
        <img src={LinkedIn} width="40" height="40" alt={"See my LinkedIn"} />
      </a>
    </>
  );
}

export default SocialMediaLinks;
