"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to Formspree, Vercel serverless function, or similar
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12">
        <p className="text-2xl font-light text-text-primary mb-2">
          Thanks for reaching out.
        </p>
        <p className="text-text-secondary">
          We&apos;ll be in touch within 24 hours.
        </p>
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
      <div className="pt-6">
        <button
          type="submit"
          className="px-10 py-3.5 bg-gold text-black font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300"
        >
          Book a Discovery Call →
        </button>
      </div>
    </form>
  );
}
