import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HashNavLink({ label, hash }) {
  const loc = useLocation();
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();

    // Already on Home → smooth in-page scroll
    if (loc.pathname === "/") {
      const el = document.querySelector(hash);
      const offset = 70; // matches header offset
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        // update URL hash without jump
        history.replaceState(null, "", `/${hash}`);
        return;
      }
    }

    // Different page → navigate to Home with hash
    navigate(`/${hash}`);
  };

  return (
    <a href={`/${hash}`} className="footer-link" onClick={onClick}>
      {label}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const items = [
    { label: "Top", hash: "#home" },
    { label: "About", hash: "#section-about" },
    { label: "Services", hash: "#section-services" },
    { label: "App", hash: "#section-app" },
    { label: "Testimonials", hash: "#section-testimonials" },
    { label: "Contact", hash: "#section-contact" },
  ];

  return (
    <footer id="footer" className="perimtr-footer">
      <div className="footer-shell container">
        <div className="footer-grid">
          <section className="footer-section">
            <h4 className="footer-heading">Site Links</h4>
            <nav className="footer-links" aria-label="Footer navigation">
              {items.map((i) => (
                <HashNavLink key={i.hash} label={i.label} hash={i.hash} />
              ))}
            </nav>
          </section>
        </div>
      </div>

      <div id="copyrights" className="footer-copy">
        &copy;{year} Perimtr, LLC | Privacy-first concierge tech &amp; private communications.
      </div>
    </footer>
  );
}
