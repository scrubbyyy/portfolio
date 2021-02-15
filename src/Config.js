import Artstation from "./images/svg/artstation.svg";
import ArtstationDark from "./images/svg/artstation_dark.svg";
import Instagram from "./images/svg/instagram.svg";
import InstagramDark from "./images/svg/instagram_dark.svg";
import LinkedIn from "./images/svg/linkedin.svg";
import LinkedInDark from "./images/svg/linkedin_dark.svg";

export const colors = {
  lightMode: {
    mainFont: "black",
    secondaryFont: "grey",
    headerFont: "black",
    navFont: "black",
    outline: "lightgrey",
    background: "white",
    navBackground: "#e3e6e8",
    regularFont: "Helvetica",
    boldFont: "Helvetica-Bold",
  },
  darkMode: {
    mainFont: "white",
    secondaryFont: "#7f7f7f",
    headerFont: "white",
    navFont: "white",
    outline: "#7f7f7f",
    background: "#242424",
    navBackground: "#1e1e1e",
    regularFont: "Helvetica",
    boldFont: "Helvetica-Bold",
  },
};

export const content = {
  mainTitle: "Natalia Ong's Portfolio",
  subtitle: "Concept Art & Illustration",
  aboutMe:
    "I am a concept artist living in the SF Bay Area. I have 5+ years of experience working in video games.",
  aboutMeFooter: "Thanks for checking out my portfolio!",
  lolbyte:
    "I designed and created the assets for LolByte, a browser extension and iOS/Android App that allows users to look up matches for the game 'League of Legends'",
};

export const socialLinks = {
  width: 40,
  height: 40,
  links: [
    {
      url: "https://www.linkedin.com/in/nataliaong/",
      icon: LinkedIn,
      darkModeIcon: LinkedInDark,
      title: "See my LinkedIn",
    },
    {
      url: "https://www.artstation.com/scrubbyyy",
      icon: Artstation,
      darkModeIcon: ArtstationDark,
      title: "See my Artstation",
    },
    {
      url: "https://www.instagram.com/scrubbbyyy/?hl=en",
      icon: Instagram,
      darkModeIcon: InstagramDark,
      title: "See my Instagram",
    },
  ],
};
