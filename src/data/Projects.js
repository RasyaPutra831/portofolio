import trashImg from "../assets/images/TrashToTreasure.png";
import dvdrentalImg from "../assets/images/dvdrental_analysis.jpeg";
import financialImg from "../assets/images/financial_manager.jpeg";
import HomeCreditImg from "../assets/images/home_credit.png";
import FleetOptimizerImg from "../assets/images/fleet_optimizer.png";
import PowerBiImg from "../assets/images/Power_BI_Img.jpeg";

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

    image: financialImg,

    tech: [
      "Flutter",
      "Supabase",
      "OCR",
      "Dart",
    ],

    github: "https://github.com/RasyaPutra831/financial_manager",

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

    github: "https://github.com/RasyaPutra831/dvdrental_analysis",

    demo: "https://dvdrental-analysis.vercel.app/",

    type: "web",
  },

  {
    id: 4,

    title: "Home Credit Default Risk Prediction",

    description:
      "Built an end-to-end machine learning pipeline for credit default prediction, including data preprocessing, feature engineering, model training, and performance evaluation.",

    image: HomeCreditImg,

    tech: [
      "Python",
      "Data Visualization",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Excel"
    ],

    github: "https://github.com/RasyaPutra831/Home_Credit_Bootcamp",

    demo: null,

    type: "ml",
  },

  {
    id: 5,

    title: "Fleet Optimizer",

    description: "This website aims to address issues at PT KAWAN LAMA regarding logistics specifically, high shipping costs and inefficient cargo arrangement that results in wasted space. This application is to assist in organizing shipments and determining the most efficient cargo types.",

    image: FleetOptimizerImg,

    tech: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: "https://github.com/RasyaPutra831/fleet_optimizer",

    demo: "https://fleet-optimizer-ad8d.vercel.app/",

    type: "web",
  },

  {
    id: 6,

    title: "Fleet Optimizer",

    description: "Cleaned and integrated 402 sales records from store POS and online marketplaces into one validated dataset. Analyzed revenue by channel, product, and store in Excel and Power BI, revealing that 2 products generated 54% of total revenue.",

    image: PowerBiImg,

    tech: [
      "Ecel",
      "Power BI",
      "Sql",
      "Data Visualization"
    ],

    github: "#",

    demo: "#",

    type: "Power BI",
  },
];

export default projects;