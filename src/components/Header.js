function Header({ id, title, showSeparator, theme }) {
  const styles = {
    anchor: {
      display: "block",
      position: "relative",
      top: -85,
      visibility: "hidden",
    },
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
    },
  };

  return (
    <>
      <div style={styles.anchor} id={id} />
      <hr style={showSeparator ? styles.separator : styles.hide} />
      <h2 style={styles.header}>{title}</h2>
    </>
  );
}

export default Header;
