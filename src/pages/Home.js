import Env1 from "../images/home/OngNataliaPortfolio20212.jpg";
import Env10 from "../images/home/OngNataliaPortfolio202111.jpg";
import Env11 from "../images/home/OngNataliaPortfolio202112.jpg";
import Env12 from "../images/home/OngNataliaPortfolio202113.jpg";
import Env2 from "../images/home/OngNataliaPortfolio20213.jpg";
import Env3 from "../images/home/OngNataliaPortfolio20214.jpg";
import Env4 from "../images/home/OngNataliaPortfolio20215.jpg";
import Env5 from "../images/home/OngNataliaPortfolio20216.jpg";
import Env6 from "../images/home/OngNataliaPortfolio20217.jpg";
import Env7 from "../images/home/OngNataliaPortfolio20218.jpg";
import Env8 from "../images/home/OngNataliaPortfolio20219.jpg";
import Env9 from "../images/home/OngNataliaPortfolio202110.jpg";
import Glu1 from "../images/home/OngNataliaPortfolio202125.jpg";
import Glu10 from "../images/home/OngNataliaPortfolio202134.jpg";
import Glu11 from "../images/home/OngNataliaPortfolio202135.jpg";
import Glu12 from "../images/home/OngNataliaPortfolio202136.jpg";
import Glu13 from "../images/home/OngNataliaPortfolio202137.jpg";
import Glu14 from "../images/home/OngNataliaPortfolio202138.jpg";
import Glu15 from "../images/home/OngNataliaPortfolio202139.jpg";
import Glu16 from "../images/home/OngNataliaPortfolio202140.jpg";
import Glu17 from "../images/home/OngNataliaPortfolio202141.jpg";
import Glu18 from "../images/home/OngNataliaPortfolio202142.jpg";
import Glu2 from "../images/home/OngNataliaPortfolio202126.jpg";
import Glu3 from "../images/home/OngNataliaPortfolio202127.jpg";
import Glu4 from "../images/home/OngNataliaPortfolio202128.jpg";
import Glu5 from "../images/home/OngNataliaPortfolio202129.jpg";
import Glu6 from "../images/home/OngNataliaPortfolio202130.jpg";
import Glu7 from "../images/home/OngNataliaPortfolio202131.jpg";
import Glu8 from "../images/home/OngNataliaPortfolio202132.jpg";
import Glu9 from "../images/home/OngNataliaPortfolio202133.jpg";
import Header from "../components/Header.js";
import Illust1 from "../images/home/OngNataliaPortfolio202143.jpg";
import Illust2 from "../images/home/OngNataliaPortfolio202144.jpg";
import Illust3 from "../images/home/OngNataliaPortfolio202145.jpg";
import Illust4 from "../images/home/OngNataliaPortfolio202146.jpg";
import Illust5 from "../images/home/OngNataliaPortfolio202147.jpg";
import Illust6 from "../images/home/OngNataliaPortfolio202148.jpg";
import Illust7 from "../images/home/OngNataliaPortfolio202149.jpg";
import { HashLink as Link } from "react-router-hash-link";
import Star1 from "../images/home/OngNataliaPortfolio202114.jpg";
import Star10 from "../images/home/OngNataliaPortfolio202123.jpg";
import Star11 from "../images/home/OngNataliaPortfolio202124.jpg";
import Star2 from "../images/home/OngNataliaPortfolio202115.jpg";
import Star3 from "../images/home/OngNataliaPortfolio202116.jpg";
import Star4 from "../images/home/OngNataliaPortfolio202117.jpg";
import Star5 from "../images/home/OngNataliaPortfolio202118.jpg";
import Star6 from "../images/home/OngNataliaPortfolio202119.jpg";
import Star7 from "../images/home/OngNataliaPortfolio202120.jpg";
import Star8 from "../images/home/OngNataliaPortfolio202121.jpg";
import Star9 from "../images/home/OngNataliaPortfolio202122.jpg";

function Home({ theme }) {
  const styles = {
    container: {
      textAlign: "center",
    },
    image: {
      width: "99%",
      maxWidth: "1000px",
      height: "auto",
      marginBottom: 15,
    },
    navItem: {
      color: theme.secondaryFont,
      fontSize: 16,
      display: "block",
      margin: 5,
      textDecoration: "underline",
    },
    navContainer: {
      display: "inline-flex",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 10,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.navContainer}>
        <Link style={styles.navItem} to="/#env">
          Environments
        </Link>
        <Link style={styles.navItem} to="/#starwars">
          Star Wars: Commander
        </Link>
        <Link style={styles.navItem} to="/#glu">
          Glu Mobile
        </Link>
        <Link style={styles.navItem} to="/#illustrations">
          Illustrations
        </Link>
      </div>
      <br />
      <Header id="env" title="Environments" theme={theme} />
      <img style={styles.image} src={Env1} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env2} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env3} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env4} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env5} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env6} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env7} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env8} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env9} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env10} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env11} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Env12} alt="Natalia Ong Art" />
      <Header
        id="starwars"
        title="Star Wars: Commander"
        showSeparator="true"
        theme={theme}
      />
      <img style={styles.image} src={Star1} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Star2} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Star3} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Star4} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Star5} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Star6} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Star7} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Star8} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Star9} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Star10} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Star11} alt="Natalia Ong Art" />
      <Header id="glu" title="Glu Mobile" showSeparator="true" theme={theme} />
      <img style={styles.image} src={Glu1} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu2} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu3} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu4} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu5} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu6} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu7} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu8} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu9} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu10} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu11} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu12} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu13} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu14} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu15} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu16} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu17} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Glu18} alt="Natalia Ong Art" />
      <Header
        id="illustrations"
        title="Illustrations"
        showSeparator="true"
        theme={theme}
      />
      <img style={styles.image} src={Illust1} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Illust2} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Illust3} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Illust4} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Illust5} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Illust6} alt="Natalia Ong Art" />
      <br />
      <img style={styles.image} src={Illust7} alt="Natalia Ong Art" />
    </div>
  );
}

export default Home;
