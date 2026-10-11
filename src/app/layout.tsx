import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/scroll";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#F4F2EE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thasikaragupathy.github.io/Portfolio"),
  title: "Thasika Ragupathy | Full-Stack Developer",
  description:
    "Portfolio of Thasika Ragupathy — Information Technology undergraduate, full-stack developer, and UI/UX designer. Building responsive web applications, modern interfaces, and exploring emerging technologies.",
  keywords: [
    "Thasika Ragupathy",
    "Full-Stack Developer",
    "Web Developer",
    "UI/UX Designer",
    "University of Vavuniya",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Thasika Ragupathy", url: "https://github.com/ThasikaRagupathy" }],
  creator: "Thasika Ragupathy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thasikaragupathy.github.io/Portfolio",
    title: "Thasika Ragupathy | Full-Stack Developer",
    description:
      "Information Technology undergraduate and full-stack developer with hands-on experience designing and developing responsive, user-focused web applications.",
    siteName: "Thasika Ragupathy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thasika Ragupathy | Full-Stack Developer",
    description:
      "Information Technology undergraduate and full-stack developer. Building digital experiences with code, creativity, and curiosity.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#F4F2EE] text-[#0D0D0D] antialiased selection:bg-[#0D0D0D] selection:text-[#F4F2EE] min-h-screen">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
