"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 10l3.5 3.5L15 7" stroke="#C4A35A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-2xl font-light text-white">
            We&apos;ve got your message.
          </p>
        </div>
        <p className="text-text-body leading-relaxed mb-6">
          Thanks for reaching out. We&apos;ll be in touch within 24 hours.
          Check your inbox for a confirmation email.
        </p>
        <div className="border-l-2 border-gold/30 pl-4">
          <p className="text-text-secondary text-sm">
            In the meantime, feel free to email us directly at{" "}
            <a
              href="mailto:sales@engineai.co.nz"
              className="text-gold hover:brightness-125 transition-all"
            >
              sales@engineai.co.nz
            </a>
          </p>
        </div>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-transparent border-b border-white/15 py-3.5 text-white placeholder:text-text-secondary focus:outline-none focus:border-gold transition-colors duration-300 text-[15px]";

  return (
    <form onSubmit={handleSubmit} className="space-y-2 max-w-lg">
      <div>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className={inputClasses}
        />
      </div>
      <div>
        <input
          type="text"
          name="company"
          required
          placeholder="Company"
          className={inputClasses}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className={inputClasses}
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          className={inputClasses}
        />
      </div>
      <div>
        <textarea
          name="message"
          rows={3}
          placeholder="What's your biggest operational headache right now?"
          className={`${inputClasses} resize-none`}
        />
      </div>
      {error && (
        <div className="text-sm space-y-1">
          <p className="text-red-400">{error}</p>
          <p className="text-text-muted">
            Form not working?{" "}
            <a
              href="mailto:sales@engineai.co.nz"
              className="text-gold hover:brightness-125 transition-all"
            >
              Email us directly
            </a>
          </p>
        </div>
      )}
      <div className="pt-6">
        <button
          type="submit"
          disabled={sending}
          className="px-10 py-3.5 bg-gold text-black font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? "Sending..." : "Book a Discovery Call →"}
        </button>
      </div>
    </form>
  );
}
