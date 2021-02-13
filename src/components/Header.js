import { colors } from "../Config.js";

function Header({ id, title }) {
  return (
    <>
      <div style={styles.anchor} id={id} />
      <hr style={styles.separator} />
      <h2 style={styles.header}>{title}</h2>
    </>
  );
}

const styles = {
  anchor: {
    display: "block",
    position: "relative",
    top: -85,
    visibility: "hidden",
  },
  separator: {
    color: colors.separator,
    backgroundColor: colors.separator,
    height: 0.2,
    marginTop: 0,
  },
  header: {
    color: colors.headerFont,
  },
};

export default Header;
