import Artstation from "./images/svg/artstation.svg";
import IconLink from "./IconLink.js";
import Instagram from "./images/svg/instagram.svg";
import LinkedIn from "./images/svg/linkedin.svg";

function Links() {
  return (
    <div className="links">
      <a href="https://www.artstation.com/scrubbyyy" target="_blank" rel="noreferrer">
        <IconLink src={Artstation} title={"TODO"} />
      </a>
      <a href="https://www.instagram.com/scrubbbyyy" target="_blank" rel="noreferrer">
        <IconLink src={Instagram} title={"TODO"} />{" "}
      </a>
      <a href="https://www.linkedin.com/in/nataliaong/" target="_blank" rel="noreferrer">
        <IconLink src={LinkedIn} title={"TODO"} />
      </a>
    </div>
  );
}

export default Links;
