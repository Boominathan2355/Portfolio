// ─── Interfaces ────────────────────────────────────────────────

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'AI & Machine Learning' | 'Databases' | 'Infrastructure' | 'Developer Tools' | 'Operating Systems';
}

export interface Project {
  title: string;
  date: string;
  description: string;
  problem: string;
  technologies: string[];
  type: 'enterprise' | 'ai' | 'research' | 'academic' | 'personal';
  image?: string;
  link?: string;
  github?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Achievement {
  title: string;
  date: string;
}

export interface FocusArea {
  title: string;
  description: string;
  status: 'building' | 'exploring' | 'researching';
  technologies: string[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: 'role' | 'project' | 'education' | 'achievement';
}

export interface PersonalData {
  name: string;
  title: string;
  headline: string;
  phone: string;
  email: string;
  location: string;
  bio: string;
  about: string[];
  social: SocialLink[];
  skills: Skill[];
  projects: Project[];
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  achievements: Achievement[];
  currentFocus: FocusArea[];
  timeline: TimelineEvent[];
}

// ─── Data ──────────────────────────────────────────────────────

export const personalData: PersonalData = {
  name: "Boominathan Alagirisamy",
  title: "Product Development Trainee",
  headline: "Software Engineer · AI Engineering · Enterprise Applications",
  phone: "+91 6383737908",
  email: "boominathanalagirisamy@gmail.com",
  location: "Coimbatore, India",
  bio: "Software engineer at DevOpsLabs India, building enterprise frontend applications with React and contributing to product development. B.Tech graduate in AI & Data Science with hands-on work in deep learning, local LLMs, and IoT systems.",

  about: [
    "I'm a software engineer at DevOpsLabs India, where I build production frontend interfaces using React, Redux, TanStack Table, and ECharts for enterprise analytics dashboards. My day-to-day work involves integrating REST APIs, implementing complex data table interactions, and developing real-time visualization components.",
    "Outside of work, I focus on AI engineering — I've built a Transformer model from scratch in PyTorch, developed an offline chatbot using Ollama for local LLM inference, and I'm currently exploring document intelligence workflows, retrieval-augmented generation, and the Model Context Protocol.",
    "My background spans mechanical engineering (where I built a CNC laser engraver with Arduino) to AI & Data Science. This cross-disciplinary foundation shapes how I approach problems — grounded in physical systems thinking but working at the frontier of software and AI."
  ],

  social: [
    { name: "GitHub", url: "https://github.com/Boominathan2355", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/boominathan-alagirisamy", icon: "linkedin" },
    { name: "LeetCode", url: "https://leetcode.com/u/Boominathan_A/", icon: "code" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/Boominathan2355", icon: "terminal" },
  ],

  // ─── Skills ────────────────────────────────────────────────────

  skills: [
    // Languages
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "HTML", category: "Languages" },
    { name: "CSS", category: "Languages" },
    { name: "C", category: "Languages" },

    // Frontend
    { name: "React", category: "Frontend" },
    { name: "Redux Toolkit", category: "Frontend" },
    { name: "TanStack Table", category: "Frontend" },
    { name: "ECharts", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Framer Motion", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Vite", category: "Frontend" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "RESTful APIs", category: "Backend" },

    // AI & ML
    { name: "PyTorch", category: "AI & Machine Learning" },
    { name: "TensorFlow", category: "AI & Machine Learning" },
    { name: "Scikit-Learn", category: "AI & Machine Learning" },
    { name: "OpenCV", category: "AI & Machine Learning" },
    { name: "NLTK", category: "AI & Machine Learning" },
    { name: "Ollama", category: "AI & Machine Learning" },
    { name: "Transformers", category: "AI & Machine Learning" },

    // Databases
    { name: "MongoDB", category: "Databases" },
    { name: "MySQL", category: "Databases" },

    // Infrastructure
    { name: "AWS", category: "Infrastructure" },
    { name: "Git", category: "Infrastructure" },
    { name: "CI/CD", category: "Infrastructure" },
    { name: "GitHub Actions", category: "Infrastructure" },

    // Developer Tools
    { name: "VS Code", category: "Developer Tools" },
    { name: "Postman", category: "Developer Tools" },
    { name: "GitHub Copilot", category: "Developer Tools" },

    // Operating Systems
    { name: "Linux", category: "Operating Systems" },
    { name: "Ubuntu", category: "Operating Systems" },
  ],

  // ─── Current Focus ─────────────────────────────────────────────

  currentFocus: [
    {
      title: "Enterprise Frontend Development",
      description: "Building production UI components with React, Redux, TanStack Table, and ECharts for analytics dashboards at DevOpsLabs.",
      status: "building",
      technologies: ["React", "Redux Toolkit", "TanStack Table", "ECharts", "REST APIs"],
    },
    {
      title: "Local LLM Deployment",
      description: "Exploring local large language model inference using Ollama and researching llama.cpp for on-device AI capabilities.",
      status: "exploring",
      technologies: ["Ollama", "llama.cpp", "Python", "NLTK"],
    },
    {
      title: "Document Intelligence",
      description: "Researching OCR workflows, document validation pipelines, and AI-assisted document processing for enterprise use cases.",
      status: "researching",
      technologies: ["OCR", "Python", "AI Validation", "Document Processing"],
    },
    {
      title: "Retrieval-Augmented Generation",
      description: "Researching RAG architectures for combining local LLMs with domain-specific knowledge retrieval.",
      status: "researching",
      technologies: ["RAG", "Vector Search", "Ollama", "Prompt Engineering"],
    },
    {
      title: "Model Context Protocol",
      description: "Exploring MCP as a standard interface for connecting AI models with external tools and data sources.",
      status: "exploring",
      technologies: ["MCP", "AI Agents", "Tool Integration"],
    },
    {
      title: "Enterprise Backend Development",
      description: "Exploring Spring Boot for building REST APIs and backend services for enterprise applications.",
      status: "exploring",
      technologies: ["Spring Boot", "Java", "REST APIs", "MySQL"],
    },
  ],

  // ─── Projects ──────────────────────────────────────────────────

  projects: [
    {
      title: "Panchakarma Therapy Automation System",
      date: "Jan 2026 – Present",
      problem: "Manual therapy scheduling in clinics is error-prone and time-consuming, requiring staff to handle complex treatment workflows by hand.",
      description: "Built a web-based therapy automation system using React, Python, and MongoDB. Developed real-time dashboards with ECharts and TanStack Table for treatment monitoring. Implemented workflow tracking for patient sessions and a hybrid scheduling engine combining rule-based logic with genetic algorithm (GA) and particle swarm optimization (PSO) heuristics. Integrated Twilio for SMS notifications and Qwen AI for intelligent assistance.",
      technologies: ["React", "Python", "MongoDB", "ECharts", "TanStack Table", "Twilio", "Qwen AI", "GA", "PSO"],
      type: "enterprise",
      image: "/projects/project-7.jpg",
      link: "https://panchakarma-therapy-hxt3.vercel.app/",
    },
    {
      title: "Transformer Model from Scratch",
      date: "Aug 2025",
      problem: "Understanding the internal mechanics of Transformer architectures requires building one without pre-built abstractions.",
      description: "Implemented a Transformer-based sequence-to-sequence model from scratch using PyTorch. Built core components including Multi-Head Attention, Positional Encoding, Encoder-Decoder architecture, and Masked Attention mechanisms. Trained using Cross-Entropy Loss and Adam optimizer.",
      technologies: ["Python", "PyTorch", "NumPy", "Google Colab"],
      type: "ai",
      image: "/projects/project-6.jpg",
    },
    {
      title: "IoT Agricultural Monitoring System",
      date: "2025",
      problem: "Farms lack real-time visibility into soil and environmental conditions, leading to inefficient resource usage.",
      description: "Developed a real-time monitoring web application using React for agricultural data visualization. Integrated multiple IoT sensors for environmental and soil data collection. Used AWS Cloud Storage and MongoDB for persistent data logging and retrieval.",
      technologies: ["React", "JavaScript", "AWS", "MongoDB", "IoT Sensors"],
      type: "research",
      image: "/projects/project-5.jpg",
    },
    {
      title: "Offline Chatbot with Ollama & NLTK",
      date: "May – Jun 2025",
      problem: "Cloud-based AI assistants raise privacy concerns and require internet connectivity, making them unsuitable for offline use cases.",
      description: "Developed a privacy-focused offline chatbot integrating the Ollama framework for local large language model inference with NLTK for text preprocessing and tokenization. Designed for fully offline operation with no external API dependencies.",
      technologies: ["Python", "Ollama", "NLTK", "Local LLM"],
      type: "ai",
      image: "/projects/project-4.jpg",
    },
    {
      title: "2D to 3D Home Design Transformation",
      date: "2024",
      problem: "Visualizing 2D floor plans in 3D is difficult for non-designers and requires expensive CAD software.",
      description: "Developed a CNN-based model to process 2D floor plan images and generate corresponding 3D home design visualizations using Open3D for point cloud processing and Blender for 3D rendering.",
      technologies: ["Python", "CNN", "Open3D", "Blender"],
      type: "academic",
      image: "/projects/project-3.jpg",
    },
    {
      title: "Fire & Smoke Detection System",
      date: "Oct – Nov 2024",
      problem: "Traditional fire alarms are reactive. Computer vision can detect fire and smoke visually before physical sensors trigger.",
      description: "Designed a deep learning classification system using CNNs with OpenCV for real-time video feed processing and TensorFlow for model training. Built to detect fire and smoke patterns in camera feeds for safety monitoring.",
      technologies: ["Python", "CNN", "OpenCV", "TensorFlow"],
      type: "academic",
      image: "/projects/project-2.jpg",
    },
    {
      title: "CNC Laser Engraver",
      date: "2022 – 2023",
      problem: "Commercial laser engravers are expensive and lack portability for small-scale fabrication needs.",
      description: "Engineered a portable CNC laser engraver with a pantograph mechanism. Programmed Arduino-based GRBL firmware for precise stepper motor control and motion coordination. Executed high-precision wood engraving using custom G-code toolpaths.",
      technologies: ["Arduino", "GRBL", "Mechanical Design", "CAD"],
      type: "academic",
      image: "/projects/project-1.jpg",
    },
  ],

  // ─── Experience ────────────────────────────────────────────────

  experience: [
    {
      role: "Product Development Trainee (Full Time)",
      company: "DevOpsLabs India Pvt Ltd",
      duration: "Apr 2026 – Present",
      description: [
        "Developing production UI components using React (Vite) with Redux for state management across the product platform.",
        "Implementing data-rich table interfaces with TanStack Table for complex filtering, sorting, and pagination.",
        "Integrating REST APIs and building real-time analytics views using ECharts for business dashboards.",
        "Collaborating with the product development team on feature implementation and iterative code improvements.",
      ],
      technologies: ["React", "Redux", "TanStack Table", "ECharts", "REST APIs", "Vite"],
    },
    {
      role: "Product Development Intern",
      company: "DevOpsLabs India Pvt Ltd",
      duration: "Oct 2025 – Mar 2026",
      description: [
        "Contributed to building UI components using React (Vite) and Redux for the product frontend.",
        "Worked with TanStack Table to implement data table features for internal tools.",
        "Supported REST API integration and assisted in building analytics dashboards with ECharts.",
      ],
      technologies: ["React", "Redux", "TanStack Table", "ECharts", "REST APIs"],
    },
    {
      role: "Software Development Intern",
      company: "Centre for Innovation, Business Incubation, and Entrepreneurship (CIBIE)",
      duration: "Jun 2024 – Jul 2024",
      description: [
        "Automated database monitoring using Python, reducing debugging time by 20%.",
        "Optimized SQL queries to improve system efficiency.",
        "Supported legacy data migration while ensuring data integrity.",
        "Collaborated on troubleshooting and documenting sustainable database solutions.",
      ],
      technologies: ["Python", "MySQL", "SQL", "Database Administration"],
    },
  ],

  // ─── Education ─────────────────────────────────────────────────

  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Dr. Mahalingam College of Engineering and Technology",
      duration: "2023 – Apr 2026",
      score: "CGPA: 7.3 / 10",
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Nachimuthu Polytechnic College, Pollachi",
      duration: "2020 – 2023",
      score: "77%",
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Bharath Vidhya Niketan Matric Higher Secondary School, Pollachi",
      duration: "Completed 2020",
      score: "60%",
    },
  ],

