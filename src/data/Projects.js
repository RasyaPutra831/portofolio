import trashImg from "../assets/images/TrashToTreasure.png";
import dvdrentalImg from "../assets/images/dvdrental_analysis.jpeg";

const projects = [
  {
    id: 1,
    title: "Trash To Treasure",

    description:
      "A digital waste management platform that connects users with recycling services through waste tracking, reward points, and a marketplace for recycled products.",

    image: trashImg,

    tech: [
      "Html",
      "CSS",
      "Supabase",
      "JavaScript",
    ],

    github: "https://github.com/RasyaPutra831/Trash-To-Treasure",

    demo: "https://trash-to-treasure-zeta.vercel.app/",

    type: "Web",
  },

  {
    id: 2,

    title: "Financial Manager",

    description:
      "A personal finance mobile application featuring expense tracking, OCR receipt scanning, budgeting, spending analytics, and financial goals.",

    image: "",

    tech: [
      "Flutter",
      "Supabase",
      "OCR",
      "Dart",
    ],

    github: "#",

    demo: null,

    type: "mobile",
  },

  {
    id: 3,

    title: "DVD Rental Dashboard",

    description:
      "An interactive dashboard built using the DVD Rental database with AI-powered insights and machine learning for business analytics.",

    image: dvdrentalImg,

    tech: [
      "Python",
      "Html",
      "Css",
      "JavaScript",
      "PostgreSQL",
      "Machine Learning",
    ],

    github: "#",

    demo: "#",

    type: "web",
  },
];

export default projects;