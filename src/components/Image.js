function Image({ src, title }) {
  return <img style={styles.image} src={src} alt={title} />;
}

const styles = {
  image: {
    width: "60%",
    height: "auto",
  },
};

export default Image;