  // ─── Certifications ────────────────────────────────────────────

  certifications: [
    { name: "Oracle Fusion Cloud Applications HCM Certified Foundations Associate", issuer: "Oracle", date: "Mar 2025" },
    { name: "Aspire Leaders Program", issuer: "Aspire", date: "Mar 2025" },
    { name: "SQL Basic", issuer: "HackerRank", date: "Jan 2025" },
    { name: "AI Mastermind", issuer: "Outskill", date: "2025" },
    { name: "MERN Stack", issuer: "PrepInsta", date: "2024" },
    { name: "Java Programming Essentials", issuer: "Great Learning", date: "2024" },
    { name: "C Programming Mastery", issuer: "PrepInsta", date: "2024" },
    { name: "MySQL Server Management and Debugging", issuer: "CIBIE", date: "2024" },
  ],

  // ─── Achievements ──────────────────────────────────────────────

  achievements: [
    { title: "First Prize — Metaverse Debugging & Code Design Efficiency", date: "Oct 2024" },
    { title: "Autodesk Fusion 360 Mega Challenge (MIT) — District Winner & State Finalist", date: "Mar 2023" },
  ],

  // ─── Timeline ──────────────────────────────────────────────────

  timeline: [
    { date: "Apr 2026", title: "Joined DevOpsLabs as Full-Time Trainee", description: "Transitioned from intern to full-time product development role.", type: "role" },
    { date: "Apr 2026", title: "Completed B.Tech in AI & Data Science", description: "Graduated from Dr. Mahalingam College of Engineering and Technology.", type: "education" },
    { date: "Jan 2026", title: "Started Panchakarma Therapy Automation", description: "Began building a full-stack therapy scheduling system with AI integration.", type: "project" },
    { date: "Oct 2025", title: "Started Internship at DevOpsLabs", description: "Began contributing to enterprise React frontend development.", type: "role" },
    { date: "Aug 2025", title: "Built Transformer Model from Scratch", description: "Implemented seq2seq Transformer in PyTorch with attention mechanisms.", type: "project" },
    { date: "May 2025", title: "Built Offline Chatbot with Ollama", description: "Developed privacy-focused local LLM chatbot using Ollama and NLTK.", type: "project" },
    { date: "Oct 2024", title: "Won First Prize — Metaverse Debugging", description: "Placed first in debugging and code design efficiency competition.", type: "achievement" },
    { date: "2024", title: "Fire & Smoke Detection System", description: "Built CNN-based real-time fire detection using OpenCV and TensorFlow.", type: "project" },
    { date: "Jun 2024", title: "CIBIE Internship", description: "Automated database monitoring with Python, optimized SQL queries.", type: "role" },
    { date: "2023", title: "Started B.Tech in AI & Data Science", description: "Enrolled at Dr. Mahalingam College of Engineering and Technology.", type: "education" },
    { date: "Mar 2023", title: "Autodesk Fusion 360 — State Finalist", description: "District winner and state-level finalist in Fusion 360 Mega Challenge.", type: "achievement" },
    { date: "Apr 2023", title: "Completed Diploma in Mechanical Engineering", description: "Graduated from Nachimuthu Polytechnic College with 77%.", type: "education" },
    { date: "2022", title: "Built CNC Laser Engraver", description: "Engineered Arduino-based portable laser engraver with GRBL firmware.", type: "project" },
  ],
};