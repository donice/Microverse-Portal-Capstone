const projects = [
  {
    key: 1,
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured: {
      name: "CANOPY",
      stack: "Back End Dev",
      year: 2018,
    },
    imageMobile: "./images/project-1.svg",
    imageDesktop: "./images/project-1-dt.svg",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://drdonice.dev",
    srcLink: "https://github.com",
    inversed: false, // if true toggle the inverse class name on
  },
  {
    key: 2,
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured: {
      name: "CANOPY",
      stack: "Back End Dev",
      year: 2018,
    },
    imageMobile: "./images/project-2.svg",
    imageDesktop: "./images/project-2-dt.svg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://drdonice.dev",
    srcLink: "https://github.com",
    inversed: true,
  },
  {
    key: 3,
    name: "Veracity",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured: {
      name: "CANOPY",
      stack: "Back End Dev",
      year: 2018,
    },
    imageMobile: "./images/project-3.svg",
    imageDesktop: "./images/project-3-dt.svg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://drdonice.dev",
    srcLink: "https://github.com",
    inversed: false, // if true toggle the inverse class name on
  },
];

const projectSection = document.getElementById("portfolio");
const popupContainer = document.getElementById("popupContainer");
const popupImage = document.getElementById("popupImage");
const popupHeader = document.getElementById("popupHeader");
const popupDescription = document.getElementById("popupDescription");
const closeButton = document.getElementById("closeButton");
const popupFeature1 = document.getElementById("popupFeature1");
const popupFeature2 = document.getElementById("popupFeature2");
const popupFeature3 = document.getElementById("popupFeature3");
const popupSkills = document.getElementById("popupSkills");
const popupButton1 = document.getElementById("popupButton1");
const popupButton2 = document.getElementById("popupButton2");
