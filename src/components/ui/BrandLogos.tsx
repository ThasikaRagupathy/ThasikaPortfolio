import React from "react";

export interface BrandLogoProps {
  id: string;
  className?: string;
  size?: number;
}

export interface SkillTheme {
  name: string;
  brandColor: string;
  glowColor: string;
  bgGradient: string;
  borderTint: string;
  roleBadge: string;
}

export function getSkillTheme(id: string): SkillTheme {
  switch (id) {
    case "java":
      return {
        name: "Java",
        brandColor: "#E76F00",
        glowColor: "rgba(231, 111, 0, 0.25)",
        bgGradient: "from-amber-500/10 to-orange-500/10",
        borderTint: "group-hover:border-amber-300",
        roleBadge: "Language",
      };
    case "python":
      return {
        name: "Python",
        brandColor: "#3776AB",
        glowColor: "rgba(55, 118, 171, 0.25)",
        bgGradient: "from-blue-500/10 to-amber-500/10",
        borderTint: "group-hover:border-blue-300",
        roleBadge: "Language",
      };
    case "cpp":
      return {
        name: "C++",
        brandColor: "#00599C",
        glowColor: "rgba(0, 89, 156, 0.25)",
        bgGradient: "from-blue-600/10 to-sky-500/10",
        borderTint: "group-hover:border-blue-300",
        roleBadge: "Systems / DSA",
      };
    case "html":
      return {
        name: "HTML5",
        brandColor: "#E34F26",
        glowColor: "rgba(227, 79, 38, 0.25)",
        bgGradient: "from-orange-500/10 to-red-500/10",
        borderTint: "group-hover:border-orange-300",
        roleBadge: "Markup",
      };
    case "css":
      return {
        name: "CSS3",
        brandColor: "#1572B6",
        glowColor: "rgba(21, 114, 182, 0.25)",
        bgGradient: "from-blue-500/10 to-cyan-500/10",
        borderTint: "group-hover:border-blue-300",
        roleBadge: "Styling",
      };
    case "tailwind":
      return {
        name: "Tailwind CSS",
        brandColor: "#06B6D4",
        glowColor: "rgba(6, 182, 212, 0.25)",
        bgGradient: "from-cyan-500/10 to-sky-500/10",
        borderTint: "group-hover:border-cyan-300",
        roleBadge: "CSS Framework",
      };
    case "javascript":
      return {
        name: "JavaScript",
        brandColor: "#F7DF1E",
        glowColor: "rgba(247, 223, 30, 0.25)",
        bgGradient: "from-yellow-500/10 to-amber-500/10",
        borderTint: "group-hover:border-yellow-300",
        roleBadge: "Language",
      };
    case "typescript":
      return {
        name: "TypeScript",
        brandColor: "#3178C6",
        glowColor: "rgba(49, 120, 198, 0.25)",
        bgGradient: "from-blue-600/10 to-indigo-500/10",
        borderTint: "group-hover:border-blue-300",
        roleBadge: "Typed JS",
      };
    case "react":
      return {
        name: "React",
        brandColor: "#61DAFB",
        glowColor: "rgba(97, 218, 251, 0.28)",
        bgGradient: "from-cyan-500/10 to-blue-500/10",
        borderTint: "group-hover:border-cyan-300",
        roleBadge: "UI Library",
      };
    case "nextjs":
      return {
        name: "Next.js",
        brandColor: "#000000",
        glowColor: "rgba(0, 0, 0, 0.22)",
        bgGradient: "from-slate-700/10 to-zinc-800/10",
        borderTint: "group-hover:border-slate-400",
        roleBadge: "Full-Stack",
      };
    case "nodejs":
      return {
        name: "Node.js",
        brandColor: "#339933",
        glowColor: "rgba(51, 153, 51, 0.25)",
        bgGradient: "from-emerald-500/10 to-green-500/10",
        borderTint: "group-hover:border-emerald-300",
        roleBadge: "Runtime",
      };
    case "wordpress":
      return {
        name: "WordPress",
        brandColor: "#21759B",
        glowColor: "rgba(33, 117, 155, 0.25)",
        bgGradient: "from-blue-600/10 to-sky-600/10",
        borderTint: "group-hover:border-sky-300",
        roleBadge: "CMS",
      };
    case "mysql":
      return {
        name: "MySQL",
        brandColor: "#00758F",
        glowColor: "rgba(0, 117, 143, 0.25)",
        bgGradient: "from-cyan-600/10 to-amber-500/10",
        borderTint: "group-hover:border-cyan-300",
        roleBadge: "Relational DB",
      };
    case "mongodb":
      return {
        name: "MongoDB",
        brandColor: "#47A248",
        glowColor: "rgba(71, 162, 72, 0.25)",
        bgGradient: "from-green-500/10 to-emerald-500/10",
        borderTint: "group-hover:border-green-300",
        roleBadge: "NoSQL DB",
      };
    case "rest-apis":
      return {
        name: "RESTful APIs",
        brandColor: "#FF6C37",
        glowColor: "rgba(255, 108, 55, 0.25)",
        bgGradient: "from-orange-500/10 to-violet-500/10",
        borderTint: "group-hover:border-orange-300",
        roleBadge: "Architecture",
      };
    case "postman":
      return {
        name: "Postman",
        brandColor: "#FF6C37",
        glowColor: "rgba(255, 108, 55, 0.25)",
        bgGradient: "from-orange-500/10 to-red-500/10",
        borderTint: "group-hover:border-orange-300",
        roleBadge: "API Testing",
      };
    case "figma":
      return {
        name: "Figma",
        brandColor: "#F24E1E",
        glowColor: "rgba(242, 78, 30, 0.25)",
        bgGradient: "from-purple-500/10 to-rose-500/10",
        borderTint: "group-hover:border-purple-300",
        roleBadge: "UI/UX Design",
      };
    case "adobe-xd":
      return {
        name: "Adobe XD",
        brandColor: "#FF61F6",
        glowColor: "rgba(255, 97, 246, 0.25)",
        bgGradient: "from-pink-500/10 to-purple-500/10",
        borderTint: "group-hover:border-pink-300",
        roleBadge: "Prototyping",
      };
    case "canva":
      return {
        name: "Canva",
        brandColor: "#00C4CC",
        glowColor: "rgba(0, 196, 204, 0.25)",
        bgGradient: "from-teal-500/10 to-cyan-500/10",
        borderTint: "group-hover:border-teal-300",
        roleBadge: "Visual Assets",
      };
    case "visual-studio":
      return {
        name: "VS Code",
        brandColor: "#007ACC",
        glowColor: "rgba(0, 122, 204, 0.25)",
        bgGradient: "from-blue-500/10 to-sky-500/10",
        borderTint: "group-hover:border-blue-300",
        roleBadge: "IDE / Dev Tools",
      };
    case "ms-office":
      return {
        name: "Microsoft 365",
        brandColor: "#D83B01",
        glowColor: "rgba(216, 59, 1, 0.25)",
        bgGradient: "from-orange-500/10 to-red-500/10",
        borderTint: "group-hover:border-orange-300",
        roleBadge: "Productivity",
      };
    case "git":
      return {
        name: "Git & GitHub",
        brandColor: "#F05032",
        glowColor: "rgba(240, 80, 50, 0.25)",
        bgGradient: "from-red-500/10 to-orange-500/10",
        borderTint: "group-hover:border-red-300",
        roleBadge: "Version Control",
      };
    case "jira":
      return {
        name: "Jira",
        brandColor: "#0052CC",
        glowColor: "rgba(0, 82, 204, 0.25)",
        bgGradient: "from-blue-600/10 to-indigo-500/10",
        borderTint: "group-hover:border-blue-300",
        roleBadge: "Agile / Scrum",
      };
    case "trello":
      return {
        name: "Trello",
        brandColor: "#0079BF",
        glowColor: "rgba(0, 121, 191, 0.25)",
        bgGradient: "from-sky-500/10 to-blue-500/10",
        borderTint: "group-hover:border-sky-300",
        roleBadge: "Kanban",
      };
    case "ai":
      return {
        name: "Artificial Intelligence",
        brandColor: "#8B5CF6",
        glowColor: "rgba(139, 92, 246, 0.28)",
        bgGradient: "from-violet-500/10 to-purple-500/10",
        borderTint: "group-hover:border-violet-300",
        roleBadge: "AI & Innovation",
      };
    case "modern-web":
      return {
        name: "Modern Web",
        brandColor: "#6366F1",
        glowColor: "rgba(99, 102, 241, 0.28)",
        bgGradient: "from-indigo-500/10 to-cyan-500/10",
        borderTint: "group-hover:border-indigo-300",
        roleBadge: "Ecosystem",
      };
    case "responsive-dev":
      return {
        name: "Responsive Design",
        brandColor: "#06B6D4",
        glowColor: "rgba(6, 182, 212, 0.28)",
        bgGradient: "from-cyan-500/10 to-emerald-500/10",
        borderTint: "group-hover:border-cyan-300",
        roleBadge: "Cross-Device UI",
      };
    case "auth":
      return {
        name: "Authentication",
        brandColor: "#10B981",
        glowColor: "rgba(16, 185, 129, 0.28)",
        bgGradient: "from-emerald-500/10 to-teal-500/10",
        borderTint: "group-hover:border-emerald-300",
        roleBadge: "Cybersecurity",
      };
    case "db-integration":
      return {
        name: "DB Integration",
        brandColor: "#F59E0B",
        glowColor: "rgba(245, 158, 11, 0.28)",
        bgGradient: "from-amber-500/10 to-orange-500/10",
        borderTint: "group-hover:border-amber-300",
        roleBadge: "Data Pipelines",
      };
    default:
      return {
        name: "Technical Tool",
        brandColor: "#6B7280",
        glowColor: "rgba(107, 114, 128, 0.2)",
        bgGradient: "from-slate-500/10 to-gray-500/10",
        borderTint: "group-hover:border-slate-300",
        roleBadge: "Tech Stack",
      };
  }
}

