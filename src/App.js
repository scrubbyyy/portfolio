import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutMe from "./AboutMe.js";
import Home from "./Home.js";
import Natigation from "./Nav.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";

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
