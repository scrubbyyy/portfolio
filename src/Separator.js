function Separator(props) {
  return (
    <hr
      style={{
        color: props.color,
        backgroundColor: props.color,
        height: 0.2,
        marginTop: 0
      }}
    />
  );
}

export default Separator;
