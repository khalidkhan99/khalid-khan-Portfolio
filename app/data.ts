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
  title: "Student & AI Developer",
  tagline: "Building AI tools for the world",
  role: "AI Developer",
  location: "Pakistan",
  timezone: "PKT (UTC+5)",
  email: "khalidkhan99012@gmail.com",
  phone: "+92 335 2649604",
  github: "https://github.com/khalidkhan99",
  linkedin: "https://www.linkedin.com/in/khalid-khan-234266375/",
  twitter: "https://x.com/khalidkhan99012",
  resume: "/resume.pdf",
  formAction: "https://formsubmit.co/khalidkhan99012@gmail.com",
  repoUrl: "https://github.com/khalidkhan99/khalidkhan",
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
  "AI Tools",
  "Chatbots",
  "Content Generators",
  "Web Apps",
];

export const stats = [
  { value: 2, suffix: "", label: "Live AI Apps" },
  { value: 8, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "+", label: "Technologies" },
];

export const about = {
  intro: `Hi, I'm Khalid Khan — a student and AI Developer building real AI tools for clients worldwide.`,
  body: `I'm currently learning and building in the AI space — from prompt engineering and LLM integrations to full-stack web apps. I believe the fastest way to learn is by shipping real products. My two live tools (AI Content Generator and AI Chatbot) are already being used by real users.`,
  highlights: [
    {
      title: "2 Live AI Apps",
      description: "Real tools deployed and running",
    },
    {
      title: "8+ Projects Built",
      description: "From chatbots to web apps",
    },
    {
      title: "Always Learning",
      description: "Continuously exploring new AI technologies",
    },
    {
      title: "Open Source",
      description: "All projects on GitHub",
    },
    {
      title: "Student",
      description: "Computer Science — learning every day",
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
    title: "AI Content Generator",
    description:
      "Generate professional content for 6 platforms — Blog, Instagram, Twitter, LinkedIn, Facebook & Email — from one topic. Supports English, Urdu & Hinglish.",
    tags: ["Python", "Streamlit", "Groq API", "LLaMA 3.3"],
    icon: "spark",
    metrics: "6 Platforms · 3 Languages · Free to Use",
    live: true,
    github: "https://github.com/khalidkhan99/ai-content-generator",
    demo: "https://ai-content-generater.streamlit.app",
  },
  {
    title: "AI Chatbot",
    description:
      "A smart conversational AI chatbot powered by Groq's LLaMA 3.3 70B model. Fast responses, clean interface, and context-aware conversations.",
    tags: ["Python", "Streamlit", "Groq API", "LLaMA 3.3"],
    icon: "message",
    metrics: "Ultra-fast · Context-aware · Free",
    live: true,
    github: "https://github.com/khalidkhan99/ai-chatbot",
    demo: "https://khalid-chatbot.streamlit.app",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — built with Next.js, TypeScript and Tailwind CSS. Fully responsive, dark/light mode, animated particles, and SEO optimized.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    icon: "chart",
    metrics: "Responsive · Dark/light mode · SEO-ready",
    github: "https://github.com/khalidkhan99/khalidkhan",
    demo: "https://khalidkhan99.github.io/khalidkhan",
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
    role: "Freelance AI Developer",
    company: "Self-employed",
    period: "2024 — Present",
    type: "Freelance",
    achievements: [
      "Built and deployed 2 live AI tools used by real users — AI Chatbot & AI Content Generator",
      "Developed AI-powered web applications using Python, Streamlit, and Groq API",
      "Implemented prompt engineering workflows for content generation across 6 platforms",
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
      "Studying Computer Science with focus on AI and software development",
      "Building real projects alongside studies to apply theoretical knowledge",
      "Continuously learning new tools — Next.js, LangChain, RAG systems",
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
      ['str', 'AI Developer'],
      ['', '",'],
    ],
    [
      ['', '    skills: ['],
      ['str', '"AI", "Python", "Web"'],
      ['', '],'],
    ],
    [
      ['', '    passion: "'],
      ['str', 'Building with AI'],
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
    title: "2 Live AI Apps Shipped",
    event: "Personal Milestone",
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
      "Khalid built exactly what we needed — a chatbot for our website that actually works. Fast delivery and great communication.",
    name: "Ahmed R.",
    role: "Business Owner",
  },
  {
    quote:
      "The AI content generator saves me hours every week. Simple to use and the results are great.",
    name: "Sara M.",
    role: "Content Creator",
  },
  {
    quote:
      "Khalid is reliable, responsive and genuinely cares about the quality of his work. Highly recommended.",
    name: "Usman K.",
    role: "Freelance Client",
  },
];

export const careerStats = [
  { value: 2, suffix: "", label: "Live AI Apps" },
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
