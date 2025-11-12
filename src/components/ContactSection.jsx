import React from "react";
import "../styles/contact.css";

// Optional: DRY helper to quiet autofill/AI extensions that were crashing
const IGNORE_EXT_PROPS = {
  autoComplete: "off",
  "data-lpignore": "true",     // LastPass
  "data-1p-ignore": "true",    // 1Password
  "data-bwignore": "true",     // Bitwarden
  "data-form-type": "other",
  "data-gramm": "false",
  "data-gramm_editor": "false",
  "data-enable-grammarly": "false",
};

export default function ContactSection({
  id = "section-contact",
  heading = "Contact",
  subheading = "Discreet, by-appointment only. Share only what you’re comfortable sharing; we’ll do the rest.",
  action = "https://formspree.io/f/mdkpqdlr",
}) {
  return (
    <section id={id} className="contact-section mx-auto">
      <div className="contact-shell">
        <header className="contact-header">
          <h2
            className="contact-title mx-auto mb-5 font-body"
            style={{ maxWidth: "700px", fontSize: "40px" }}
          >
            {heading}
          </h2>
          <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
            <h2 className="contact-subtitle mb-0 fw-light ls-1">{subheading}</h2>
          </div>
        </header>

        <div className="contact-card">
          <form
            id="contact-form"
            name="contact-form"
            action={action}
            method="post"
            className="contact-form"
          >
            {/* NAME */}
            <div className="field col-12">
              <label className="visually-hidden" htmlFor="contact-name">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Name"
                defaultValue=""
                className="form-control border-form-control"
                {...IGNORE_EXT_PROPS}
              />
            </div>

            {/* EMAIL */}
            <div className="field">
              <label className="visually-hidden" htmlFor="contact-email">
                Email Address
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Email Address"
                defaultValue=""
                className="form-control border-form-control"
                {...IGNORE_EXT_PROPS}
              />
            </div>

            {/* PHONE */}
            <div className="field">
              <label className="visually-hidden" htmlFor="contact-phone">
                Phone
              </label>
              <input
                type="text"
                id="contact-phone"
                name="number"
                placeholder="Phone"
                defaultValue=""
                className="form-control border-form-control"
                {...IGNORE_EXT_PROPS}
              />
            </div>

            {/* MESSAGE */}
            <div className="field">
              <label className="visually-hidden" htmlFor="contact-message">
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={7}
                placeholder="Your Message"
                className="form-control border-form-control"
                {...IGNORE_EXT_PROPS}
              />
            </div>

            {/* Hidden meta for Formspree (kept from original) */}
            <input type="hidden" name="prefix" value="contact-form" />

            {/* Submit */}
            <div className="actions">
              <button
                type="submit"
                id="contact-form-submit"
                name="submit"
                value="submit"
                className="button button-border button-circle fw-medium"
              >
                Send Message
              </button>
              <small className="note">
                We’ll do our best to get back to you within 6–8 working hours.
              </small>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
