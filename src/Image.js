import "./Image.css";

function Header(props) {
  return (
    <>
      <img src={props.src} alt={props.title} className="responsive" />
    </>
  );
}

export default Header;
