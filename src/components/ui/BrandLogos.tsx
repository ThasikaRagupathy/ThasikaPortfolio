import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ id, className = "w-6 h-6", size = 24 }: { id: string; className?: string; size?: number }) {
  switch (id) {
    case "java":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 16.5c2.5 1 5.5 1 8 0 0 0-1 1-4 1s-4-1-4-1z" fill="#E76F00" />
          <path d="M6 19c3 1.2 7 1.2 10 0 0 0-1.5 1.2-5 1.2s-5-1.2-5-1.2z" fill="#E76F00" />
          <path d="M12 2c-1.5 2-2 3.5-1 5.5.8 1.6 1.2 2.5 0 4.5 2-1 2.5-3 1.5-5-.8-1.6-.7-2.8-.5-5z" fill="#5382A1" />
          <path d="M15 4c-1 1.5-1.5 2.5-.7 4 .6 1.2.9 1.9 0 3.5 1.5-.8 1.9-2.3 1.1-3.8-.6-1.2-.5-2.2-.4-3.7z" fill="#E76F00" />
        </svg>
      );
    case "python":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.01 1.4h3v.4H6.3s-1.8.2-1.8 2.6.8 2.7.8 2.7h1.1v-1.4s-.1-1.6 1.6-1.6h5.4s1.5 0 1.5-1.5V4.4s.2-2.4-3-2.4zm-1.7 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z" fill="#3776AB" />
          <path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.01-1.4h-3v-.4h5.7s1.8-.2 1.8-2.6-.8-2.7-.8-2.7h-1.1v1.4s.1 1.6-1.6 1.6h-5.4s-1.5 0-1.5 1.5v1.1s-.2 2.4 3 2.4zm1.7-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" fill="#FFD43B" />
        </svg>
      );
    case "cpp":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M11.5 3.5L3.5 8.1v9.2l8 4.6 8-4.6V8.1l-8-4.6z" stroke="#00599C" strokeWidth="1.5" fill="#00599C" fillOpacity="0.1" />
          <path d="M12 8a4 4 0 1 0 3.8 5.2h-1.8a2.3 2.3 0 1 1-.3-1.6h2.1A4 4 0 0 0 12 8z" fill="#00599C" />
          <path d="M17 11v2m-1-1h2m3-1v2m-1-1h2" stroke="#004482" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "html":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 2.5l1.5 16.5 6.5 1.8 6.5-1.8L20 2.5H4z" fill="#E34F26" />
          <path d="M12 4v15.2l5.2-1.4 1.2-13.8H12z" fill="#EF652A" />
          <path d="M8.2 6.5h7.6l-.2 2.2H8.4l.2 2.3h7.1l-.6 6.3-3.1.9-3.1-.9-.2-2.3H6.8l.3 3.9 4.9 1.4 4.9-1.4 1-10.2H8.1l.1-2.2z" fill="#FFFFFF" />
        </svg>
      );
    case "css":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 2.5l1.5 16.5 6.5 1.8 6.5-1.8L20 2.5H4z" fill="#1572B6" />
          <path d="M12 4v15.2l5.2-1.4 1.2-13.8H12z" fill="#33A9DC" />
          <path d="M8.2 6.5h7.6l-.2 2.2H8.4l.2 2.3h7.1l-.6 6.3-3.1.9-3.1-.9-.2-2.3H6.8l.3 3.9 4.9 1.4 4.9-1.4 1-10.2H8.1l.1-2.2z" fill="#FFFFFF" />
        </svg>
      );
    case "javascript":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M6 17.5c.5.8 1.2 1.3 2.2 1.3 1.2 0 1.9-.6 1.9-1.8v-6.5H8.7v6.4c0 .5-.2.7-.6.7-.4 0-.6-.2-.8-.6L6 17.5zm8.5.1c.7.5 1.5.8 2.4.8 1.3 0 2.1-.7 2.1-1.7 0-1-.6-1.5-1.8-2l-.6-.3c-.8-.3-1.2-.7-1.2-1.4 0-.8.7-1.4 1.8-1.4.7 0 1.3.2 1.8.6l.6-1.2c-.6-.4-1.4-.6-2.4-.6-1.9 0-3.1 1.1-3.1 2.6 0 1.2.7 1.8 1.8 2.2l.6.3c.9.4 1.3.7 1.3 1.5 0 .8-.8 1.3-1.9 1.3-.9 0-1.7-.4-2.2-.9l-.7 1.2z" fill="#000000" />
        </svg>
      );
    case "react":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );
    case "nextjs":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#0D0D0D" />
          <path d="M8.5 7.5v9h2v-5.2l6.2 5.2h1.8v-9h-2v5.2L10.3 7.5H8.5z" fill="#FFFFFF" />
        </svg>
      );
    case "nodejs":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l8.7 5v10L12 22l-8.7-5V7L12 2z" fill="#339933" />
          <path d="M12 4.2L5.2 8.1v7.8L12 19.8l6.8-3.9V8.1L12 4.2z" fill="#FFFFFF" fillOpacity="0.2" />
          <path d="M12 6.8c1.8 0 3.2 1.4 3.2 3.2v4c0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2v-4c0-1.8 1.4-3.2 3.2-3.2z" stroke="#FFFFFF" strokeWidth="1.4" />
        </svg>
      );
    case "wordpress":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#21759B" />
          <path d="M3.5 12c0 3.7 2.4 6.8 5.7 7.9L5.3 9.4C4.2 10.1 3.5 11 3.5 12zm13.3-.6c0-1.2-.4-2-0.8-2.7-.5-.8-1-1.5-1-2.4 0-1 .7-1.9 1.8-1.9.1 0 .1 0 .2 0-1.4-1.3-3.2-2.1-5.2-2.1-2.6 0-4.9 1.4-6.2 3.4.2 0 .5.1.7.1 1.2 0 3-.2 3-.2.6 0 .7.9.1 1 0 0-.6.1-1.3.1l4.2 12.5 2.5-7.5-1.8-4.9c-.6 0-1.2-.1-1.2-.1-.6 0-.6-1 0-1 0 0 1.9.2 3 .2 1.2 0 3-.2 3-.2.6 0 .7.9.1 1 0 0-.6.1-1.3.1l4.1 12.2c1.9-1.5 3.1-3.8 3.1-6.4 0-1.3-.3-2.6-.9-3.7z" fill="#FFFFFF" />
        </svg>
      );
    case "mysql":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3C7 3 3 5.2 3 8v8c0 2.8 4 5 9 5s9-2.2 9-5V8c0-2.8-4-5-9-5z" fill="#00758F" />
          <path d="M12 5.5c4 0 7 1.5 7 3s-3 3-7 3-7-1.5-7-3 3-3 7-3z" fill="#F29111" />
          <ellipse cx="12" cy="12.5" rx="7" ry="2.2" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="3 3" />
        </svg>
      );
    case "mongodb":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2C11.5 3 6 8.5 6 13.5c0 3.3 2.7 6.5 6 7.5 3.3-1 6-4.2 6-7.5C18 8.5 12.5 3 12 2z" fill="#47A248" />
          <path d="M12 2v19c.1 0 .2 0 .3-.1 3.1-.9 5.5-4 5.5-7.1 0-4.8-4.9-9.9-5.8-11.8z" fill="#499D4A" />
          <path d="M12 2c-.9 1.9-5.8 7-5.8 11.8 0 3.1 2.4 6.2 5.5 7.1.1 0 .2.1.3.1V2z" fill="#3FA037" />
        </svg>
      );
    case "rest-apis":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="5" width="20" height="14" rx="3" stroke="#FF6C37" strokeWidth="1.8" />
          <path d="M7 12h10M13 8l4 4-4 4" stroke="#FF6C37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "figma":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
          <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
          <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
          <circle cx="14.5" cy="9.5" r="2.5" fill="#1ABCFE" />
          <path d="M8 12h4v5a2.5 2.5 0 1 1-4-2.2V12z" fill="#0ACF83" />
        </svg>
      );
    case "adobe-xd":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#470137" />
          <path d="M6 17l3.2-10h1.8L14 17h-1.8l-.6-2.2H8.8L8.2 17H6zm3.3-3.8h2.3l-1.1-3.8h-.1l-1.1 3.8z" fill="#FF61F6" />
          <path d="M15 7h2.8c1.8 0 3.2 1.4 3.2 3.2v3.6c0 1.8-1.4 3.2-3.2 3.2H15V7zm1.7 8.3h1c.9 0 1.6-.7 1.6-1.6v-3.4c0-.9-.7-1.6-1.6-1.6h-1v6.6z" fill="#FF61F6" />
        </svg>
      );
    case "canva":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#00C4CC" />
          <path d="M12 6c-3.3 0-5.5 2.3-5.5 5.5 0 3.5 2.7 6.5 6.5 6.5 2.5 0 4.2-1.2 5-2.2l-1.3-1.1c-.6.8-1.9 1.6-3.7 1.6-2.7 0-4.6-2.1-4.6-4.8 0-2.4 1.7-4 3.8-4 1.8 0 2.9.9 3.5 1.7l1.3-1.2C16.1 7.1 14.3 6 12 6z" fill="#FFFFFF" />
        </svg>
      );
    case "visual-studio":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M17.5 2.5l4 2.5v14l-4 2.5-8.5-7.5 8.5-11.5z" fill="#007ACC" />
          <path d="M17.5 2.5L9 10 4.5 6.5 2.5 8l4.5 4-4.5 4 2 1.5 4.5-3.5 8.5 7.5V2.5z" fill="#0066B8" opacity="0.8" />
          <path d="M17.5 2.5L21.5 5v14l-4 2.5V2.5z" fill="#1F9CF0" />
        </svg>
      );
    case "ms-office":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#D83B01" />
          <path d="M7 6.5h10v11H7z" fill="#FFFFFF" opacity="0.3" />
          <path d="M9 8.5h6v7H9z" fill="#FFFFFF" />
        </svg>
      );
    case "jira":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M11.5 2.5a4.5 4.5 0 0 0-4.5 4.5v1.5h4.5a4.5 4.5 0 0 0 4.5-4.5V2.5h-4.5z" fill="#0052CC" />
          <path d="M11.5 8.5a4.5 4.5 0 0 0-4.5 4.5v1.5h4.5a4.5 4.5 0 0 0 4.5-4.5V8.5h-4.5z" fill="#2684FF" />
          <path d="M11.5 14.5a4.5 4.5 0 0 0-4.5 4.5V21h4.5a4.5 4.5 0 0 0 4.5-4.5v-2h-4.5z" fill="#0052CC" />
        </svg>
      );
    case "trello":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#0079BF" />
          <rect x="4.5" y="4.5" width="6.5" height="11.5" rx="1.5" fill="#FFFFFF" />
          <rect x="13" y="4.5" width="6.5" height="7.5" rx="1.5" fill="#FFFFFF" />
        </svg>
      );
    default:
      // Fallback tech concept icon
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
  }
}
