import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutMe from "./pages/AboutMe.js";
import Home from "./pages/Home.js";
import Natigation from "./components/Natigation.js";
import Projects from "./pages/Projects.js";
import Resume from "./pages/Resume.js";

function App() {
  return (
    <>
      <Router>
        <Natigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
