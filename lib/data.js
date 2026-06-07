import { Code2, MonitorSmartphone, Database, BrainCircuit, Blocks, Briefcase, GraduationCap } from "lucide-react";

export const siteData = {
  personal: {
    name: "Faiz Ali",
    role: "Frontend Web & Mobile Developer",
    status: "Available for Work",
    focus: "Frontend & AI Integration",
    phone: "+91 8421932820",
    email: "faizali786313@gmail.com",
    location: "Amravati, Maharashtra"
  },
  skills: [
    { name: "React", icon: Code2, color: "text-blue-400" },
    { name: "Next.js", icon: Blocks, color: "text-white" },
    { name: "Node.js", icon: Database, color: "text-green-400" },
    { name: "MongoDB", icon: Database, color: "text-emerald-500" },
    { name: "React Native", icon: MonitorSmartphone, color: "text-blue-500" },
    { name: "Agentic AI", icon: BrainCircuit, color: "text-purple-400" },
    { name: "HTML & CSS", icon: Code2, color: "text-orange-400" },
    { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
  ],
  experience: [
    {
      id: "bottrion",
      type: "work",
      title: "Frontend Web & Mobile Developer",
      company: "Bottrion Systems",
      date: "Feb 2025 - Present",
      description: "Architecting modern web and mobile applications with hyper-responsive and futuristic user experiences. Implementing cutting-edge AI integrations and real-time features.",
      bullets: [
        "Developing scalable mobile applications using React Native.",
        "Engineering responsive web interfaces with Next.js.",
        "Integrating Agentic AI workflows (e.g. WhatsApp CRM)."
      ]
    },
    {
      id: "noblesse",
      type: "work",
      title: "Fullstack (MERN) Developer Intern",
      company: "Noblesse Tech",
      date: "Jan 2025 - Mar 2025",
      description: "Engineered scalable fullstack services using MongoDB, Express, React, and Node.js. Built robust data pipelines.",
      bullets: [
        "Built robust backend APIs with Node.js and Express.",
        "Designed and maintained MongoDB database schemas.",
        "Created interactive frontend interfaces with React."
      ]
    },
    {
      id: "neophyte",
      type: "work",
      title: "Frontend Developer Intern",
      company: "Neophyte Consulting Services",
      date: "July 2024 - Sep 2024",
      description: "Spearheaded frontend UI designs, focusing on immersive, highly interactive, and accessible components.",
      bullets: [
        "Translated Figma designs into pixel-perfect code.",
        "Optimized web performance and bundle sizes.",
        "Ensured cross-browser compatibility and responsiveness."
      ]
    },
    {
      id: "bca",
      type: "education",
      title: "Bachelor of Computer Application (BCA)",
      company: "Late. Babanrao Deshmukh College",
      date: "2021 - 2024",
      description: "Core computer science fundamentals, programming paradigms, and advanced software architectures.",
      bullets: [
        "Data Structures and Algorithms.",
        "Database Management Systems.",
        "Software Engineering principles."
      ]
    }
  ],
  projects: [
     {
      id: "ady-beverages",
      title: "ADY Beverages",
      description: "A premium website for an authentic Indian Goli Soda brand. Features a modern, dynamic UI to showcase the evolution of nostalgia with high carbonation and natural flavors.",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      link: "https://www.adybeverages.com/"
    },
    {
      id: "falcon-platform",
      title: "Falcon Platform",
      description: "A specialized mobile application based in GCC countries that allows customers to book transportation and accommodation facilities for the care and stay of their falcons.",
      tags: ["React Native", "Mobile App", "Android", "iOS"],
      link: "#"
    },
  
     {
      id: "craft-workshop",
      title: "Craft Workshop",
      description: "A portfolio and service website for an interior and exterior design company based in Himachal Pradesh. Features a sleek, dark-themed UI to showcase handcrafted decor and over 20 years of expertise.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      link: "https://www.craftworkshop.in/"
    },
    {
      id: "neophyte-consulting",
      title: "Neophyte Consulting Services",
      description: "A comprehensive corporate website for a consulting firm offering digital solutions including web & app development, marketing, and UI/UX design. Features a modern dark theme and interactive process flows.",
      tags: ["Next.js", "React", "Tailwind CSS", "React Flow"],
      link: "https://www.neophyteconsulting.com/"
    },
    {
      id: "madar-alhawiat",
      title: "Madar Alhawiat",
      description: "A mobile application revolutionizing storage and shipping with fully digital, on-demand waste container booking in the UAE. Features real-time availability, effortless browsing, and seamless online booking.",
      tags: ["React Native", "Mobile App", "Android", "iOS"],
      link: "https://play.google.com/store/apps/details?id=com.hawiya"
    },
     {
      id: "smart-hrms",
      title: "Smart HRMS",
      description: "A comprehensive Human Resources Management System (HRMS) web application built for Bottrion Systems to streamline HR operations and management.",
      tags: ["React", "React Query", "shadcn", "Tailwind CSS"],
      link: "#",
      isPrivate: true
    },
    {
      id: "smart-itsm",
      title: "Smart ITSM",
      description: "An industry-specific Information Technology Service Management (ITSM) web application tailored for businesses in Saudi Arabia.",
      tags: ["React", "React Query", "shadcn", "Tailwind CSS"],
      link: "#",
      isPrivate: true
    },
    {
      id: "more-projects",
      title: "20+ More Projects",
      description: "Over the years, I've successfully delivered more than 20 diverse web and mobile applications across various domains, consistently focusing on high performance, seamless UI/UX, and robust architecture.",
      tags: ["Web Apps", "Mobile Apps", "UI/UX", "Full Stack"],
      link: "#"
    }
  ]
};
