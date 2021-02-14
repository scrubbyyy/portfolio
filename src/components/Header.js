function Header({ id, title, showSeparator, theme }) {
  const styles = {
    hide: {
      display: "none",
    },
    separator: {
      color: theme.separator,
      backgroundColor: theme.separator,
      height: 0.2,
      marginTop: 0,
      width: "97%",
    },
    header: {
      color: theme.headerFont,
      fontFamily: "Helvetica-Bold"
    },
  };

  return (
    <>
      <hr style={showSeparator ? styles.separator : styles.hide} />
      <h2 style={styles.header} id={id}>
        {title}
      </h2>
    </>
  );
}

export default Header;
