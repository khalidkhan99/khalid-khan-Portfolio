import type { Metadata } from "next";
import { Contact } from "@/app/components/contact";
import { ContactFaq } from "@/app/components/contact-extra";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Khalid Khan — AI Developer from Pakistan. Available for freelance AI and web development projects.",
  keywords: ["Contact Khalid Khan", "Hire AI Developer Pakistan", "Khalid Khan Freelance"],
  alternates: {
    canonical: "https://khalid-khan-portfolio.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Khalid Khan AI Developer",
    description: "Hire Khalid Khan for AI and web development projects.",
    url: "https://khalid-khan-portfolio.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <ContactFaq />
    </>
  );
}
