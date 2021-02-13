import Separator from "./Separator.js";

function Header(props) {
  return (
    <>
      <Separator color="lightgrey" />
      <h2>{props.title}</h2>
    </>
  );
}

export default Header;
