// components/TestimonialSlider.jsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import "../styles/details.css";

const TESTIMONIALS = [
  { quote: "Discrete and precise. They rebuilt our home network without disruption and left a simple, printed brief I could actually understand.", author: "Private Client", place: "Longboat Key" },
  { quote: "Trusted-circle messaging kept family and staff aligned without another cloud account.", author: "House Manager", place: "Sarasota" },
  { quote: "They handled every device in the house—from cameras to Sonos—without a single password left in the open.", author: "Estate Owner", place: "Bird Key" },
  { quote: "Professional, calm, and invisible. Our network issues simply stopped.", author: "Private Client", place: "Siesta Key" },
  { quote: "They isolated the guest Wi-Fi, secured all access points, and left us with peace of mind before a major event.", author: "Property Manager", place: "Downtown Sarasota" },
  { quote: "Our data and systems were reorganized with zero downtime. Their written summary was better than most IT firms’ full reports.", author: "Architectural Consultant", place: "Lido Shores" },
  { quote: "They recovered control of our smart home after a contractor left it exposed online.", author: "Homeowner", place: "Casey Key" },
  { quote: "The installation was flawless. Their confidentiality agreement matched the professionalism of their work.", author: "Design Principal", place: "Palm Avenue" },
  { quote: "They transitioned our office and residence to separate, encrypted networks overnight. No one even noticed the switch.", author: "Family Office Director", place: "Sarasota" },
  { quote: "Straightforward, punctual, and private. Exactly the kind of service you hope exists but rarely find.", author: "Executive Client", place: "Bay Isles" },
  { quote: "They untangled years of mismatched equipment and restored a secure, seamless connection across all properties.", author: "Portfolio Manager", place: "Osprey" },
  { quote: "The consultation alone was worth it. Every vulnerability was explained in plain English, not jargon.", author: "Private Residence", place: "Harbour Acres" },
];

export default function TestimonialSlider({
  interval = 5000,
  autoPlay = true,
  pauseOnHover = true,
  showArrows = false,
  showDots = false,
}) {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);
  const viewportRef = useRef(null);
  const total = TESTIMONIALS.length;

  const go = (next) => setIdx((i) => (i + next + total) % total);
  const to = (i) => setIdx(((i % total) + total) % total);

  useEffect(() => {
    if (!autoPlay) return;
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(() => go(1), interval);
    return () => clearInterval(timer.current);
  }, [idx, autoPlay, interval]);

  const onMouse = (state) => {
    if (!pauseOnHover) return;
    if (state === "enter") clearInterval(timer.current);
    else timer.current = setInterval(() => go(1), interval);
  };

  // keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const syncViewportHeight = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const activeSlide = viewport.querySelector(".ts-slide.is-active");
    if (!activeSlide) return;
    viewport.style.height = `${activeSlide.scrollHeight}px`;
  }, []);

  useEffect(() => {
    syncViewportHeight();
  }, [idx, syncViewportHeight]);

  useEffect(() => {
    syncViewportHeight();
    window.addEventListener("resize", syncViewportHeight);
    return () => window.removeEventListener("resize", syncViewportHeight);
  }, [syncViewportHeight]);

  const sliderClassName = [
    "testimonial-slider",
    showDots && "has-dots",
    showArrows && "has-arrows",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={sliderClassName}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => onMouse("enter")}
      onMouseLeave={() => onMouse("leave")}
    >
      <div className="ts-viewport" ref={viewportRef}>
        {TESTIMONIALS.map((t, i) => (
          <article
            key={i}
            className={`ts-slide ${i === idx ? "is-active" : ""}`}
            aria-hidden={i !== idx}
          >
            <p className="ts-quote">{t.quote}</p>
            <h4 className="ts-author">{t.author}</h4>
            <small className="ts-place">{t.place}</small>
          </article>
        ))}
      </div>

      {showArrows && (
        <div className="ts-controls">
          <button className="ts-arrow" aria-label="Previous" onClick={() => go(-1)}>‹</button>
          {showDots && (
            <div className="ts-dots" role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === idx}
                  className={`ts-dot ${i === idx ? "active" : ""}`}
                  onClick={() => to(i)}
                />
              ))}
            </div>
          )}
          <button className="ts-arrow" aria-label="Next" onClick={() => go(1)}>›</button>
        </div>
      )}

      {!showArrows && showDots && (
        <div className="ts-dots" role="tablist" aria-label="Testimonials">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === idx}
              className={`ts-dot ${i === idx ? "active" : ""}`}
              onClick={() => to(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
