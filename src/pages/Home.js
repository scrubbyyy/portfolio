import Environment1 from "../images/home/OngNataliaPortfolio20212.jpg";
import Environment2 from "../images/home/OngNataliaPortfolio20213.jpg";
import Glu1 from "../images/home/OngNataliaPortfolio202125.jpg";
import Glu2 from "../images/home/OngNataliaPortfolio202126.jpg";
import Header from "../components/Header.js";
import Personal1 from "../images/home/OngNataliaPortfolio202148.jpg";
import Personal2 from "../images/home/OngNataliaPortfolio202149.jpg";
import StarWars1 from "../images/home/OngNataliaPortfolio202114.jpg";
import StarWars2 from "../images/home/OngNataliaPortfolio202115.jpg";

function Home() {
  return (
    <div style={styles.container}>
      <Header id="env" title="Environments" />
      <img style={styles.image} src={Environment1} alt="TODO" />
      <br />
      <img style={styles.image} src={Environment2} alt="TODO" />
      <Header
        id="starwars"
        title="Star Wars: Commander"
        shrinkSeparator="true"
      />
      <img style={styles.image} src={StarWars1} alt="TODO" />
      <br />
      <img style={styles.image} src={StarWars2} alt="TODO" />
      <Header id="glu" title="Glu Mobile" shrinkSeparator="true" />
      <img style={styles.image} src={Glu1} alt="TODO" />
      <br />
      <img style={styles.image} src={Glu2} alt="TODO" />
      <Header id="personal" title="Personal Work" shrinkSeparator="true" />
      <img style={styles.image} src={Personal1} alt="TODO" />
      <br />
      <img style={styles.image} src={Personal2} alt="TODO" />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
  image: {
    width: "99%",
    maxWidth: "1000px",
    height: "auto",
  },
};

export default Home;
