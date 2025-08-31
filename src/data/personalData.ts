export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: 'Programming Languages' | 'Web & Front-End' | 'Databases' | 'Cloud & Tools' | 'Frameworks & Libraries' | 'Platforms' | 'Others';
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

export interface PersonalData {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  bio: string;
  about: string;
  social: SocialLink[];
  skills: Skill[];
  interests: string[];
  projects: Project[];
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  achievements: { title: string; date: string }[];
}

export const personalData: PersonalData = {
  name: "Boominathan Alagirisamy",
  title: "B.Tech AI & Data Science Student",
  phone: "+91 6383737908",
  email: "boominathanalagirisamy@gmail.com",
  location: "Kinathukadavu, Coimbatore",
  bio: "Passionate AI & Data Science student with hands-on experience in database management, machine learning, and full-stack development.",
  about: "I am a B.Tech AI & Data Science student with a strong foundation in programming and data management. With experience in database optimization, machine learning model development, and full-stack applications, I am passionate about creating innovative technological solutions. My background in mechanical engineering combined with my current focus on AI gives me a unique perspective on problem-solving. I am particularly interested in the intersection of IoT, machine learning, and full-stack development.",
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
    // Programming Languages
    { name: "Java", proficiency: 50, category: "Programming Languages" },
    { name: "Python", proficiency: 35, category: "Programming Languages" },
    { name: "SQL", proficiency: 60, category: "Programming Languages" },
    { name: "C", proficiency: 30, category: "Programming Languages" },
    
    // Web & Front-End
    { name: "React", proficiency: 30, category: "Web & Front-End" },
    { name: "JavaScript", proficiency: 30, category: "Web & Front-End" },
    { name: "jQuery", proficiency: 30, category: "Web & Front-End" },
    
    // Databases
    { name: "MongoDB", proficiency: 75, category: "Databases" },
    { name: "MySQL", proficiency: 85, category: "Databases" },
    
    // Cloud & Tools
    { name: "AWS Cloud Storage", proficiency: 70, category: "Cloud & Tools" },
    { name: "Firebase", proficiency: 65, category: "Cloud & Tools" },
    
    // Frameworks & Libraries
    { name: "NLTK", proficiency: 50, category: "Frameworks & Libraries" },
    { name: "Ollama", proficiency: 50, category: "Frameworks & Libraries" },
    {name: "Transformers", proficiency: 20, category: "Frameworks & Libraries" },
    
    // Platforms
    { name: "Linux", proficiency: 40, category: "Platforms" },
    { name: "Node.js", proficiency: 50, category: "Platforms" },
    
    // Others
    { name: "spaCy", proficiency: 20, category: "Others" },
    { name: "Embedded Systems", proficiency: 50, category: "Others" },
    { name: "Arduino", proficiency: 50, category: "Others" }
  ],
  interests: [
    "Artificial Intelligence",
    "Full Stack Development",
    "Internet of Things (IoT)",
    "Machine Learning",
    "Artificial Intelligence"
  ],
  projects: [
    {
      title: "Design and Fabrication of CNC Laser Engraver",
      date: "2022–2023",
      description: "Engineered a portable CNC laser engraver incorporating a pantograph mechanism. Programmed Arduino-based GRBL firmware for precise motion control. Executed high-precision wood engraving projects.",
      technologies: ["Arduino", "GRBL Firmware", "Mechanical Design", "CAD"],
      image: "/project-1.jpg"
    },
    {
      title: "Fire & Smoke Detection Using Convolutional Neural Networks",
      date: "2024",
      description: "Designed a deep learning-based system to detect fire and smoke for enhanced safety monitoring.",
      technologies: ["Python", "CNN", "OpenCV", "TensorFlow"],
      image: "/project-2.jpg"
    },
    {
      title: "Transformation: 2D into 3D Home Design",
      date: "2024",
      description: "Created a CNN-based model to convert 2D floor plans into realistic 3D home designs using Open3D and Blender.",
      technologies: ["Python", "CNN", "Open3D", "Blender"],
      image: "/project-3.jpg"
    },
    {
      title: "Offline Chatbot Using Ollama and NLTK",
      date: "2025",
      description: "Developed a privacy-focused offline chatbot integrating the Ollama framework with NLTK for natural language understanding and processing.",
      technologies: ["Python", "NLTK", "Ollama", "NLP","GitHub"],
      image: "/project-4.jpg"
    },
    {
      title: "IoT-Based Agricultural Monitoring System",
      date: "2025",
      description: "Developed a real-time monitoring web application using React and JavaScript. Integrated multiple sensors for accurate agricultural data collection. Managed data storage using AWS Cloud Storage and MongoDB. Planned future implementation of machine learning models for crop health prediction.",
      technologies: ["React", "JavaScript", "AWS", "MongoDB", "IoT Sensors","GitHub"],
      image: "/project-5.jpg"
    },
    {
      title: "Transformers Model",
      date: "2025",
      description: "Implemented a Transformer-based seq2seq model from scratch using PyTorch, featuring Multi-Head Attention, Positional Encoding, Encoder-Decoder architecture, and Masked Attention. Trained with Cross-Entropy Loss and Adam optimizer, demonstrating strong grasp of core Transformer mechanisms without relying on pre-built libraries.",
      technologies: ["Transformers", "Python", "PyTorch", "Google Colab","NumPy & Math", "GitHub"],
      image: "/project-6.jpg"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in AI & Data Science",
      institution: "Dr. Mahalingam College of Engineering and Technology",
      duration: "Expected Graduation: June 2026",
      score: "Current CGPA: 7.3 (still Semester VI)"
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
    }
  ]
};