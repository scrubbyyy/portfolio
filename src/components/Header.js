import { colors } from "../Config.js";

function Header({ id, title, shrinkSeparator }) {
  return (
    <>
      <div style={styles.anchor} id={id} />
      <hr style={shrinkSeparator ? styles.shrunkenSeparator : styles.separator} />
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
  shrunkenSeparator: {
    color: colors.separator,
    backgroundColor: colors.separator,
    height: 0.2,
    marginTop: 0,
    width: "97%",
  },
  header: {
    color: colors.headerFont,
  },
};

export default Header;
