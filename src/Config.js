import Artstation from "./images/svg/artstation.svg";
import ArtstationDark from "./images/svg/artstation_dark.svg";
import Email from "./images/svg/email.svg";
import EmailDark from "./images/svg/email_dark.svg";
import Instagram from "./images/svg/instagram.svg";
import InstagramDark from "./images/svg/instagram_dark.svg";
import LinkedIn from "./images/svg/linkedin.svg";
import LinkedInDark from "./images/svg/linkedin_dark.svg";

export const colors = {
  lightMode: {
    mainFont: "#212529",
    secondaryFont: "#6c757d",
    headerFont: "#212529",
    navFont: "#212529",
    outline: "#dee2e6",
    background: "#ffffff",
    navBackground: "#f8f9fa",
    regularFont: "Helvetica",
    boldFont: "Helvetica-Bold",
  },
  darkMode: {
    mainFont: "#f8f9fa",
    secondaryFont: "#adb5bd",
    headerFont: "#f8f9fa",
    navFont: "#f8f9fa",
    outline: "#495057",
    background: "#212529",
    navBackground: "#343a40",
    regularFont: "Helvetica",
    boldFont: "Helvetica-Bold",
  },
};

export const content = {
  mainTitle: "Natalia Schott's Portfolio",
  subtitle: "Concept Art & Illustration",
  aboutMe:
    "I am a concept artist and illustrator living in the SF Bay Area. I have 10+ years of experience working in video games.",
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
    {
      url: "mailto:nataliaong12@gmail.com",
      icon: Email,
      darkModeIcon: EmailDark,
      title: "Email me",
    },
  ],
};
