import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { FloatingResume } from "@/app/components/floating-resume";
import { Footer } from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import { ThemeProvider } from "@/app/components/theme-provider";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const BASE_URL = "https://khalid-khan-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Khalid Khan | AI Developer & Portfolio",
    template: "%s | Khalid Khan",
  },
  description:
    "Khalid Khan — Student & AI Developer from Pakistan. Building AI chatbots, content generators, and web apps. View my portfolio, projects, and skills.",
  keywords: [
    "Khalid Khan",
    "Khalid Khan Portfolio",
    "Khalid Khan AI Developer",
    "Khalid Khan Pakistan",
    "khalidkhan99",
    "AI Developer Pakistan",
    "AI Chatbot Developer",
    "Next.js Developer Pakistan",
    "Python AI Developer",
    "Student AI Developer",
    "LLM Developer",
    "WordPress Developer Pakistan",
    "Khalid Khan Developer",
    "khalid portfolio",
    "khalid khan web developer",
  ],
  authors: [{ name: "Khalid Khan", url: BASE_URL }],
  creator: "Khalid Khan",
  publisher: "Khalid Khan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Khalid Khan Portfolio",
    title: "Khalid Khan | AI Developer & Portfolio",
    description:
      "Khalid Khan — Student & AI Developer from Pakistan. Building AI chatbots, content generators, and web apps. View my portfolio, projects, and skills.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Khan | AI Developer & Portfolio",
    description:
      "Khalid Khan — Student & AI Developer from Pakistan. Building AI chatbots, content generators, and web apps.",
    creator: "@khalidkhan",
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
};

// JSON-LD Structured Data — Google ko batata hai tum real person ho
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Khalid Khan",
      url: BASE_URL,
      jobTitle: "AI Developer & Student",
      description:
        "Student & AI Developer from Pakistan building chatbots, content generators, and web applications.",
      nationality: "Pakistani",
      sameAs: [
        "https://github.com/khalidkhan99",
        "https://linkedin.com/in/khalidkhan",
        "https://x.com/khalidkhan",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Python",
        "Next.js",
        "React",
        "LLM",
        "Chatbot Development",
        "Web Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Khalid Khan Portfolio",
      description: "Portfolio of Khalid Khan — AI Developer & Student from Pakistan",
      author: { "@id": `${BASE_URL}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FloatingResume />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
