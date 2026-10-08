import trashImg from "../assets/images/TrashToTreasure.png";
import dvdrentalImg from "../assets/images/dvdrental_analysis.jpeg";
import financialImg from "../assets/images/financial_manager.jpeg";
import homeCreditImg from "../assets/images/home_credit.png";
import fleetOptimizerImg from "../assets/images/fleet_optimizer.png";
import powerBiImg from "../assets/images/Power_BI_Img.jpeg";

// The first project is shown large as the featured item.
// fit: "contain" keeps portrait screenshots (e.g. mobile apps) uncropped.
const projects = [
  {
    id: "fleet-optimizer",
    title: "Fleet Space Optimizer",
    category: "Logistics Tool",
    year: "2026",
    description:
      "A web-based logistics tool that recommends which trucks to use and how to arrange shipment items, powered by a 3D bin packing engine with rotation, weight validation, and an interactive Three.js loading view.",
    image: fleetOptimizerImg,
    tech: ["JavaScript", "Three.js", "Python", "py3dbp"],
    github: "https://github.com/RasyaPutra831/fleet_optimizer",
    demo: "https://fleet-optimizer-ad8d.vercel.app/",
  },
  {
    id: "dvd-rental",
    title: "DVD Rental Dashboard",
    category: "Analytics Dashboard",
    year: "2026",
    description:
      "A full-stack analytics dashboard on PostgreSQL with demand forecasting per film and a floating AI assistant that answers data questions and renders charts on demand.",
    image: dvdrentalImg,
    tech: ["FastAPI", "PostgreSQL", "Plotly", "DeepSeek"],
    github: "https://github.com/RasyaPutra831/dvdrental_analysis",
    demo: "https://dvdrental-analysis.vercel.app/",
  },
  {
    id: "retail-sales",
    title: "Retail Sales Analysis",
    category: "Data Analysis",
    year: "2026",
    description:
      "Cleaned and reconciled 402 sales records from POS and marketplace sources, then built a Power BI dashboard that showed 2 products drove 54% of total revenue.",
    image: powerBiImg,
    tech: ["Excel", "Power BI", "DAX"],
    github: null,
    demo: null,
  },
  {
    id: "home-credit",
    title: "Home Credit Default Risk",
    category: "Machine Learning",
    year: "2025",
    description:
      "An end-to-end machine learning pipeline for credit default prediction: preprocessing, feature engineering, model training, and evaluation.",
    image: homeCreditImg,
    tech: ["Python", "pandas", "scikit-learn", "SQL"],
    github: "https://github.com/RasyaPutra831/Home_Credit_Bootcamp",
    demo: null,
  },
  {
    id: "financial-manager",
    title: "Financial Manager",
    category: "Mobile App",
    year: "2025",
    description:
      "A personal finance app with expense tracking, OCR receipt scanning, budgeting, spending analytics, and smart reminders.",
    image: financialImg,
    fit: "contain",
    tech: ["Flutter", "Dart", "Supabase", "OCR"],
    github: "https://github.com/RasyaPutra831/financial_manager",
    demo: null,
  },
  {
    id: "trash-to-treasure",
    title: "Trash to Treasure",
    category: "Web Marketplace",
    year: "2025",
    description:
      "A recycling marketplace where users list reusable items for others to buy or claim, with authentication, transaction tracking, and a recycling-points reward system.",
    image: trashImg,
    tech: ["JavaScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/RasyaPutra831/Trash-To-Treasure",
    demo: "https://trash-to-treasure-zeta.vercel.app/",
  },
];

export default projects;
