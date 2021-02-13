import { colors } from "../Config.js";

function Header({ title }) {
  return (
    <>
      <hr style={styles.separator} />
      <h2 style={styles.header}>{title}</h2>
    </>
  );
}

const styles = {
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
