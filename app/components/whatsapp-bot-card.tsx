"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SendIcon, SparkIcon, WhatsappIcon, ExternalIcon } from "@/app/components/icons";
import { site } from "@/app/data";

const BOT_NUMBER = "923191159591";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  link?: { label: string; url: string };
  actionWhatsApp?: boolean;
  chips?: string[];
}

const INITIAL_CHIPS = [
  "🚀 I want to hire you for a project",
  "🛍️ Tell me about your E-Commerce store",
  "⚡ What is your tech stack & rates?",
  "💬 Connect on WhatsApp (+92 319 1159591)",
];

export function WhatsAppBotCard() {
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m-0",
      sender: "bot",
      text: "Salam! 👋 I'm Khalid's AI Agent. I can answer anything about his Full-Stack Next.js projects, tech stack, rates, or help you start a project right here. How can I help you today?",
      time: "Just now",
      chips: INITIAL_CHIPS,
    },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateBotReply = (query: string): Omit<Message, "id" | "sender" | "time"> => {
    const q = query.toLowerCase().trim();

    // 1. Hiring, Projects, Work, Freelance
    if (
      q.includes("hire") ||
      q.includes("project") ||
      q.includes("freelance") ||
      q.includes("work with") ||
      q.includes("contract")
    ) {
      return {
        text: "Khalid is actively available for freelance contracts and full-stack web projects worldwide! He builds modern, high-performance web apps (Next.js 16, React, Supabase, Stripe) with 1-2 week turnaround times.",
        chips: [
          "🛍️ Tell me about your E-Commerce store",
          "⚡ What are your rates?",
          "💬 Share brief on WhatsApp (+92 319 1159591)",
        ],
        actionWhatsApp: true,
      };
    }

    // 2. E-Commerce
    if (
      q.includes("e-commerce") ||
      q.includes("ecommerce") ||
      q.includes("store") ||
      q.includes("fashion") ||
      q.includes("stripe")
    ) {
      return {
        text: "Khalid engineered the Fashionstyle E-Commerce Store — a modern fashion platform featuring Clerk Authentication, Supabase PostgreSQL database with RLS, Stripe Checkout, real-time cart, and wishlist management.",
        link: {
          label: "View Live E-Commerce Store",
          url: "https://e-commerce-fashion-style.vercel.app/",
        },
        chips: [
          "⚡ What is your tech stack?",
          "💰 How much does an online store cost?",
          "💬 Talk on WhatsApp",
        ],
      };
    }

    // 3. AllTools / Utilities
    if (
      q.includes("alltool") ||
      q.includes("utility") ||
      q.includes("tool") ||
      q.includes("pdf") ||
      q.includes("converter")
    ) {
      return {
        text: "Khalid built AllTools Online — a multi-utility web suite with 30+ browser tools for PDFs, image converters, formatters, and code generators. It's 100% private with instant client-side execution.",
        link: {
          label: "Try AllTools Online",
          url: "https://all-tools-tech.vercel.app/",
        },
        chips: [
          "🚀 Can you build a custom tool for me?",
          "⚡ What is your tech stack?",
          "💬 Chat on WhatsApp",
        ],
      };
    }

    // 4. Tech Stack / Skills
    if (
      q.includes("tech") ||
      q.includes("stack") ||
      q.includes("skill") ||
      q.includes("next") ||
      q.includes("react") ||
      q.includes("python") ||
      q.includes("database")
    ) {
      return {
        text: "Khalid's core stack covers modern Web Engineering:\n• Frontend: Next.js (App Router), React 19, TypeScript, Tailwind CSS\n• Backend & DB: Supabase (PostgreSQL), RESTful APIs, Clerk Auth, Stripe\n• AI & Automation: n8n automated workflows, Meta WhatsApp Cloud API, Gemini LLMs\n• Deployment: Vercel, Railway, Git/GitHub",
        chips: [
          "🚀 Hire Khalid for a project",
          "⚡ What are your rates?",
          "💬 Connect on WhatsApp",
        ],
      };
    }

    // 5. Rates, Pricing, Cost, Budget
    if (
      q.includes("rate") ||
      q.includes("price") ||
      q.includes("cost") ||
      q.includes("budget") ||
      q.includes("quote") ||
      q.includes("charges")
    ) {
      return {
        text: "Khalid offers competitive, milestone-based pricing for all web development & automation work:\n• Landing pages & portfolios: 2–4 days delivery\n• Full-Stack Apps & E-Commerce: 1–2 weeks delivery with custom DB, auth & payments\n• Custom n8n WhatsApp AI Automations: tailored to your business needs.\n\nAll projects include free post-launch support and responsive design.",
        chips: [
          "🚀 I want to start a project",
          "🛍️ Tell me about your E-Commerce store",
          "💬 Get instant quote on WhatsApp",
        ],
        actionWhatsApp: true,
      };
    }

    // 6. WhatsApp, Phone, Contact, Email
    if (
      q.includes("whatsapp") ||
      q.includes("phone") ||
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("call") ||
      q.includes("number")
    ) {
      return {
        text: "You can reach Khalid directly:\n📱 WhatsApp: +92 319 1159591 (or +92 335 2649604)\n📧 Email: khalidkhan99012@gmail.com\n📍 Location: Pakistan (Available worldwide for remote work)",
        actionWhatsApp: true,
        chips: [
          "🚀 I want to hire you for a project",
          "🛍️ Tell me about your E-Commerce store",
          "⚡ What is your tech stack?",
        ],
      };
    }

    // 7. Experience, Background, About Khalid
    if (
      q.includes("who is") ||
      q.includes("about khalid") ||
      q.includes("experience") ||
      q.includes("background") ||
      q.includes("student") ||
      q.includes("degree")
    ) {
      return {
        text: "Khalid Khan is a Full-Stack Web Developer and Computer Science student. He has 3+ live production web applications, 8+ open-source projects on GitHub, and specializes in modern Next.js and AI automations.",
        chips: [
          "🛍️ Show live projects",
          "⚡ Tech stack & skills",
          "🚀 Hire Khalid",
        ],
      };
    }

    // 8. Greetings
    if (
      q.includes("hi") ||
      q.includes("hello") ||
      q.includes("salam") ||
      q.includes("hey") ||
      q.includes("aoa")
    ) {
      return {
        text: "Wa Alaikum Assalam! Great to have you here. Feel free to explore Khalid's work, ask about his stack, or discuss your next web application directly with me.",
        chips: [
          "🚀 I want to hire you for a project",
          "🛍️ Tell me about your E-Commerce store",
          "⚡ Tech stack & rates",
        ],
      };
    }

    // Default fallback
    return {
      text: "Thanks for reaching out! Khalid specializes in full-stack web applications, e-commerce stores, custom APIs, and n8n AI automations. Would you like to review his projects, discuss rates, or connect directly?",
      chips: [
        "🚀 I want to hire you for a project",
        "🛍️ Tell me about your E-Commerce store",
        "⚡ What is your tech stack & rates?",
        "💬 Chat on WhatsApp (+92 319 1159591)",
      ],
      actionWhatsApp: true,
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend ?? inputMessage).trim();
    if (!text || isTyping) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add user message
    const userMsgId = `m-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: "user", text, time: currentTime },
    ]);

    setInputMessage("");
    setIsTyping(true);

    // Realistic thinking delay
    setTimeout(() => {
      const replyData = generateBotReply(text);
      const botMsgId = `m-${Date.now() + 1}`;
      const botTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          sender: "bot",
          text: replyData.text,
          time: botTime,
          link: replyData.link,
          actionWhatsApp: replyData.actionWhatsApp,
          chips: replyData.chips,
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const openWhatsApp = (customText?: string) => {
    const text = customText || "Hi Khalid! I checked out your portfolio and would like to discuss a project.";
    const url = `https://wa.me/${BOT_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `m-${Date.now()}`,
        sender: "bot",
        text: "Salam! 👋 Chat has been reset. How can I help you today?",
        time: "Just now",
        chips: INITIAL_CHIPS,
      },
    ]);
  };

  return (
    <div className="relative">
      {/* Background Emerald / WhatsApp Glow */}
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 opacity-30 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-surface shadow-2xl backdrop-blur">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-card/70 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border-2 border-emerald-400 bg-surface p-0.5 shadow-md">
                <Image
                  src={site.logo || "/logo.png"}
                  alt={site.name}
                  width={40}
                  height={40}
                  className="size-full rounded-full object-cover object-top"
                />
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-3 rounded-full border-2 border-surface bg-emerald-500" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-heading sm:text-base text-sm">
                  Khalid&apos;s AI Agent
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                  <SparkIcon className="size-2.5" />
                  n8n AI
                </span>
              </div>
              <p className="text-xs text-dim">
                Instant In-Browser Chat · <span className="font-mono text-emerald-400">+92 319 1159591</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetChat}
              title="Reset conversation"
              aria-label="Reset conversation"
              className="rounded-lg border border-border bg-card p-1.5 text-xs text-dim transition-colors hover:border-accent/40 hover:text-heading"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => openWhatsApp()}
              title="Open direct WhatsApp (+92 319 1159591)"
              aria-label="Open WhatsApp chat"
              className="flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
            >
              <WhatsappIcon className="size-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div className="space-y-4 p-4 sm:p-5">
          {/* Messages Container (Internal scrolling only, overscroll-contain prevents webpage jump) */}
          <div
            ref={chatContainerRef}
            className="h-[280px] space-y-3 overflow-y-auto pr-1 overscroll-contain"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-xs leading-relaxed sm:text-sm ${
                    msg.sender === "user"
                      ? "rounded-tr-xs bg-emerald-600 text-white shadow-md"
                      : "rounded-tl-xs border border-border bg-card text-bright shadow-sm"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Optional Project / External Link */}
                  {msg.link ? (
                    <a
                      href={msg.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/20"
                    >
                      <span>{msg.link.label}</span>
                      <ExternalIcon className="size-3" />
                    </a>
                  ) : null}

                  {/* Optional Direct WhatsApp Button inside message */}
                  {msg.actionWhatsApp ? (
                    <button
                      type="button"
                      onClick={() => openWhatsApp(msg.text)}
                      className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 active:scale-95"
                    >
                      <WhatsappIcon className="size-3.5" />
                      <span>Connect on WhatsApp (+92 319 1159591)</span>
                    </button>
                  ) : null}

                  <div
                    className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
                      msg.sender === "user" ? "text-emerald-100" : "text-dim"
                    }`}
                  >
                    <span>{msg.time}</span>
                    {msg.sender === "user" ? (
                      <span className="font-mono font-bold">✓✓</span>
                    ) : null}
                  </div>
                </div>

                {/* Follow-up question chips */}
                {msg.chips && msg.sender === "bot" && (
                  <div className="mt-2 flex max-w-[92%] flex-wrap gap-1.5">
                    {msg.chips.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => handleSend(chip)}
                        className="rounded-lg border border-border bg-surface px-2.5 py-1 text-[11px] text-body transition-all hover:border-emerald-400/60 hover:bg-emerald-500/10 hover:text-emerald-400 active:scale-95 text-left"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Live Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-xs border border-border bg-card px-4 py-3 shadow-sm w-fit">
                <span className="size-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:-0.3s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:-0.15s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-emerald-400" />
                <span className="ml-1.5 text-xs text-dim">Khalid&apos;s AI is thinking...</span>
              </div>
            )}
          </div>

          {/* Input & Send Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 pt-1"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about projects, tech stack, or hire..."
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-xs sm:text-sm text-heading placeholder:text-dim focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              aria-label="Send message to AI bot"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <SendIcon className="size-4" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>

          {/* Footer Status */}
          <div className="flex items-center justify-between border-t border-border pt-2.5 text-[11px] text-dim">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              In-Browser Live AI Chat
            </span>
            <span className="font-mono text-emerald-400">
              WhatsApp: +92 319 1159591
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
