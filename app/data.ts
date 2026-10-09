export type ProjectIcon = "spark" | "bolt" | "brain" | "chart" | "search" | "message";
export type SkillIcon = "code" | "brain" | "cloud" | "layers";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: ProjectIcon;
  metrics: string;
  live?: boolean;
  github: string;
  demo: string;
};

export type SkillGroup = {
  category: string;
  icon: SkillIcon;
  blurb: string;
  skills: { name: string; level: number }[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  achievements: string[];
};

export type Highlight = { title: string; description: string };

export const site = {
  name: "Khalid Khan",
  initials: "KK",
  logo: "/logo.png",
  title: "Full-Stack & Web Developer",
  tagline: "Building modern web apps & tools for the world",
  role: "Full-Stack Developer",
  location: "Pakistan",
  timezone: "PKT (UTC+5)",
  email: "khalidkhan99012@gmail.com",
  phone: "+92 335 2649604",
  github: "https://github.com/khalidkhan99",
  linkedin: "https://www.linkedin.com/in/khalid-khan-dev",
  facebook: "https://www.facebook.com/profile.php?id=61592632241241",
  instagram: "https://www.instagram.com/khalid.dev99/",
  twitter: "https://x.com/khalidkhan99012",
  whatsapp: "https://wa.me/923352649604",
  resume: "/resume.pdf",
  formAction: "https://formsubmit.co/khalidkhan99012@gmail.com",
  repoUrl: "https://github.com/khalidkhan99/khalid-khan-Portfolio",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export const typingPhrases = [
  "E-Commerce Stores",
  "Full-Stack Web Apps",
  "Online Utility Tools",
  "Next.js & React",
];

export const stats = [
  { value: 3, suffix: "", label: "Live Web Apps" },
  { value: 8, suffix: "+", label: "Projects Built" },
  { value: 12, suffix: "+", label: "Technologies" },
];

export const about = {
  intro: `Hi, I'm Khalid Khan — a Full-Stack Web Developer building modern, high-performance web applications.`,
  body: `I build production-ready web applications — from full-stack e-commerce platforms with Clerk, Supabase, and Stripe to responsive utility tools and modern Next.js experiences. My live products (Fashionstyle Store, AllTools Online, and this portfolio) are deployed and running for users worldwide.`,
  highlights: [
    {
      title: "3 Live Web Apps",
      description: "Real web apps and tools deployed and running",
    },
    {
      title: "8+ Projects Built",
      description: "From e-commerce stores to developer tools",
    },
    {
      title: "Always Learning",
      description: "Continuously mastering modern web frameworks",
    },
    {
      title: "Open Source",
      description: "All projects on GitHub",
    },
    {
      title: "Student",
      description: "Computer Science — learning and building daily",
    },
    {
      title: "Working Worldwide",
      description: "Remote-friendly, available for clients anywhere",
    },
  ] satisfies Highlight[],
};

export const skillGroups = [
  {
    category: "Languages & Core",
    icon: "code",
    blurb: "The foundation of everything I build",
    skills: [
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "HTML & CSS", level: 85 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    blurb: "Building intelligent applications",
    skills: [
      { name: "Prompt Engineering", level: 85 },
      { name: "LLMs & Groq API", level: 80 },
      { name: "LangChain", level: 65 },
      { name: "RAG Systems", level: 60 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "cloud",
    blurb: "Deploying and shipping products",
    skills: [
      { name: "Streamlit", level: 85 },
      { name: "GitHub", level: 80 },
      { name: "WordPress", level: 85 },
      { name: "Vercel / Streamlit Cloud", level: 75 },
    ],
  },
  {
    category: "Frameworks & Tools",
    icon: "layers",
    blurb: "Building modern web experiences",
    skills: [
      { name: "Next.js", level: 65 },
      { name: "React", level: 60 },
      { name: "Tailwind CSS", level: 70 },
      { name: "REST APIs", level: 75 },
    ],
  },
] satisfies SkillGroup[];

export const projects = [
  {
    title: "Fashionstyle E-Commerce Store",
    description:
      "A full-stack modern fashion e-commerce store with product catalogue, size selection, wishlist, Clerk authentication, Supabase database, and Stripe checkout integration.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Clerk"],
    icon: "spark",
    metrics: "Full-Stack · Clerk Auth · Stripe Checkout",
    live: true,
    github: "https://github.com/khalidkhan99/E-commerce",
    demo: "https://e-commerce-fashion-style.vercel.app/",
  },
  {
    title: "AllTools Online Platform",
    description:
      "A comprehensive multi-utility web platform with 30+ browser-based tools for images, PDFs, converters, formatters, and code generators. 100% private with client-side processing.",
    tags: ["JavaScript", "HTML5", "CSS3", "Web Tools", "Converters", "Responsive UI"],
    icon: "search",
    metrics: "30+ Online Tools · Client-Side · 100% Private",
    live: true,
    github: "https://github.com/khalidkhan99/all-tools",
    demo: "https://all-tools-tech.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — built with Next.js, TypeScript and Tailwind CSS. Fully responsive, dark/light mode, animated particles, and SEO optimized.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    icon: "chart",
    metrics: "Responsive · Dark/light mode · SEO-ready",
    live: true,
    github: "https://github.com/khalidkhan99/khalid-khan-Portfolio",
    demo: "https://khalid-khan-portfolio.vercel.app",
  },
] satisfies Project[];

export const projectStats = [
  { value: projects.length, suffix: "", label: "Projects Built" },
  { value: projects.filter((p) => p.live).length, suffix: "", label: "Live Products" },
  { value: 3, suffix: "+", label: "Tech Domains" },
  { value: 100, suffix: "%", label: "Shipped" },
];

export const experience = [
  {
    role: "Full-Stack Web Developer",
    company: "Freelance",
    period: "2024 — Present",
    type: "Freelance",
    achievements: [
      "Built and deployed live full-stack web applications including an E-Commerce fashion platform and AllTools Online",
      "Integrated secure Clerk authentication, Supabase PostgreSQL with RLS, and Stripe payment workflows",
      "Engineered 30+ responsive client-side utility tools with instant browser execution and zero data uploads",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Freelance",
    period: "2023 — Present",
    type: "Freelance",
    achievements: [
      "Built and customized 5+ WordPress websites for local clients",
      "Integrated plugins, improved page speed, and handled SEO optimization",
      "Provided ongoing maintenance and client support",
    ],
  },
  {
    role: "CS Student",
    company: "University",
    period: "2022 — Present",
    type: "Education",
    achievements: [
      "Studying Computer Science with focus on software engineering and full-stack web systems",
      "Building production-ready applications alongside studies to apply theoretical knowledge",
      "Mastering modern ecosystems — Next.js 16, React 19, TypeScript, and modern APIs",
    ],
  },
] satisfies Experience[];

export type CodeToken = [kind: string, text: string];
export type CodeLine = CodeToken[];

export const heroCode: { lines: CodeLine; body: CodeLine[] } = {
  lines: [
    ['kw', 'import '],
    ['', '{ '],
    ['fn', 'Portfolio'],
    ['', ' } from "'],
    ['str', 'khalidkhan'],
    ['', '";'],
  ],
  body: [
    [
      ['kw', 'function '],
      ['', 'handleProfile'],
      ['', '() {'],
    ],
    [
      ['', '  '],
      ['kw', 'const '],
      ['', 'khalid = '],
      ['kw', 'new '],
      ['', 'Portfolio({'],
    ],
    [
      ['', '    name: "'],
      ['str', 'Khalid Khan'],
      ['', '",'],
    ],
    [
      ['', '    role: "'],
      ['str', 'Full-Stack Developer'],
      ['', '",'],
    ],
    [
      ['', '    skills: ['],
      ['str', '"Next.js", "React", "Web"'],
      ['', '],'],
    ],
    [
      ['', '    passion: "'],
      ['str', 'Shipping Web Apps'],
      ['', '",'],
    ],
    [
      ['', '  });'],
    ],
    [],
    [
      ['', '  khalid.'],
      ['fn', 'buildAndShip'],
      ['', '();'],
    ],
    [
      ['', '}'],
    ],
  ],
};

export type ServiceIcon = "brain" | "spark" | "code" | "cloud";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const services = [
  {
    title: "AI Chatbots",
    description:
      "Custom AI chatbots powered by LLMs — for customer support, FAQs, or any use case.",
    icon: "brain",
  },
  {
    title: "AI Content Tools",
    description:
      "Automated content generation for blogs, social media, emails and more.",
    icon: "spark",
  },
  {
    title: "Web Development",
    description:
      "Modern websites with Next.js, React or WordPress — fast, responsive and SEO-ready.",
    icon: "code",
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive tasks using AI — save hours every week.",
    icon: "cloud",
  },
] satisfies Service[];

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "We discuss your idea, goals and what problem you want to solve.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "I plan the solution — tools, tech stack, and timeline — before writing code.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Fast development with regular updates and demos so you always know progress.",
  },
  {
    step: "04",
    title: "Ship",
    description:
      "Deploy, test, and hand over — with support if anything needs fixing.",
  },
];

export const interests = [
  {
    title: "AI Tools",
    description: "Building practical AI tools people actually use.",
  },
  {
    title: "Open Source",
    description: "All my projects are on GitHub — learn and contribute.",
  },
  {
    title: "AI Research",
    description: "Following the latest in LLMs, agents and prompt engineering.",
  },
  {
    title: "Freelancing",
    description: "Helping clients worldwide solve problems with AI and automation.",
  },
];

export const tools = [
  "Python",
  "Streamlit",
  "Groq API",
  "LLaMA 3.3",
  "LangChain",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "GitHub",
  "Vercel",
  "REST APIs",
  "Prompt Engineering",
  "RAG Systems",
];

export const learning = [
  { name: "LangChain & RAG", progress: 60 },
  { name: "Next.js & React", progress: 65 },
  { name: "Machine Learning", progress: 45 },
  { name: "System Design", progress: 40 },
];

export const certifications = [
  {
    title: "AI Essentials",
    issuer: "Google (Coursera)",
    year: "2024",
  },
  {
    title: "Python for Everybody",
    issuer: "University of Michigan (Coursera)",
    year: "2024",
  },
  {
    title: "CS50x",
    issuer: "Harvard University",
    year: "2024",
  },
];

export const awards = [
  {
    title: "3 Live Web Apps Shipped",
    event: "Production Milestone",
    year: "2024",
  },
  {
    title: "First Freelance Client",
    event: "WordPress Project",
    year: "2023",
  },
];

export const testimonials = [
  {
    quote:
      "Khalid built our complete fashion e-commerce store with Stripe and Clerk auth. Fast delivery, clean UI and seamless experience.",
    name: "Ahmed R.",
    role: "Business Owner",
  },
  {
    quote:
      "AllTools is incredible. All 30+ browser tools work instantly without uploading files to servers. Great developer!",
    name: "Sara M.",
    role: "Digital Marketer",
  },
  {
    quote:
      "Khalid is reliable, responsive and genuinely cares about code quality and user experience. Highly recommended.",
    name: "Usman K.",
    role: "Freelance Client",
  },
];

export const careerStats = [
  { value: 3, suffix: "", label: "Live Web Apps" },
  { value: 8, suffix: "+", label: "Projects Built" },
  { value: 5, suffix: "+", label: "WordPress Sites" },
  { value: 100, suffix: "%", label: "Shipped" },
];

export const philosophy = [
  {
    title: "Build Real Things",
    description: "Learning by shipping — not just watching tutorials.",
  },
  {
    title: "Keep It Simple",
    description: "Simple solutions that work beat complex ones that don't.",
  },
  {
    title: "Always Improve",
    description: "Every project teaches something new.",
  },
];

export const contactValues = [
  {
    title: "Fast Replies",
    description: "I respond within 24 hours.",
  },
  {
    title: "Clear Communication",
    description: "Plain language, honest timelines, no jargon.",
  },
  {
    title: "Quality Work",
    description: "I don't ship until it works properly.",
  },
  {
    title: "Affordable Rates",
    description: "Competitive rates for clients worldwide.",
  },
];

export const faqs = [
  {
    q: "What services do you offer?",
    a: "AI chatbots, AI content tools, web development (Next.js / WordPress), and AI automation.",
  },
  {
    q: "How quickly do you reply?",
    a: "Usually within 24 hours.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Yes! I work with clients worldwide. Remote-first, always available.",
  },
  {
    q: "Can you build a chatbot for my business?",
    a: "Absolutely. I can build a custom AI chatbot for your website or business needs.",
  },
  {
    q: "What does a project typically cost?",
    a: "Depends on the scope. I work with clients worldwide — reach out and we can discuss.",
  },
];
