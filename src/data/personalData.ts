export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: 'Frontend' | 'Backend' | 'APIs' | 'Databases' | 'DevOps & Deployment' | 'Tools' | 'AI-Assisted Development' | 'Vibe Coding' | 'Artificial Intelligence' | 'Others';
}

export interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
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

export interface PersonalData {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  bio: string;
  about: string | string[];
  social: SocialLink[];
  skills: Skill[];
  interests: string[];
  projects: Project[];
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  achievements: Achievement[];
}

export const personalData: PersonalData = {
  name: "Boominathan Alagirisamy",
  title: "Full Stack & AI Developer",
  phone: "+91 6383737908",
  email: "boominathanalagirisamy@gmail.com",
  location: "Kinathukadavu, Coimbatore",
  bio: "Full Stack & AI Developer focused on real-time systems, machine learning, and smart engineering solutions.",
  about: [
    "Full Stack and AI Developer with hands-on experience in building scalable, real-time applications using React, Angular, Node.js, Python, and modern database systems. Skilled in developing machine learning solutions, optimizing databases, and integrating REST APIs for high-performance applications.",
    "Experienced in deploying applications on AWS/Linux environments and working with tools such as Git and CI/CD pipelines. Strong understanding of system design, data handling, and AI-driven development.",
    "With a foundation in mechanical engineering and current specialization in Artificial Intelligence and Data Science, I bring a multidisciplinary approach to solving complex engineering problems. My focus lies in developing intelligent systems at the intersection of IoT, machine learning, and full-stack technologies."
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/Boominathan2355",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/boominathan-alagirisamy",
      icon: "linkedin"
    },
    {
      name: "Leetcode",
      url: "https://leetcode.com/u/Boominathan_A/",
      icon: "code"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/Boominathan2355",
      icon: "terminal"
    }
  ],
  skills: [
    // Frontend
    { name: "HTML", proficiency: 95, category: "Frontend" },
    { name: "CSS", proficiency: 90, category: "Frontend" },
    { name: "JavaScript", proficiency: 85, category: "Frontend" },
    { name: "React + Vite", proficiency: 90, category: "Frontend" },
    { name: "Angular", proficiency: 70, category: "Frontend" },
    { name: "Vue.js", proficiency: 65, category: "Frontend" },

    // Backend
    { name: "Node.js", proficiency: 85, category: "Backend" },
    { name: "Python", proficiency: 80, category: "Backend" },
    { name: "Java Spring Boot", proficiency: 75, category: "Backend" },

    // APIs
    { name: "RESTful APIs", proficiency: 85, category: "APIs" },
    { name: "API Integration", proficiency: 90, category: "APIs" },

    // Databases
    { name: "MongoDB", proficiency: 80, category: "Databases" },
    { name: "MySQL", proficiency: 85, category: "Databases" },
    { name: "SQL & Optimization", proficiency: 90, category: "Databases" },

    // DevOps & Deployment
    { name: "AWS", proficiency: 75, category: "DevOps & Deployment" },
    { name: "Linux", proficiency: 80, category: "DevOps & Deployment" },
    { name: "Git", proficiency: 90, category: "DevOps & Deployment" },
    { name: "CI/CD (Basic)", proficiency: 65, category: "DevOps & Deployment" },
    { name: "Deployment", proficiency: 75, category: "DevOps & Deployment" },

    // Tools
    { name: "VS Code", proficiency: 95, category: "Tools" },
    { name: "Postman", proficiency: 90, category: "Tools" },

    // AI-Assisted Development
    { name: "GitHub Copilot", proficiency: 90, category: "AI-Assisted Development" },
    { name: "N8N", proficiency: 75, category: "AI-Assisted Development" },
    { name: "Prompt Engineering", proficiency: 95, category: "AI-Assisted Development" },

    // Vibe Coding
    { name: "Antigravity", proficiency: 100, category: "Vibe Coding" },
    { name: "Cursor", proficiency: 95, category: "Vibe Coding" },
    { name: "Bolt", proficiency: 90, category: "Vibe Coding" },
    { name: "v0", proficiency: 85, category: "Vibe Coding" },
    { name: "Lovable", proficiency: 85, category: "Vibe Coding" },
    { name: "Claude Code", proficiency: 90, category: "Vibe Coding" },
    { name: "Google AI Studio", proficiency: 85, category: "Vibe Coding" },
    { name: "System Design", proficiency: 80, category: "Backend" },
    { name: "Data Handling", proficiency: 85, category: "Artificial Intelligence" },
    { name: "CI/CD Pipelines", proficiency: 75, category: "DevOps & Deployment" },

    // Machine Learning & AI
    { name: "PyTorch", proficiency: 85, category: "Artificial Intelligence" },
    { name: "TensorFlow", proficiency: 80, category: "Artificial Intelligence" },
    { name: "Scikit-Learn", proficiency: 85, category: "Artificial Intelligence" },
    { name: "Computer Vision (OpenCV)", proficiency: 80, category: "Artificial Intelligence" },
    { name: "Natural Language Processing", proficiency: 85, category: "Artificial Intelligence" },
    { name: "Generative AI", proficiency: 90, category: "Artificial Intelligence" }
  ],
  interests: [
    "Artificial Intelligence",
    "Full Stack Development",
    "Internet of Things (IoT)",
    "Machine Learning",
    "Database Optimization"
  ],
  projects: [
    {
      title: "A Web-Based Therapy Automation System for Panchakarma",
      date: "Jan 2026 - current",
      description: "Built using React, Python, MongoDB with real-time dashboards (ECharts, TanStack), implemented workflow tracking and hybrid scheduling (rule-based + GA + PSO + heuristics), and integrated Twilio SMS and Qwen AI.",
      technologies: ["React", "Python", "MongoDB", "ECharts", "TanStack", "Twilio", "Qwen AI"],
      image: "/projects/project-7.jpg",
      link: "https://panchakarma-therapy-hxt3.vercel.app/"
    },
    {
      title: "Transformers Model",
      date: "2025",
      description: "Implemented a Transformer-based seq2seq model from scratch using PyTorch, featuring Multi-Head Attention, Positional Encoding, Encoder-Decoder architecture, and Masked Attention. Trained with Cross-Entropy Loss and Adam optimizer, demonstrating strong grasp of core Transformer mechanisms without relying on pre-built libraries.",
      technologies: ["Transformers", "Python", "PyTorch", "Google Colab","NumPy & Math", "GitHub"],
      image: "/projects/project-6.jpg"
    },
    {
      title: "IoT-Based Agricultural Monitoring System",
      date: "2025",
      description: "Developed a real-time monitoring web application using React and JavaScript. Integrated multiple sensors for accurate agricultural data collection. Managed data storage using AWS Cloud Storage and MongoDB. Planned future implementation of machine learning models for crop health prediction.",
      technologies: ["React", "JavaScript", "AWS", "MongoDB", "IoT Sensors","GitHub"],
      image: "/projects/project-5.jpg"
    },
    {
      title: "Offline Chatbot Using Ollama and NLTK",
      date: "2025",
      description: "Developed a privacy-focused offline chatbot integrating the Ollama framework with NLTK for natural language understanding and processing.",
      technologies: ["Python", "NLTK", "Ollama", "NLP","GitHub"],
      image: "/projects/project-4.jpg"
    },
    {
      title: "Transformation: 2D into 3D Home Design",
      date: "2024",
      description: "Created a CNN-based model to convert 2D floor plans into realistic 3D home designs using Open3D and Blender.",
      technologies: ["Python", "CNN", "Open3D", "Blender"],
      image: "/projects/project-3.jpg"
    },
    {
      title: "Fire & Smoke Detection Using Convolutional Neural Networks",
      date: "2024",
      description: "Designed a deep learning-based system to detect fire and smoke for enhanced safety monitoring.",
      technologies: ["Python", "CNN", "OpenCV", "TensorFlow"],
      image: "/projects/project-2.jpg"
    },
    {
      title: "Design and Fabrication of CNC Laser Engraver",
      date: "2022–2023",
      description: "Engineered a portable CNC laser engraver incorporating a pantograph mechanism. Programmed Arduino-based GRBL firmware for precise motion control. Executed high-precision wood engraving projects.",
      technologies: ["Arduino", "GRBL Firmware", "Mechanical Design", "CAD"],
      image: "/projects/project-1.jpg"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in AI & Data Science",
      institution: "Dr. Mahalingam College of Engineering and Technology",
      duration: "Expected Graduation: June 2026",
      score: "Current CGPA: 7.3 (Semester VII)"
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Nachimuthu Polytechnic College, Pollachi",
      duration: "Completed April 2023",
      score: "Percentage: 77%"
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Bharath Vidhya Niketan Matric Higher Secondary School, Pollachi",
      duration: "Completed March 2020",
      score: "Percentage: 60%"
    }
  ],
  experience: [
    {
      role: "Product Development - Trainee (Full Time)",
      company: "DevOpsLabs India Pvt Ltd - Malumichampatti",
      duration: "2026 (April) - Current",
      description: [
        "Built scalable UI using React (Vite, Redux).",
        "Implemented advanced data tables with TanStack Table.",
        "Integrated REST APIs and ECharts for real-time analytics dashboards."
      ]
    },
    {
      role: "Product Development - Intern",
      company: "DevOpsLabs India Pvt Ltd - Malumichampatti",
      duration: "2025 (Oct) – 2026 (March)",
      description: [
        "Built scalable UI using React (Vite, Redux).",
        "Implemented advanced data tables with TanStack Table.",
        "Integrated REST APIs and ECharts for real-time analytics dashboards."
      ]
    },
    {
      role: "Intern",
      company: "Centre for Innovation, Business Incubation, and Entrepreneurship (CIBIE), Pollachi",
      duration: "June 2024 – July 2024",
      description: [
        "Automated database monitoring using Python, reducing debugging time by 20%.",
        "Optimized SQL queries to improve system efficiency.",
        "Supported legacy data migration while ensuring data integrity.",
        "Collaborated on troubleshooting and implementing sustainable database solutions."
      ]
    }
  ],
  certifications: [
    {
      name: "Oracle Fusion Cloud Applications HCM Certified Foundations Associate",
      issuer: "Oracle",
      date: "March 2025"
    },
    {
      name: "Aspire Leaders Program",
      issuer: "Aspire",
      date: "March 2025"
    },
    {
      name: "SQL Basic",
      issuer: "HackerRank",
      date: "January 2025"
    },
    {
      name: "Java Programming Essentials",
      issuer: "Great Learning",
      date: "2024"
    },
    {
      name: "C Programming Mastery",
      issuer: "Preinsta",
      date: "2024"
    },
    {
      name: "MySQL Server Management and Debugging",
      issuer: "CIBIE",
      date: "2024"
    },
    {
      name: "MERN STACK",
      issuer: "PrepInsta ",
      date: "2024"
    },
    {
      name: "AI Mastermind",
      issuer: "Outskill",
      date: "2025"
    }
  ],
  achievements: [
    {
      title: "First Prize in Metaverse Debugging & Code Design Efficiency",
      date: "October 2024"
    },
    {
      title: "Autodesk Fusion 360 Mega Challenge(MIT) – District Level Winner & State-Level Finalist",
      date: "March 2023"
    }
  ]
};