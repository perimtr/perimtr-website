import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HashNavLink({ label, hash, onDone }) {
  const loc = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const go = () => onDone?.();

    if (loc.pathname === "/") {
      // Already on Home → smooth scroll in-page
      const el = document.querySelector(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 65; // header offset
        window.scrollTo({ top, behavior: "smooth" });
        go();
        return;
      }
    }
    // Different page → navigate to Home with hash; ScrollToHash will do the smooth scroll
    navigate(`/${hash}`);
    go();
  };

  return (
    <a href={`/${hash}`} className="menu-link" onClick={handleClick}>
      <div>{label}</div>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const items = [
    { label: "Home", hash: "#home" },
    { label: "About", hash: "#section-about" },
    { label: "Services", hash: "#section-services" },
    { label: "Testimonials", hash: "#section-testimonials" },
    { label: "App", hash: "#section-app" },
    { label: "Contact", hash: "#section-contact" },
  ];

  return (
    <header id="header" className={`full-header header-size-custom${open ? " is-open" : ""}`} data-sticky-shrink="false">
      <div id="header-wrap">
        <div className="container">
          <div className="header-row">
            <div id="logo">
              <a href="/#home">
                <img className="logo-default" srcSet="/assets/logo-header.png, /assets/logo-header@2x.png 2x" src="/assets/logo-header@2x.png" alt="Perimtr Logo" />
                <img className="logo-dark" srcSet="/assets/logo-header-dark.png, /assets/logo-header-dark@2x.png 2x" src="/assets/logo-header-dark@2x.png" alt="Perimtr Logo" />
              </a>
            </div>

            <div className="primary-menu-trigger">
              <button
                className={`perimtr-hamburger${open ? " is-active" : ""}`}
                type="button"
                title="Open Mobile Menu"
                aria-expanded={open}
                onClick={() => setOpen(v => !v)}
              >
                <span className="perimtr-hamburger-box"><span className="perimtr-hamburger-inner" /></span>
              </button>
            </div>

            <nav className="primary-menu">
              <ul className="one-page-menu menu-container" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">
                {items.map(i => (
                  <li className="menu-item" key={i.hash}>
                    <HashNavLink label={i.label} hash={i.hash} onDone={closeMenu} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-wrap-clone" />
    </header>
  );
}