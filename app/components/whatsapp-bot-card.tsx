"use client";

import { useState } from "react";
import Image from "next/image";
import { SendIcon, SparkIcon, WhatsappIcon } from "@/app/components/icons";
import { site } from "@/app/data";

const BOT_NUMBER = "923191159591";

const QUICK_PROMPTS = [
  "🚀 I want to hire you for a web project",
  "🛍️ Tell me about your E-Commerce store",
  "⚡ What is your tech stack & rates?",
  "💬 Hi Khalid! Let's connect on WhatsApp",
];

export function WhatsAppBotCard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<
    { sender: "bot" | "user"; text: string; time: string }[]
  >([
    {
      sender: "bot",
      text: "Hi there! 👋 I'm Khalid's AI assistant powered by n8n & Meta WhatsApp Cloud API. Ask me about his full-stack apps, tech skills, or send a project brief to talk directly!",
      time: "Just now",
    },
  ]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend ?? inputMessage).trim();
    if (!text) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add user message to preview
    setMessages((prev) => [
      ...prev,
      { sender: "user", text, time: currentTime },
    ]);

    // Clear input
    setInputMessage("");

    // Open WhatsApp with pre-filled message
    const url = `https://wa.me/${BOT_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
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
        <div className="flex items-center justify-between border-b border-border bg-card/60 px-5 py-4">
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
                  n8n Bot
                </span>
              </div>
              <p className="text-xs text-dim">
                WhatsApp Cloud API · <span className="font-mono text-emerald-400">+92 319 1159591</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-emerald-400">
            <WhatsappIcon className="size-6 text-emerald-500" />
          </div>
        </div>

        {/* Chat Body */}
        <div className="space-y-4 p-4 sm:p-5">
          {/* Messages */}
          <div className="max-h-[260px] space-y-3 overflow-y-auto pr-1">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-xs leading-relaxed sm:text-sm ${
                    msg.sender === "user"
                      ? "rounded-tr-xs bg-emerald-600 text-white shadow-md"
                      : "rounded-tl-xs border border-border bg-card text-bright shadow-sm"
                  }`}
                >
                  <p>{msg.text}</p>
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
              </div>
            ))}
          </div>

          {/* Quick Action Prompt Chips */}
          <div>
            <p className="mb-2 font-mono text-[11px] text-dim uppercase tracking-wider">
              Suggested Questions:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="rounded-lg border border-border bg-surface px-2.5 py-1.5 text-xs text-body transition-all hover:border-emerald-400/60 hover:bg-emerald-500/10 hover:text-emerald-400 active:scale-95 text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input & Send Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 pt-2"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask bot or type a project message..."
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-xs sm:text-sm text-heading placeholder:text-dim focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors"
              />
            </div>
            <button
              type="submit"
              aria-label="Send message to WhatsApp bot"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              <SendIcon className="size-4" />
              <span className="hidden sm:inline">Chat</span>
            </button>
          </form>

          {/* Live Meta / n8n footer tag */}
          <div className="flex items-center justify-between border-t border-border pt-2.5 text-[11px] text-dim">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Live n8n workflow active
            </span>
            <span className="font-mono text-emerald-400 hover:underline">
              Instant reply 24/7
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
