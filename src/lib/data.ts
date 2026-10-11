export interface ProfileData {
  name: string;
  shortName: string;
  initials: string;
  roles: string[];
  primaryTitle: string;
  eyebrow: string;
  heroHeading: string;
  heroIntro: string;
  aboutHeading: string;
  aboutSummary: string;
  aboutSupporting: string;
  degree: string;
  university: string;
  educationYears: string;
  location: string;
  technicalFocus: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  github: string;
  linkedin: string;
  existingPortfolio: string;
  resumePdfUrl: string;
  introVideoUrl: string;
  contactHeading: string;
  contactSupporting: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  number: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  type: "tool" | "concept";
  color?: string;
  projectsUsed?: string[];
  description?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  number: string;
  title: string;
  statusOrYear: string;
  type: "Ongoing" | "Completed";
  description: string;
  technologies: string[];
  highlights: string[];
  verifiedUrl?: string;
  uiConcept: "event" | "room" | "corporate" | "food" | "career" | "task";
}

export interface CertificationItem {
  number: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface LeadershipItem {
  organization: string;
  role: string;
  period: string;
  description: string;
}

export interface VolunteeringItem {
  event: string;
  role: string;
  period: string;
  description: string;
}

export interface AchievementItem {
  number: string;
  title: string;
  roleOrContext: string;
  issuer: string;
  year: string;
  description: string;
  stats?: string;
}

export const PROFILE: ProfileData = {
  name: "Thasika Ragupathy",
  shortName: "Thasika",
  initials: "TR",
  roles: [
    "Full-Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Project Manager",
  ],
  primaryTitle: "Full-Stack Developer & IT Undergraduate",
  eyebrow: "FULL-STACK DEVELOPER · IT UNDERGRADUATE",
  heroHeading: "Building digital experiences with code, creativity, and curiosity.",
  heroIntro:
    "Hi, I'm Thasika Ragupathy. I'm a full-stack developer and Information Technology undergraduate who enjoys creating responsive web applications, exploring AI-powered technologies, designing user-friendly experiences, and solving real-world problems through technology.",
  aboutHeading: "A little about me.",
  aboutSummary:
    "Information Technology undergraduate and full-stack developer with hands-on experience designing and developing responsive, user-focused web applications using React, Next.js, TypeScript, JavaScript, Node.js, MySQL and MongoDB. Brings a complementary foundation in UX design, supported by the Google UX Design Professional Certificate, alongside exposure to AI, RESTful APIs and modern web technologies. Demonstrated problem-solving and innovation through competitive programming and university innovation challenges, complemented by leadership experience across IEEE, AIESEC and university initiatives, including team leadership, student representation and event coordination. Adept at translating ideas into practical digital solutions while collaborating across technical, academic and diverse team environments.",
  aboutSupporting:
    "My work bridges user-centered design, robust full-stack engineering, and multidisciplinary exploration. I believe that thoughtful code, empathetic design, and disciplined collaboration turn complex ideas into meaningful software.",
  degree: "Bachelor of Science in Information Technology",
  university: "University of Vavuniya",
  educationYears: "2023–Present",
  location: "Sri Lanka",
  technicalFocus: "Full-stack development, web development, UI/UX, and AI-related technologies.",
  email: "thasikaragupathy@gmail.com",
  phone: "+94702816421",
  phoneDisplay: "+94 702816421",
  github: "https://github.com/ThasikaRagupathy",
  linkedin: "https://www.linkedin.com/in/thasika-ragupathy",
  existingPortfolio: "https://thasikaragupathy.github.io/Portfolio",
  resumePdfUrl: "/resume.pdf",
  introVideoUrl: "/hero/intro.mp4",
  contactHeading: "Let's build something meaningful together.",
  contactSupporting:
    "I'm interested in opportunities to learn, collaborate, and contribute to projects across software development, UI/UX, and emerging technologies.",
};

export const NAV: NavItem[] = [
  { id: "about", label: "About", href: "#about", number: "01" },
  { id: "skills", label: "Skills", href: "#skills", number: "02" },
  { id: "projects", label: "Projects", href: "#projects", number: "03" },
  { id: "certifications", label: "Certifications", href: "#certifications", number: "04" },
  { id: "experience", label: "Experience", href: "#experience", number: "05" },
  { id: "achievements", label: "Achievements", href: "#achievements", number: "06" },
  { id: "contact", label: "Contact", href: "#contact", number: "07" },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming & Development",
    description: "Core languages and frameworks for responsive client and server development.",
    skills: [
      {
        id: "java",
        name: "Java",
        category: "Programming & Development",
        type: "tool",
        color: "#E76F00",
        description: "Object-oriented software development and core programming fundamentals.",
      },
      {
        id: "python",
        name: "Python",
        category: "Programming & Development",
        type: "tool",
        color: "#3776AB",
        description: "Scripting, algorithm problem-solving, and AI/ML exploration.",
      },
      {
        id: "cpp",
        name: "C++",
        category: "Programming & Development",
        type: "tool",
        color: "#00599C",
        description: "High-performance computing and competitive programming logic.",
      },
      {
        id: "html",
        name: "HTML5",
        category: "Programming & Development",
        type: "tool",
        color: "#E34F26",
        description: "Semantic document structuring and web accessibility standards.",
        projectsUsed: ["Evently Campus", "Roomify", "GlobalMax Website", "Foodie Drop", "Internship Hub"],
      },
      {
        id: "css",
        name: "CSS3 / Tailwind",
        category: "Programming & Development",
        type: "tool",
        color: "#1572B6",
        description: "Responsive layouts, flexbox/grid architecture, and clean styling.",
        projectsUsed: ["Evently Campus", "Roomify", "GlobalMax Website", "Foodie Drop", "Internship Hub"],
      },
      {
        id: "javascript",
        name: "JavaScript",
        category: "Programming & Development",
        type: "tool",
        color: "#F7DF1E",
        description: "Modern ES6+ syntax, asynchronous programming, and DOM interaction.",
        projectsUsed: ["Roomify", "Foodie Drop", "Internship Hub", "Task Management"],
      },
      {
        id: "react",
        name: "React",
        category: "Programming & Development",
        type: "tool",
        color: "#61DAFB",
        description: "Component lifecycle, state management, hooks, and reactive UIs.",
        projectsUsed: ["Roomify", "Evently Campus", "GlobalMax Website"],
      },
      {
        id: "nextjs",
        name: "Next.js",
        category: "Programming & Development",
        type: "tool",
        color: "#000000",
        description: "Full-stack App Router, SSR/SSG rendering, and API routes.",
        projectsUsed: ["Evently Campus", "GlobalMax Website"],
      },
      {
        id: "nodejs",
        name: "Node.js",
        category: "Programming & Development",
        type: "tool",
        color: "#339933",
        description: "Server-side JavaScript runtime for backend services and REST APIs.",
        projectsUsed: ["Foodie Drop", "Task Management Platform"],
      },
    ],
  },
  {
    id: "web-db",
    title: "Web & Databases",
    description: "Database architectures, content management, and communication interfaces.",
    skills: [
      {
        id: "wordpress",
        name: "WordPress",
        category: "Web & Databases",
        type: "tool",
        color: "#21759B",
        description: "Content management, theme customization, and web deployment.",
      },
      {
        id: "mysql",
        name: "MySQL",
        category: "Web & Databases",
        type: "tool",
        color: "#4479A1",
        description: "Relational database schema design, queries, and ACID compliance.",
        projectsUsed: ["Internship & Career Development Hub", "Task Management Platform"],
      },
      {
        id: "mongodb",
        name: "MongoDB",
        category: "Web & Databases",
        type: "tool",
        color: "#47A248",
        description: "NoSQL document storage, flexible data models, and JSON collections.",
        projectsUsed: ["Foodie Drop"],
      },
      {
        id: "rest-apis",
        name: "RESTful APIs",
        category: "Web & Databases",
        type: "tool",
        color: "#FF6C37",
        description: "Stateless HTTP architectural pattern, endpoints, and client-server integration.",
        projectsUsed: ["Foodie Drop", "Evently Campus"],
      },
    ],
  },
  {
    id: "design",
    title: "UI/UX Design & Creative Tools",
    description: "User research, wireframing, high-fidelity prototypes, and visual assets.",
    skills: [
      {
        id: "figma",
        name: "Figma",
        category: "UI/UX Design & Creative Tools",
        type: "tool",
        color: "#F24E1E",
        description: "User interface design, wireframing, design systems, and component libraries.",
        projectsUsed: ["Evently Campus", "Roomify", "GlobalMax Website"],
      },
      {
        id: "adobe-xd",
        name: "Adobe XD",
        category: "UI/UX Design & Creative Tools",
        type: "tool",
        color: "#FF61F6",
        description: "Interactive prototyping, UX flows, and design specifications.",
      },
      {
        id: "canva",
        name: "Canva",
        category: "UI/UX Design & Creative Tools",
        type: "tool",
        color: "#00C4CC",
        description: "Visual assets, presentation decks, and promotional graphics.",
      },
    ],
  },
  {
    id: "productivity",
    title: "Software & Productivity",
    description: "Engineering environments and desktop productivity software.",
    skills: [
      {
        id: "visual-studio",
        name: "Visual Studio / VS Code",
        category: "Software & Productivity",
        type: "tool",
        color: "#5C2D91",
        description: "Primary development environments, debugging, extensions, and version control.",
      },
      {
        id: "ms-office",
        name: "Microsoft Office",
        category: "Software & Productivity",
        type: "tool",
        color: "#D83B01",
        description: "Documentation, spreadsheets, technical reporting, and presentations.",
      },
    ],
  },
  {
    id: "management",
    title: "Project Management",
    description: "Agile workflows, task tracking, and cross-functional coordination tools.",
    skills: [
      {
        id: "jira",
        name: "Jira",
        category: "Project Management",
        type: "tool",
        color: "#0052CC",
        description: "Agile sprint planning, issue tracking, and backlog prioritization.",
      },
      {
        id: "trello",
        name: "Trello",
        category: "Project Management",
        type: "tool",
        color: "#0079BF",
        description: "Kanban boards, task organization, and team workflow transparency.",
      },
    ],
  },
  {
    id: "exposure",
    title: "Additional Technical Exposure",
    description: "Broader software concepts and modern architectural patterns.",
    skills: [
      {
        id: "ai",
        name: "Artificial Intelligence",
        category: "Additional Technical Exposure",
        type: "concept",
        description: "Exposure to AI concepts, machine learning foundations, and modern AI toolchains.",
      },
      {
        id: "modern-web",
        name: "Modern Web Technologies",
        category: "Additional Technical Exposure",
        type: "concept",
        description: "Single-page and server-rendered architectures, modern build tools, and web standards.",
        projectsUsed: ["Evently Campus", "Roomify", "GlobalMax Website"],
      },
      {
        id: "responsive-dev",
        name: "Responsive Web Development",
        category: "Additional Technical Exposure",
        type: "concept",
        description: "Adaptive multi-screen layouts, mobile-first design, and cross-browser resilience.",
        projectsUsed: ["Evently Campus", "Roomify", "GlobalMax Website", "Foodie Drop", "Internship Hub"],
      },
      {
        id: "auth",
        name: "Authentication",
        category: "Additional Technical Exposure",
        type: "concept",
        description: "User session management, role-based access control, and credential handling.",
        projectsUsed: ["Internship & Career Development Hub", "Task Management Platform"],
      },
      {
        id: "db-integration",
        name: "Database Integration",
        category: "Additional Technical Exposure",
        type: "concept",
        description: "Connecting backend applications with relational and document databases.",
        projectsUsed: ["Internship & Career Development Hub", "Task Management Platform", "Foodie Drop"],
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    number: "01",
    title: "Evently Campus",
    statusOrYear: "Ongoing",
    type: "Ongoing",
    description:
      "Developed Evently Campus, a responsive university event platform using Next.js, TypeScript, and Tailwind CSS, featuring event discovery, schedules, digital registration, QR ticketing, and an interactive campus map.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Event discovery feed with date and category filtering",
      "Interactive multi-day schedule viewer",
      "Digital student registration with QR ticketing",
      "Interactive campus location map interface",
    ],
    uiConcept: "event",
  },
  {
    number: "02",
    title: "Roomify",
    statusOrYear: "Ongoing",
    type: "Ongoing",
    description:
      "Developed an interactive room design platform using React.js and Tailwind CSS, featuring furniture customization, drag-and-drop room planning, budget tracking, and responsive UI components.",
    technologies: ["React.js", "Tailwind CSS"],
    highlights: [
      "Modular drag-and-drop 2D room canvas",
      "Dynamic furniture dimensions and color customization",
      "Live budget calculator tallying active furniture costs",
      "Responsive design supporting tablet and desktop workflows",
    ],
    uiConcept: "room",
  },
  {
    number: "03",
    title: "GlobalMax Website",
    statusOrYear: "Ongoing",
    type: "Ongoing",
    description:
      "Developed a responsive corporate website for Global Max Networks using Next.js, TypeScript, and Tailwind CSS, featuring service showcases, company information, achievements, and reusable UI components.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Structured service catalogue with technical specifications",
      "Corporate milestones and company achievement showcases",
      "Reusable component design system for streamlined updates",
      "Optimized load times and high-contrast accessibility",
    ],
    uiConcept: "corporate",
  },
  {
    number: "04",
    title: "Foodie Drop",
    statusOrYear: "2026",
    type: "Completed",
    description:
      "Responsive full-stack food delivery platform with product browsing, cart, checkout, and RESTful APIs.",
    technologies: ["Full-stack web development", "RESTful APIs"],
    highlights: [
      "Categorized restaurant and food item catalogue",
      "Dynamic real-time shopping cart calculation",
      "RESTful API endpoints for order lifecycle management",
      "Clean order review and checkout experience",
    ],
    uiConcept: "food",
  },
  {
    number: "05",
    title: "Internship & Career Development Hub",
    statusOrYear: "2025",
    type: "Completed",
    description:
      "Web-based internship and career platform with responsive UI, authentication, profiles, job applications, and MySQL integration.",
    technologies: ["Web development", "Authentication", "MySQL"],
    highlights: [
      "Role-based authentication for candidates and recruiters",
      "User profile management with CV and skills attachments",
      "Application tracking dashboard with real-time status",
      "Normalized MySQL database storing listings and applications",
    ],
    uiConcept: "career",
  },
  {
    number: "06",
    title: "Project & Team Task Management Platform",
    statusOrYear: "2024",
    type: "Completed",
    description:
      "Full-stack task management platform with role-based dashboards and database integration.",
    technologies: ["Full-stack development", "Role-based dashboards", "Database integration"],
    highlights: [
      "Role-based administrative and team member views",
      "Kanban board workflow with status progression",
      "Persistent task storage with relational database integration",
      "Real-time task metrics and sprint completion tracking",
    ],
    uiConcept: "task",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    number: "01",
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    year: "2025",
    description:
      "Comprehensive training in the UX design process, empathizing with users, defining pain points, ideating solutions, wireframing, creating prototypes in Figma, and conducting usability studies.",
  },
  {
    number: "02",
    title: "Certificate of Appreciation – Postman API 101",
    issuer: "Postman Student Leader Program, University of Vavuniya",
    year: "2025",
    description:
      "Hands-on foundational training covering RESTful API testing, HTTP request construction, status codes, documentation, and automated testing workflows.",
  },
  {
    number: "03",
    title: "Certificate Course in Artificial Intelligence",
    issuer: "Great Minds Campus, Sri Lanka",
    year: "2024",
    description:
      "Structured curriculum introducing artificial intelligence fundamentals, algorithmic concepts, machine learning essentials, and practical problem-solving applications.",
  },
  {
    number: "04",
    title: "Basic Programming & Web Development",
    issuer: "Pattarai Academy for Skills Excellence (PASE)",
    year: "2023",
    description:
      "Foundational program covering computer programming principles, algorithmic logic, HTML, CSS, JavaScript, and responsive website construction.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Vavuniya",
    period: "2023–Present",
    description:
      "Undergraduate curriculum emphasizing software engineering, database management, algorithms, web technologies, and computational systems.",
  },
  {
    degree: "Diploma in IT",
    institution: "Esoft Metro Campus",
    period: "2018–2019",
    description:
      "Comprehensive diploma program covering foundational computing principles, office automation, programming logic, and IT system essentials.",
  },
  {
    degree: "Diploma in English",
    institution: "Esoft Metro Campus",
    period: "2018–2019",
    description:
      "Professional English communication, formal correspondence, public presentation, and academic writing.",
  },
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    organization: "IEEE Student Branch, University of Vavuniya",
    role: "Chairperson",
    period: "2025–2026",
    description:
      "Leading the student branch, coordinating activities, and supporting technical and professional initiatives across university faculties and national IEEE sections.",
  },
  {
    organization: "AIESEC in Vavuniya",
    role: "OGV Manager and Team Lead",
    period: "2024–2026",
    description:
      "Coordinating team activities and supporting exchange-related initiatives, youth leadership development, and cross-cultural volunteer programs.",
  },
  {
    organization: "G17 University Ambassadors Consortium",
    role: "SDG 09 Ambassador",
    period: "2025–2026",
    description:
      "Promoting Industry, Innovation, and Infrastructure initiatives aligned with the United Nations Sustainable Development Goals across campus and community.",
  },
  {
    organization: "IEEE Computer Society, University of Vavuniya",
    role: "Web Administrator",
    period: "2024–2025",
    description:
      "Managing web content and supporting online platform maintenance for society events, technical blogs, and digital announcements.",
  },
  {
    organization: "Faculty Union",
    role: "Student Representative",
    period: "2023–2025",
    description:
      "Representing students and supporting communication between students and faculty leadership to foster an inclusive academic environment.",
  },
  {
    organization: "Gavel Club, University of Vavuniya",
    role: "Volunteer",
    period: "2024–2025",
    description:
      "Supporting club events and coordination, fostering public speaking, communication, and leadership skills among undergraduate members.",
  },
  {
    organization: "Zero Plastic Community",
    role: "Hero Volunteer and Event Coordinator",
    period: "2023–2024",
    description:
      "Supporting event planning, coordination, and execution for grassroots sustainability drives and campus plastic-reduction campaigns.",
  },
];

