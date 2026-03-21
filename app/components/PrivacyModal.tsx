"use client";

import { useState, useEffect } from "react";

export default function PrivacyModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[13px] text-text-muted hover:text-white transition-colors text-left"
      >
        Privacy Policy
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="bg-bg-primary border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-12 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors text-xl leading-none"
              aria-label="Close privacy policy"
            >
              &times;
            </button>

            <h2 className="text-2xl font-light text-white mb-6">Privacy Policy</h2>
            <div className="text-text-body text-sm leading-relaxed space-y-4">
              <p className="text-text-secondary font-mono text-xs">
                Last updated: March 2026
              </p>

              <h3 className="text-white text-base font-medium pt-2">Who we are</h3>
              <p>
                Engine AI Consulting Limited (&ldquo;Engine AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
                operates the website engineai.co.nz. We are based in Auckland, New Zealand.
              </p>

              <h3 className="text-white text-base font-medium pt-2">What we collect</h3>
              <p>
                When you submit the contact form, we collect your name, company name, email
                address, phone number (optional), and your message. We use this information
                solely to respond to your enquiry.
              </p>

              <h3 className="text-white text-base font-medium pt-2">How we use it</h3>
              <p>
                Your information is used to respond to your enquiry and to send you a
                confirmation email. We do not sell, trade, or share your personal
                information with third parties.
              </p>

              <h3 className="text-white text-base font-medium pt-2">Third-party services</h3>
              <p>
                We use Resend (resend.com) to deliver emails. Your contact details are
                processed by Resend for the purpose of email delivery only. The site is
                hosted on Vercel (vercel.com).
              </p>

              <h3 className="text-white text-base font-medium pt-2">Your rights</h3>
              <p>
                Under the New Zealand Privacy Act 2020, you have the right to access,
                correct, or request deletion of your personal information. Contact us at{" "}
                <a href="mailto:sales@engineai.co.nz" className="text-gold hover:brightness-125">
                  sales@engineai.co.nz
                </a>{" "}
                for any privacy-related requests.
              </p>

              <h3 className="text-white text-base font-medium pt-2">Cookies</h3>
              <p>
                This site does not use tracking cookies or analytics. No personal data is
                collected through cookies.
              </p>

              <h3 className="text-white text-base font-medium pt-2">Contact</h3>
              <p>
                For questions about this policy, email{" "}
                <a href="mailto:sales@engineai.co.nz" className="text-gold hover:brightness-125">
                  sales@engineai.co.nz
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
