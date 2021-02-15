export const styles = {
  image: {
    width: "98%",
    maxWidth: "1000px",
    height: "auto",
    marginBottom: 10,
  },
};

export const themedStyles = (theme) => {
  return {
    card: {
      margin: "auto",
      marginTop: 20,
      marginBottom: 20,
      maxWidth: "800px",
      width: "98%",
      borderColor: theme.outline,
    },
    cardHeader: {
      textAlign: "center",
      backgroundColor: theme.navBackground,
      color: theme.mainFont,
      fontFamily: theme.boldFont,
    },
    cardBody: {
      backgroundColor: theme.background,
    },
    cardText: {
      color: theme.secondaryFont,
    },
  };
};