export function BrandLogo({
  id,
  className = "w-6 h-6",
  size = 24,
}: BrandLogoProps) {
  switch (id) {
    case "java":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Java logo"
        >
          {/* Steam curves */}
          <path
            d="M17.5 13.5C17.5 13.5 14.5 17 19.5 20.5C24.5 24 23.5 27 21 29"
            stroke="#E76F00"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M24 10C24 10 20.5 14 26.5 18C32 21.5 30 26 27 28"
            stroke="#E76F00"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M30 14C30 14 28 17 31 19.5"
            stroke="#5382A1"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Coffee cup body */}
          <path
            d="M13 29C13 36.5 19 40 25 40C31 40 37 36.5 37 29H13Z"
            fill="#5382A1"
          />
          {/* Cup handle */}
          <path
            d="M34 30C37.5 30 40 32 40 34C40 36 37 37.5 34 37.5"
            stroke="#5382A1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Saucer */}
          <path
            d="M10 42C16 44 34 44 40 42"
            stroke="#E76F00"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case "python":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Python logo"
        >
          {/* Top Blue Snake */}
          <path
            d="M23.6 5C14.7 5 15.3 8.9 15.3 8.9L15.3 13H24.3V14.3H10.5C10.5 14.3 5 13.7 5 22.5C5 31.4 9.8 30.9 9.8 30.9H12.7V26.5C12.7 26.5 12.4 21.6 17.4 21.6H26.3C26.3 21.6 30.8 21.6 30.8 17.2V8.9C30.8 8.9 31.3 5 23.6 5ZM19.2 8.1C20.3 8.1 21.2 9 21.2 10.1C21.2 11.2 20.3 12.1 19.2 12.1C18.1 12.1 17.2 11.2 17.2 10.1C17.2 9 18.1 8.1 19.2 8.1Z"
            fill="#3776AB"
          />
          {/* Bottom Yellow Snake */}
          <path
            d="M24.4 43C33.3 43 32.7 39.1 32.7 39.1L32.7 35H23.7V33.7H37.5C37.5 33.7 43 34.3 43 25.5C43 16.6 38.2 17.1 38.2 17.1H35.3V21.5C35.3 21.5 35.6 26.4 30.6 26.4H21.7C21.7 26.4 17.2 26.4 17.2 30.8V39.1C17.2 39.1 16.7 43 24.4 43ZM28.8 39.9C27.7 39.9 26.8 39 26.8 37.9C26.8 36.8 27.7 35.9 28.8 35.9C29.9 35.9 30.8 36.8 30.8 37.9C30.8 39 29.9 39.9 28.8 39.9Z"
            fill="#FFD43B"
          />
        </svg>
      );

    case "cpp":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="C++ logo"
        >
          {/* Blue Hexagon */}
          <polygon
            points="24,4 42,14.5 42,33.5 24,44 6,33.5 6,14.5"
            fill="#00599C"
          />
          <polygon
            points="24,7 39,16 39,32 24,41 9,32 9,16"
            fill="#004482"
          />
          {/* C Letter */}
          <path
            d="M23 18C19 18 16 21 16 24C16 27 19 30 23 30C25 30 26.5 29.2 27.5 28L25.5 25.8C24.9 26.5 24 27 23 27C21.2 27 19.8 25.6 19.8 24C19.8 22.4 21.2 21 23 21C24 21 24.9 21.5 25.5 22.2L27.5 20C26.5 18.8 25 18 23 18Z"
            fill="#FFFFFF"
          />
          {/* ++ Plus signs */}
          <path
            d="M29 23H31V21H32.5V23H34.5V24.5H32.5V26.5H31V24.5H29V23Z"
            fill="#FFFFFF"
          />
          <path
            d="M34.5 23H36.5V21H38V23H40V24.5H38V26.5H36.5V24.5H34.5V23Z"
            fill="#659AD2"
          />
        </svg>
      );

    case "html":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="HTML5 logo"
        >
          {/* Shield Base */}
          <polygon points="7,4 10.5,39 24,43 37.5,39 41,4" fill="#E34F26" />
          <polygon points="24,7 24,40 34.5,36.5 37.5,7" fill="#EF652A" />
          {/* 5 Graphic */}
          <path
            d="M15 13H33L32.2 18H20.6L21.1 23H31.7L30.6 33.5L24 35.3L17.4 33.5L17 28.5H21.5L21.7 30.6L24 31.2L26.3 30.6L26.6 27H14.5L15 13Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "css":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="CSS3 logo"
        >
          {/* Shield Base */}
          <polygon points="7,4 10.5,39 24,43 37.5,39 41,4" fill="#1572B6" />
          <polygon points="24,7 24,40 34.5,36.5 37.5,7" fill="#33A9DC" />
          {/* 3 Graphic */}
          <path
            d="M15 13H33L32.4 18H23.5L24 23H32L30.6 33.5L24 35.3L17.4 33.5L17 28.5H21.5L21.7 30.6L24 31.2L26.3 30.6L26.7 27H16.2L15 13Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "tailwind":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Tailwind CSS logo"
        >
          <rect width="48" height="48" rx="10" fill="#0F172A" />
          <path
            d="M24 16C21.6 12 18.4 10.5 14.4 11.5C9.4 12.75 7.5 17.5 9.5 22.5C11 26.25 14.25 28 19.25 27.75C22.25 27.6 24.5 25.5 26 23.5C28.4 27.5 31.6 29 35.6 28C40.6 26.75 42.5 22 40.5 17C39 13.25 35.75 11.5 30.75 11.75C27.75 11.9 25.5 14 24 16ZM11.5 27C9.1 23 12.3 21.5 16.3 22.5C21.3 23.75 23.2 28.5 21.2 33.5C19.7 37.25 16.45 39 11.45 38.75C8.45 38.6 6.2 36.5 4.7 34.5C7.1 38.5 10.3 40 14.3 39C19.3 37.75 21.2 33 19.2 28C17.7 24.25 14.45 22.5 9.45 22.75C6.45 22.9 8.7 25 11.5 27Z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "javascript":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="JavaScript logo"
        >
          <rect width="48" height="48" rx="8" fill="#F7DF1E" />
          <path
            d="M13 35.5C14.2 37.2 16.2 38 18.5 38C21.5 38 23.5 36.2 23.5 33V20H18.8V33C18.8 34.2 18 34.8 17 34.8C16 34.8 15.2 34.2 14.6 33.2L13 35.5ZM28.5 35.8C30.2 37.2 32.5 38 35 38C38.8 38 41 36 41 33.2C41 30.5 39.2 29.2 36 28L34.5 27.4C32.8 26.7 32 26 32 24.8C32 23.5 33.2 22.5 35 22.5C36.8 22.5 38.2 23.3 39.2 24.5L41.2 21.8C39.5 20.2 37.5 19.5 35 19.5C31.5 19.5 29 21.5 29 24.8C29 27.5 30.8 28.8 33.8 30L35.2 30.6C37.2 31.4 38 32.2 38 33.5C38 34.8 36.8 35.8 35 35.8C32.8 35.8 31 34.8 29.8 33.2L28.5 35.8Z"
            fill="#000000"
          />
        </svg>
      );

    case "typescript":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="TypeScript logo"
        >
          <rect width="48" height="48" rx="8" fill="#3178C6" />
          <path
            d="M11 20H25V24H19.5V36H16.5V24H11V20ZM26 33.5C27.5 34.8 29.5 35.5 31.5 35.5C34.2 35.5 35.8 34.2 35.8 32.2C35.8 30.2 34.2 29.2 31.8 28.2L30.5 27.6C28.8 26.8 27.8 25.8 27.8 24C27.8 21.8 29.8 20.2 32.2 20.2C34.2 20.2 35.8 21 37 22.2L35.2 24.5C34.2 23.5 33.2 23 32.2 23C31 23 30.2 23.8 30.2 24.8C30.2 25.8 31 26.5 32.5 27.2L33.8 27.8C36 28.8 37.8 30 37.8 32.5C37.8 35.2 35.2 37 31.8 37C29.2 37 27 36 25.2 34.2L26 33.5Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "react":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="React logo"
        >
          {/* Central Nucleus */}
          <circle cx="24" cy="24" r="4" fill="#61DAFB" />
          {/* Orbital Rings */}
          <ellipse
            cx="24"
            cy="24"
            rx="7"
            ry="18"
            stroke="#61DAFB"
            strokeWidth="2"
            transform="rotate(30 24 24)"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="7"
            ry="18"
            stroke="#61DAFB"
            strokeWidth="2"
            transform="rotate(90 24 24)"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="7"
            ry="18"
            stroke="#61DAFB"
            strokeWidth="2"
            transform="rotate(150 24 24)"
          />
        </svg>
      );

    case "nextjs":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Next.js logo"
        >
          <circle cx="24" cy="24" r="21" fill="#000000" />
          <path
            d="M17 14V34H20.5V23.5L31.5 34H34V14H30.5V24.5L19.5 14H17Z"
            fill="#FFFFFF"
          />
          <path
            d="M29 25L34 32.5V34H33L28 26.5L29 25Z"
            fill="url(#next_grad)"
          />
          <defs>
            <linearGradient id="next_grad" x1="28" y1="25" x2="34" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "nodejs":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Node.js logo"
        >
          {/* Hexagon Base */}
          <path
            d="M24 4L42 14.5V35.5L24 46L6 35.5V14.5L24 4Z"
            fill="#339933"
          />
          {/* Isometric Inner Box */}
          <path
            d="M24 9L38 17V33L24 41L10 33V17L24 9Z"
            fill="#539E43"
          />
          <path
            d="M24 9V25L38 33V17L24 9Z"
            fill="#83CD29"
            fillOpacity="0.4"
          />
          <path
            d="M24 25L10 17V33L24 41V25Z"
            fill="#215732"
            fillOpacity="0.25"
          />
        </svg>
      );

    case "wordpress":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="WordPress logo"
        >
          <circle cx="24" cy="24" r="21" fill="#21759B" />
          <path
            d="M7.5 24C7.5 31.2 12.3 37.3 18.8 39.5L10.8 17.5C8.7 19.4 7.5 21.6 7.5 24ZM33.5 23C33.5 20.6 32.7 19 32 17.6C31 15.9 30.1 14.6 30.1 12.8C30.1 10.8 31.5 9 33.7 9C33.8 9 34 9 34.2 9C31.4 6.5 27.9 5 24 5C18.8 5 14.2 7.7 11.6 11.8C12 11.8 12.5 12 13 12C15.4 12 19 11.6 19 11.6C20.2 11.6 20.4 13.4 19.2 13.6C19.2 13.6 17.9 13.8 16.6 13.8L25 38.8L30 23.8L26.4 13.8C25.2 13.8 24 13.6 24 13.6C22.8 13.4 23 11.6 24.2 11.6C24.2 11.6 27.8 12 30 12C32.4 12 36 11.6 36 11.6C37.2 11.6 37.4 13.4 36.2 13.6C36.2 13.6 35 13.8 33.6 13.8L41.8 38.2C44.4 34.2 46 29.3 46 24C46 20.5 45 17.2 43.2 14.4C41.2 20.2 37.5 23 33.5 23Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "mysql":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="MySQL logo"
        >
          {/* Ocean Blue Waves */}
          <rect width="48" height="48" rx="10" fill="#00758F" />
          {/* Jumping Dolphin Motif */}
          <path
            d="M36 16C33 13 28 12 24 14C20 16 17 20 15 25C13.5 29 11 31 8 32C12 34 17 33 21 30C25 27 28 23 32 20C34 18 36.5 17 36 16Z"
            fill="#FFFFFF"
          />
          {/* Gold Fin Wave */}
          <path
            d="M14 36C20 34 26 34 32 37C34 35 37 33 40 33C37 37 32 39 26 39C20 39 16 37 14 36Z"
            fill="#F29111"
          />
          {/* Dolphin Eye */}
          <circle cx="31" cy="18" r="1.5" fill="#00758F" />
        </svg>
      );

    case "mongodb":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="MongoDB logo"
        >
          {/* Leaf Shape - Right half */}
          <path
            d="M24 4C23 6 12 17 12 27C12 33.5 17.5 40 24 42V4Z"
            fill="#47A248"
          />
          {/* Leaf Shape - Left half lighter */}
          <path
            d="M24 4C25 6 36 17 36 27C36 33.5 30.5 40 24 42V4Z"
            fill="#499D4A"
          />
          {/* Center Vein */}
          <path
            d="M24 7C24.5 12 25.5 25 24 41"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "rest-apis":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="RESTful APIs logo"
        >
          {/* Gradient Container */}
          <rect width="48" height="48" rx="10" fill="#1E1E2E" />
          {/* API Server Node */}
          <circle cx="24" cy="24" r="8" fill="#FF6C37" />
          <circle cx="24" cy="24" r="4" fill="#FFFFFF" />
          {/* Connected Peripheral Endpoints */}
          <circle cx="10" cy="14" r="4" fill="#8B5CF6" />
          <circle cx="38" cy="14" r="4" fill="#38BDF8" />
          <circle cx="10" cy="34" r="4" fill="#10B981" />
          <circle cx="38" cy="34" r="4" fill="#F59E0B" />
          {/* Connecting Conduit Lines */}
          <line x1="14" y1="16" x2="19" y2="20" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="34" y1="16" x2="29" y2="20" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="14" y1="32" x2="19" y2="28" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="34" y1="32" x2="29" y2="28" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      );

    case "postman":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Postman logo"
        >
          <circle cx="24" cy="24" r="21" fill="#FF6C37" />
          {/* Rocket Astronaut Silhouette */}
          <path
            d="M24 10C27 13 32 18 34 22L30 25L26 21L21 26L24 29L20 33C17 31 13 25 10 23L16 17L18 19L24 10Z"
            fill="#FFFFFF"
          />
          <circle cx="29" cy="16" r="2" fill="#FF6C37" />
          <path
            d="M17 31L13 35L15 37L19 33"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "git":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Git logo"
        >
          {/* Rotated Diamond */}
          <rect
            x="24"
            y="4"
            width="28"
            height="28"
            rx="5"
            transform="rotate(45 24 4)"
            fill="#F05032"
          />
          {/* Branch Lines and Commit Nodes */}
          <circle cx="24" cy="18" r="3" fill="#FFFFFF" />
          <circle cx="24" cy="30" r="3" fill="#FFFFFF" />
          <circle cx="30" cy="24" r="3" fill="#FFFFFF" />
          <line x1="24" y1="21" x2="24" y2="27" stroke="#FFFFFF" strokeWidth="2.5" />
          <path
            d="M24 21C24 23 27 23 30 24"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      );

    case "figma":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Figma logo"
        >
          {/* Top Left: Orange */}
          <path d="M16 4H24V14H16C13.2 14 11 11.8 11 9C11 6.2 13.2 4 16 4Z" fill="#F24E1E" />
          {/* Top Right: Coral */}
          <path d="M24 4H32C34.8 4 37 6.2 37 9C37 11.8 34.8 14 32 14H24V4Z" fill="#FF7262" />
          {/* Middle Left: Violet */}
          <path d="M16 14H24V24H16C13.2 24 11 21.8 11 19C11 16.2 13.2 14 16 14Z" fill="#A259FF" />
          {/* Middle Right: Cyan Circle */}
          <circle cx="29" cy="19" r="5" fill="#1ABCFE" />
          {/* Bottom Left: Green Teardrop */}
          <path d="M16 24H24V34C24 36.8 21.8 39 19 39C16.2 39 14 36.8 14 34C14 31.2 16 29 16 24Z" fill="#0ACF83" />
        </svg>
      );

    case "adobe-xd":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Adobe XD logo"
        >
          <rect width="48" height="48" rx="10" fill="#470137" />
          <path
            d="M12 34L18.5 14H22L28.5 34H24.8L23.6 29.5H16.8L15.6 34H12ZM17.8 26H22.6L20.2 17.5L17.8 26Z"
            fill="#FF61F6"
          />
          <path
            d="M30 14H35.5C39 14 42 17 42 20.5V27.5C42 31 39 34 35.5 34H30V14ZM33.5 30.5H35.5C37.5 30.5 39 29 39 27V21C39 19 37.5 17.5 35.5 17.5H33.5V30.5Z"
            fill="#FF61F6"
          />
        </svg>
      );

    case "canva":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Canva logo"
        >
          <circle cx="24" cy="24" r="21" fill="#00C4CC" />
          <path
            d="M24 12C17.5 12 13 16.5 13 23C13 30 18.5 36 26 36C31 36 34.5 33.5 36 31.5L33.5 29C32.2 30.5 29.8 32.5 26.2 32.5C20.8 32.5 17.2 28.2 17.2 23C17.2 18.2 20.5 15.5 24.8 15.5C28.2 15.5 30.5 17.2 31.8 18.8L34.2 16.5C32.5 14 28.8 12 24 12Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "visual-studio":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Visual Studio Code logo"
        >
          {/* Blue Ribbon Geometry */}
          <path
            d="M35 5L43 10V38L35 43L18 28L35 5Z"
            fill="#007ACC"
          />
          <path
            d="M35 5L18 20L9 13L5 16L14 24L5 32L9 35L18 28L35 43V5Z"
            fill="#0066B8"
            fillOpacity="0.85"
          />
          <path
            d="M35 5L43 10V38L35 43V5Z"
            fill="#1F9CF0"
          />
        </svg>
      );

    case "ms-office":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Microsoft Office logo"
        >
          <rect width="48" height="48" rx="10" fill="#D83B01" />
          {/* Modern 3D Facets */}
          <path d="M12 12H24V24H12V12Z" fill="#FFFFFF" fillOpacity="0.85" />
          <path d="M26 12H36V24H26V12Z" fill="#FFFFFF" fillOpacity="0.65" />
          <path d="M12 26H24V36H12V26Z" fill="#FFFFFF" fillOpacity="0.75" />
          <path d="M26 26H36V36H26V26Z" fill="#FFFFFF" fillOpacity="0.95" />
        </svg>
      );

    case "jira":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Jira logo"
        >
          <rect width="48" height="48" rx="10" fill="#0052CC" />
          <path
            d="M24 8C29 8 33 12 33 17V20H24C19 20 15 16 15 11C15 9.3 15.5 8 24 8Z"
            fill="#2684FF"
          />
          <path
            d="M24 20C29 20 33 24 33 29V32H24C19 32 15 28 15 23C15 21.3 15.5 20 24 20Z"
            fill="#FFFFFF"
          />
          <path
            d="M24 32C29 32 33 36 33 41V42H24C19 42 15 38 15 33V32H24Z"
            fill="#2684FF"
          />
        </svg>
      );

    case "trello":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Trello logo"
        >
          <rect width="48" height="48" rx="10" fill="#0079BF" />
          {/* Left Column (Longer) */}
          <rect x="10" y="10" width="12" height="24" rx="3" fill="#FFFFFF" />
          {/* Right Column (Shorter) */}
          <rect x="26" y="10" width="12" height="15" rx="3" fill="#FFFFFF" />
        </svg>
      );

    case "ai":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Artificial Intelligence logo"
        >
          {/* Deep Violet AI Chip Carrier */}
          <rect width="48" height="48" rx="12" fill="#18112C" />
          {/* Circuit Trace Pins */}
          <path d="M12 4V9M24 4V9M36 4V9" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 39V44M24 39V44M36 39V44" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12H9M4 24H9M4 36H9" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
          <path d="M39 12H44M39 24H44M39 36H44" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
          {/* Center Glowing Silicon Die */}
          <rect x="12" y="12" width="24" height="24" rx="6" fill="#2E1065" stroke="#8B5CF6" strokeWidth="2" />
          {/* Glowing Neural Spark / Star */}
          <path
            d="M24 16C24 20 28 24 32 24C28 24 24 28 24 32C24 28 20 24 16 24C20 24 24 20 24 16Z"
            fill="url(#ai_spark)"
          />
          <circle cx="24" cy="24" r="2.5" fill="#FFFFFF" />
          <defs>
            <linearGradient id="ai_spark" x1="16" y1="16" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C084FC" />
              <stop offset="0.5" stopColor="#818CF8" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "modern-web":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Modern Web logo"
        >
          {/* Globe & Cloud Nexus */}
          <circle cx="24" cy="24" r="20" fill="#0F172A" />
          {/* Latitude & Longitude Orbits */}
          <circle cx="24" cy="24" r="15" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
          <ellipse cx="24" cy="24" rx="8" ry="15" stroke="#818CF8" strokeWidth="1.5" />
          <line x1="9" y1="24" x2="39" y2="24" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.6" />
          {/* Browser Code Chevron */}
          <path d="M19 21L15 24L19 27" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 21L33 24L29 27" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
        </svg>
      );

    case "responsive-dev":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Responsive Web Development logo"
        >
          {/* Multi-Screen Triad */}
          <rect width="48" height="48" rx="10" fill="#0C4A6E" />
          {/* Desktop Monitor Screen */}
          <rect x="6" y="8" width="28" height="20" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
          <rect x="9" y="11" width="22" height="14" rx="1.5" fill="#E0F2FE" />
          {/* Monitor Stand */}
          <path d="M17 28L15 33H25L23 28" fill="#0369A1" />
          {/* Smartphone (Overlaid on bottom right) */}
          <rect x="28" y="18" width="14" height="24" rx="3.5" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.8" />
          <rect x="30" y="21" width="10" height="17" rx="1.5" fill="#38BDF8" fillOpacity="0.35" />
          <circle cx="35" cy="40" r="1" fill="#FFFFFF" />
        </svg>
      );

    case "auth":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Authentication logo"
        >
          {/* Cyber Fortress Shield */}
          <polygon points="24,4 40,11 40,25 24,43 8,25 8,11" fill="#064E3B" />
          <polygon points="24,7 37,13 37,24 24,39 11,24 11,13" fill="#059669" />
          {/* Glowing Padlock */}
          <rect x="18" y="23" width="12" height="9" rx="2" fill="#FFFFFF" />
          <path
            d="M20 23V19C20 16.8 21.8 15 24 15C26.2 15 28 16.8 28 19V23"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="24" cy="27" r="1.5" fill="#059669" />
        </svg>
      );

    case "db-integration":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Database Integration logo"
        >
          {/* Dark Carrier */}
          <rect width="48" height="48" rx="10" fill="#451A03" />
          {/* Top Database Cylinder */}
          <ellipse cx="24" cy="12" rx="14" ry="4.5" fill="#F59E0B" />
          <path
            d="M10 12V21C10 23.5 16.3 25.5 24 25.5C31.7 25.5 38 23.5 38 21V12"
            fill="#D97706"
          />
          <ellipse cx="24" cy="21" rx="14" ry="4.5" fill="#F59E0B" />
          {/* Bottom Database Cylinder */}
          <path
            d="M10 24V33C10 35.5 16.3 37.5 24 37.5C31.7 37.5 38 35.5 38 33V24"
            fill="#B45309"
          />
          <ellipse cx="24" cy="33" rx="14" ry="4.5" fill="#FBBF24" />
          {/* Query Stream Spark */}
          <path
            d="M20 27L24 21L28 27"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Technology icon"
        >
          <rect width="48" height="48" rx="10" fill="#1E293B" />
          <circle cx="24" cy="24" r="8" stroke="#38BDF8" strokeWidth="2.5" />
          <path
            d="M24 10V14M24 34V38M10 24H14M34 24H38M14 14L17 17M31 31L34 34M14 34L17 31M31 17L34 14"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
