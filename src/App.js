import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home.js";
import Natigation from "./components/Natigation.js";
import Projects from "./pages/Projects.js";
import Resume from "./pages/Resume.js";
import SocialMediaLinks from "./components/SocialMediaLinks.js";
import { colors } from "./Config.js";

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

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkmode", false);

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  var theme = colors.lightMode;
  if (isDarkMode) {
    theme = colors.darkMode;
  }

  return (
    <div style={{ backgroundColor: theme.background, minHeight: "100vh" }}>
      <Router basename="/">
        <Natigation
          theme={theme}
          isDarkMode={isDarkMode}
          darkModeHandler={darkModeHandler}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <div style={{ paddingTop: 20, paddingBottom: 20 }}>
          <SocialMediaLinks isDarkMode={isDarkMode} />
        </div>
      </Router>
    </div>
  );
}

export default App;
