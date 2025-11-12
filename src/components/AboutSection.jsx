import React from "react";

export default function AboutSection() {
  return (
    <section
      id="section-about"
      className="text-center page-section"
      data-onepage-settings={{
        offset: "65",
        speed: "1250",
        easing: "easeInOutExpo",
      }}
    >
      <div className="container">
        <h2 className="mx-auto mb-5 font-body" style={{ maxWidth: "700px", fontSize: "40px" }}>
          About Us
        </h2>
        <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
          <h2 className="mb-0 fw-light ls-1">
            Perimtr<sup>&trade;</sup> provides private technology management for households, principals, and
            small firms that require confidentiality and reliability.
          </h2>
          <h2 className="mb-0 fw-light ls-1">
            We combine quiet technical precision with a concierge service model—hardening communications,
            devices, and networks while keeping ownership and oversight with you.
          </h2>
          <h2 className="mb-0 fw-light ls-1aqq">
            We exist for people who value calm, trustworthy technology at home and at work. Rather than
            pushing new vendors or dashboards, we design systems that fit your routines and keep what matters—
            photos, files, conversations—local, functional, and yours.
          </h2>
        </div>
      </div>
    </section>
  );
}
