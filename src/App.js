import { Route, HashRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home.js";
import Natigation from "./components/Natigation.js";
import Projects from "./pages/Projects.js";
import Resume from "./pages/Resume.js";
import SocialMediaLinks from "./components/SocialMediaLinks.js";
import { colors } from "./Config.js";
import { useLocalStorage } from "./Utils.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkmode", false);
  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  var theme = colors.lightMode;
  if (isDarkMode) {
    theme = colors.darkMode;
  }

  const styles = {
    container: {
      backgroundColor: theme.background,
    },
    socialLinks: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  };

  return (
    <div style={styles.container}>
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
        <div style={styles.socialLinks}>
          <SocialMediaLinks isDarkMode={isDarkMode} />
        </div>
      </Router>
    </div>
  );
}

export default App;
