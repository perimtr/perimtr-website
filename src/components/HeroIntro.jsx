import React, { useState, useEffect } from "react";

const WORDS = ["Precise.", "Private.", "Intentional.", "Local.", "Trusted."];

export default function HeroIntro() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("in"); // 'in' | 'out'

  const scrollToTarget = (selector, offset = 70) => {
    const target = document.querySelector(selector);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const cycle = setInterval(() => {
      // fade out first
      setPhase("out");
      // after fade-out, swap word and fade in
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setPhase("in");
      }, 260); // match CSS duration
      return () => clearTimeout(t);
    }, 2200); // time per word
    return () => clearInterval(cycle);
  }, []);

  return (
    <section id="slider" className="slider-element min-vh-60 min-vh-md-100 include-header">
      <div className="slider-inner">
        <div className="vertical-middle">
          <div className="container">
            <div className="row align-items-center justify-content-between py-5">
              <div className="col-lg-5 col-md-6">
                <div className="subscribe-widget" data-loader="button" data-alert-type="inline">
                  <h1 className="display-4 text-transform-none" style={{ letterSpacing: "-1px", lineHeight: 1 }}>
                    <div className="top-title">We&apos;re</div>
                    <span className="rotator">
                      <span className={`rotator-word ${phase}`}>{WORDS[index]}</span>
                      <span className="blinking-cursor">|</span>
                    </span>
                  </h1>

                  <p className="mb-5">
                    We tune your home and personal tech with calm, discreet, white-glove service. Private networks,
                    locked-down devices, and peer-to-peer messaging—without handing your life to a third-party cloud.
                  </p>

                  <button
                    type="button"
                    onClick={() => scrollToTarget("#section-services")}
                    className="button m-0 button-circle button-large text-white fadeInUp animated"
                    style={{ backgroundColor: "#084678" }}
                  >
                    Explore Services <i className="bi-arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className="col-lg-6 col-md-5">
                <img src="assets/hero.svg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <a
          href="/#section-about"
          className="one-page-arrow ms-2 mt-5"
          style={{ left: 80 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToTarget("#section-about");
          }}
        >
          <i className="bi-arrow-down infinite animated fadeInDown"></i>
        </a>
      </div>
    </section>
  );
}
