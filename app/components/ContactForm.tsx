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
    "w-full bg-transparent border-b border-white/20 py-3.5 text-text-primary placeholder:text-white/50 focus:outline-none focus:border-text-secondary transition-colors duration-300 text-[15px]";

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
          className="px-10 py-3.5 bg-white text-black font-medium text-sm tracking-wide hover:bg-neutral-200 transition-colors duration-300"
        >
          Book a Discovery Call →
        </button>
      </div>
    </form>
  );
}
