import { Route, HashRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home.js";
import Natigation from "./components/Natigation.js";
import Projects from "./pages/Projects.js";
import Resume from "./pages/Resume.js";
import SocialMediaLinks from "./components/SocialMediaLinks.js";
import { colors } from "./Config.js";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkmode", false);
  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  var theme = colors.lightMode;
  if (isDarkMode) {
    theme = colors.darkMode;
  }

  return (
    <div
      style={{
        backgroundColor: theme.background,
      }}
    >
      <Router basename="/">
        <Natigation
          theme={theme}
          isDarkMode={isDarkMode}
          darkModeHandler={darkModeHandler}
        />
        <Switch>
          <Route exact path="/">
            <Home theme={theme} />
          </Route>
          <Route path="/projects">
            <Projects theme={theme} />
          </Route>
          <Route path="/resume">
            <Resume theme={theme} isDarkMode={isDarkMode} />
          </Route>
        </Switch>
        <SocialMediaLinks isDarkMode={isDarkMode} />
      </Router>
    </div>
  );
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default App;
