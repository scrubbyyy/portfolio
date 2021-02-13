import Environment1 from "./images/home/OngNataliaPortfolio20212.jpg";
import Environment2 from "./images/home/OngNataliaPortfolio20213.jpg";
import Glu1 from "./images/home/OngNataliaPortfolio202125.jpg";
import Glu2 from "./images/home/OngNataliaPortfolio202126.jpg";
import Header from "./Header.js";
import Image from "./Image.js";
import Personal1 from "./images/home/OngNataliaPortfolio202148.jpg";
import Personal2 from "./images/home/OngNataliaPortfolio202149.jpg";
import StarWars1 from "./images/home/OngNataliaPortfolio202114.jpg";
import StarWars2 from "./images/home/OngNataliaPortfolio202115.jpg";

function Home() {
  return (
    <div className="App">
      <Header title={"Environments"} />
      <Image src={Environment1} title={"TODO"} />
      <br />
      <Image src={Environment2} title={"TODO"} />
      <Header title={"Star Wars: Commander"} />
      <Image src={StarWars1} title={"TODO"} />
      <br />
      <Image src={StarWars2} title={"TODO"} />
      <Header title={"Glu Mobile"} />
      <Image src={Glu1} title={"TODO"} />
      <br />
      <Image src={Glu2} title={"TODO"} />
      <Header title={"Personal Work"} />
      <Image src={Personal1} title={"TODO"} />
      <br />
      <Image src={Personal2} title={"TODO"} />
    </div>
  );
}

export default Home;
