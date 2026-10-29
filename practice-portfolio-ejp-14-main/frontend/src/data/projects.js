import hostelImg from "../assets/projects/hostel-management.svg";
import fitlogImg from "../assets/projects/fitlog.svg";

const projects = [
  {
    id: 1,
    title: "Hostel Management System",
    image: hostelImg,
    category: "Full-Stack Web Application",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL"
    ],
    description:
      "A comprehensive web-based management system designed to streamline hostel operations, room allocations, and student administration. Features structured modules for managing student records, room inventory, employee and visitor tracking, fee collection logs, and reporting.",
    live: null,
    github: "https://github.com/dinamonalam/Hostel_Management",
    challenges: [
      "Designing normalized relational database schemas in MySQL to manage dynamic room allocations, bed availability, and student records",
      "Building role-based administrative access to secure sensitive student records and fee data",
      "Structuring comprehensive CRUD workflows with input validation across multiple interconnected modules"
    ],
    future: [
      "Online student portal for room selection, complaint registration, and leave requests",
      "Automated monthly fee generation with integrated digital payment gateways",
      "Automated SMS and email notification system for fee dues and visitor log approvals"
    ],
  },
  {
    id: 2,
    title: "FitLog — Workout Library & Tracker",
    image: fitlogImg,
    category: "Fitness & Web Application",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "Lucide Icons",
      "Vercel"
    ],
    description:
      "A precision workout tracking and exercise library web application built with a modern dark theme and high-energy lime accents. Enables athletes to explore exercises across muscle groups, build custom daily training plans, log sets and reps, and track personal fitness progress.",
    live: "https://fitlog-sigma-eight.vercel.app/",
    github: "https://github.com/dinamonalam/fitlog",
    challenges: [
      "Designing a high-contrast dark mode UI optimized for quick logging and readability in gym environments",
      "Structuring dynamic exercise filtering and responsive card states for smooth navigation",
      "Implementing responsive routine planning with interactive plan and saved-workout counters"
    ],
    future: [
      "Integrated set rest countdown timer with audio alert beeps",
      "Volume metrics and progressive overload performance charts",
      "Cloud database synchronization for multi-device cross-platform tracking"
    ],
  },
];

export default projects;
