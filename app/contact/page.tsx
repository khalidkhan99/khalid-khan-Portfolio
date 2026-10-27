import type { Metadata } from "next";
import { Contact } from "@/app/components/contact";
import {
  Availability,
  ContactFaq,
  ContactValues,
} from "@/app/components/contact-extra";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Khalid Khan — Full-Stack & Web Developer from Pakistan. Available for freelance web applications, e-commerce stores, and software projects.",
  keywords: ["Contact Khalid Khan", "Hire Web Developer Pakistan", "Khalid Khan Freelance", "Full-Stack Developer"],
  alternates: {
    canonical: "https://khalid-khan-dev.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Khalid Khan Full-Stack Developer",
    description: "Hire Khalid Khan for modern web applications and full-stack development projects.",
    url: "https://khalid-khan-dev.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact asH1 />
      <ContactValues />
      <ContactFaq />
      <Availability />
    </>
  );
}
