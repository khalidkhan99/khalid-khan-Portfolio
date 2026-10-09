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
    default: "Khalid Khan | Full-Stack & Web Developer",
    template: "%s | Khalid Khan",
  },
  description:
    "Khalid Khan — Full-Stack & Web Developer from Pakistan. Building modern e-commerce stores, web applications, and developer tools with Next.js, React, and TypeScript.",
  keywords: [
    "Khalid Khan",
    "Khalid Khan Portfolio",
    "Khalid Khan Full-Stack Developer",
    "Khalid Khan Web Developer",
    "Khalid Khan Pakistan",
    "khalidkhan99",
    "Next.js Developer Pakistan",
    "React Developer Pakistan",
    "E-Commerce Developer",
    "Fashionstyle E-Commerce",
    "AllTools Online",
    "Full-Stack Web Developer",
    "WordPress Developer Pakistan",
    "TypeScript Developer",
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
    title: "Khalid Khan | Full-Stack & Web Developer",
    description:
      "Khalid Khan — Full-Stack & Web Developer from Pakistan. Building modern e-commerce stores, web applications, and developer tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Khan | Full-Stack & Web Developer",
    description:
      "Khalid Khan — Full-Stack & Web Developer from Pakistan. Building modern e-commerce stores, web applications, and developer tools.",
    creator: "@khalidkhan99012",
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=4", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=4", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png?v=4", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico?v=4", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=4", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png?v=4",
  },
  manifest: "/site.webmanifest?v=4",
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
      jobTitle: "Full-Stack & Web Developer",
      description:
        "Full-Stack & Web Developer from Pakistan building e-commerce platforms, web applications, and developer tools.",
      nationality: "Pakistani",
      sameAs: [
        "https://github.com/khalidkhan99",
        "https://www.linkedin.com/in/khalid-khan-dev",
        "https://wa.me/923352649604",
        "https://www.facebook.com/profile.php?id=61592632241241",
        "https://www.instagram.com/khalid.dev99/",
        "https://x.com/khalidkhan99012",
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "E-Commerce Development",
        "Stripe Payments",
        "Supabase",
        "Clerk Authentication",
        "Tailwind CSS",
        "Python",
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=4" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=4" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=4" />
        <link rel="shortcut icon" type="image/png" href="/favicon-32x32.png?v=4" />
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <link rel="manifest" href="/site.webmanifest?v=4" />
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
