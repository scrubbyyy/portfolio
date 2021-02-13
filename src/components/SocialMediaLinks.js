import Artstation from "../images/svg/artstation.svg";
import Instagram from "../images/svg/instagram.svg";
import LinkedIn from "../images/svg/linkedin.svg";

function SocialMediaLinks() {
  return (
    <div className="links">
      <a href="https://www.artstation.com/scrubbyyy" target="_blank" rel="noreferrer">
        <img src={Artstation} width="40" height="40" alt={"TODO"} />
      </a>
      <a href="https://www.instagram.com/scrubbbyyy" target="_blank" rel="noreferrer">
        <img src={Instagram} width="40" height="40" alt={"TODO"} />
      </a>
      <a href="https://www.linkedin.com/in/nataliaong/" target="_blank" rel="noreferrer">
        <img src={LinkedIn} width="40" height="40" alt={"TODO"} />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
