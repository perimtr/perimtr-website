import React, { useEffect } from "react";
import HeroIntro from "../components/HeroIntro";
import PurposeSection from "../components/PurposeSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import AppSection from "../components/AppSection";
import ContactSection from "../components/ContactSection";

import "../styles/site.css";


function initTextRotaterFallback() {
  const nodes = document.querySelectorAll(".text-rotater .t-rotate");

  nodes.forEach((n) => {
    if (n.dataset.__rotInit) return;
    n.dataset.__rotInit = "1";

    const parent = n.closest(".text-rotater");
    const sep = (parent?.getAttribute("data-separator") || "|").trim();
    const speed = Math.max(
      600,
      parseInt(parent?.getAttribute("data-speed") || "1300", 10)
    );
    const effect = `animate__${(
      parent?.getAttribute("data-rotate") || "fadeIn"
    ).trim()}`;

    // Prefer data-words (no flash); otherwise split inner text.
    const wordsAttr = parent?.getAttribute("data-words");
    const parts = (wordsAttr ? wordsAttr.split(sep) : n.textContent.split(sep))
      .map((s) => s.trim())
      .filter(Boolean);

    if (!parts.length) return;

    // Ensure starting word is correct
    if (n.textContent.trim() !== parts[0]) n.textContent = parts[0];

    const addFx = () => n.classList.add("animate__animated", effect);
    const rmFx = () => n.classList.remove("animate__animated", effect);

    let i = 0;
    addFx();
    setInterval(() => {
      rmFx();
      void n.offsetWidth; // reflow to retrigger
      i = (i + 1) % parts.length;
      n.textContent = parts[i];
      addFx();
    }, speed);

    // mark ready so CSS can reveal
    parent.classList.add("is-ready");
  });
}

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      try {
        const S = window.SEMICOLON || window.Semicolon || window.SEMICOLONCORE;
        S?.Modules?.TextRotater?.init?.();
        S?.Widgets?.TextRotater?.init?.();
        S?.TextRotater?.init?.();
      } catch {}
      initTextRotaterFallback();
    }, 0);
  }, []);

  return (
    <div id="home">
      <HeroIntro />
      <section id="content">
        <div className="content-wrap py-0">
          <PurposeSection />
          <AboutSection />
          <ServicesSection />
          <AppSection />
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
