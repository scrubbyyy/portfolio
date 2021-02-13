import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./Home.js";
import Natigation from "./Nav.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import Separator from "./Separator.js";

function App() {
  return (
    <>
      <Router>
        <Natigation />
        <Separator color="lightgrey" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
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