export const VOLUNTEERING: VolunteeringItem[] = [
  {
    event: "ICAS International Conference, University of Vavuniya",
    role: "Committee Member",
    period: "2025",
    description:
      "Supporting conference organization, logistical coordination, paper presentation schedules, and international delegate hospitality.",
  },
  {
    event: "IEEE EMBS AXON 2025, IEEE EMBS Sri Lanka Chapter",
    role: "Secretariat and Program Team Member",
    period: "May 2025",
    description:
      "Assisting secretariat operations, coordinating workshop itineraries, and managing technical session logistics for biomedical engineering participants.",
  },
  {
    event: "APPRA Conference, Harmony Centre, University of Vavuniya",
    role: "Media Sub-Committee Member",
    period: "2024",
    description:
      "Producing digital media content, managing event documentation, and coordinating audio-visual support during conference proceedings.",
  },
  {
    event: "University of Vavuniya Inter-Faculty Freshers' Awarding Ceremony",
    role: "Committee Member",
    period: "2024",
    description:
      "Coordinating stage management, protocol, certificate awarding schedules, and inter-faculty program operations.",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    number: "01",
    title: "IEEE Xtreme 17.0–19.0 Programming Competition",
    roleOrContext: "Global Participant",
    issuer: "IEEE",
    year: "2023–2025",
    description:
      "Participated in a global competitive programming competition involving 19,000+ participants worldwide, solving complex algorithmic challenges under strict 24-hour time limits.",
    stats: "19,000+ Global Participants",
  },
  {
    number: "02",
    title: "YESSIST12 2024 — Innovation Challenge Achievement",
    roleOrContext: "Member of Quantum Quest · Winner",
    issuer: "University of Vavuniya",
    year: "2024",
    description:
      "Won the Preliminary Round of the Innovation Challenge Track as a member of Quantum Quest, designing and pitching an inventive technological solution.",
    stats: "Preliminary Round Winner",
  },
  {
    number: "03",
    title: "ZeroPlastic Volunteer Awards 2024",
    roleOrContext: "Hero Volunteer",
    issuer: "ZeroPlastic Movement",
    year: "2024",
    description:
      "Recognised for contributions to climate action, plastic pollution reduction, and sustainable practices through impactful campus and community action.",
    stats: "Hero Volunteer Recognition",
  },
  {
    number: "04",
    title: "IEEE Sight Sprints 2025",
    roleOrContext: "Organising Committee Member",
    issuer: "IEEE",
    year: "2025",
    description:
      "Contributed to event coordination, teamwork, and the execution of the SDG Sprints initiative addressing sustainable technology solutions.",
    stats: "Organizing Committee",
  },
  {
    number: "05",
    title: "Certificate of Appreciation — IEEE Career Compass Workshop",
    roleOrContext: "Workshop Coordinator",
    issuer: "IEEE Student Branch, University of Vavuniya",
    year: "2025",
    description:
      "Recognised for contributions to event coordination, teamwork, and pre-event and post-event support for career mentorship sessions.",
    stats: "Appreciation Award",
  },
];
