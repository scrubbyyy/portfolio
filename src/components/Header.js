function Header({ title }) {
  return (
    <>
      <hr style={styles.separator} />
      <h2>{title}</h2>
    </>
  );
}

const styles = {
  separator: {
    color: "lightgrey",
    backgroundColor: "lightgrey",
    height: 0.2,
    marginTop: 0,
  },
};

export default Header;
