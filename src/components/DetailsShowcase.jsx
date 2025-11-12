import React from "react";
import "../styles/details.css";

const ACCENTS = [
  "linear-gradient(135deg, #34d399, #0ea5e9)",
  "linear-gradient(135deg, #f472b6, #a855f7)",
  "linear-gradient(135deg, #fb923c, #facc15)",
  "linear-gradient(135deg, #38bdf8, #6366f1)",
  "linear-gradient(135deg, #4ade80, #22d3ee)",
  "linear-gradient(135deg, #f97316, #ef4444)",
];

const ICONS = {
  monitor: MonitorIcon,
  eye: EyeIcon,
  cube: CubeIcon,
  layers: LayersIcon,
  shield: ShieldIcon,
  signal: SignalIcon,
};

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
      <rect x="3" y="5" width="18" height="12" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
      <path
        d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
      <path d="M12 2 4 6v8l8 4 8-4V6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 2v8l8 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 10 4 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
      <path d="M12 5 3 9l9 4 9-4-9-4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m3 13 9 4 9-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m3 17 9 4 9-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
      <path
        d="M12 3 5 6v6c0 4.5 3.5 8.7 7 9.9 3.5-1.2 7-5.4 7-9.9V6l-7-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
      <circle cx="12" cy="18" r="1" fill="currentColor" />
      <path d="M12 14v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 10a9 9 0 0 1 12 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 7a13 13 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DetailsCard({ item, index }) {
  const Icon = ICONS[item.icon] || MonitorIcon;
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <article className="details-card" id={item.id || undefined}>
      <div className="details-card-icon" style={{ backgroundImage: accent }}>
        <Icon />
      </div>

      <div className="details-card-body">
        {item.kicker ? <span className="details-card-kicker">{item.kicker}</span> : null}
        <h3>{item.heading}</h3>
        {item.body ? <p>{item.body}</p> : null}
        {Array.isArray(item.details) && item.details.length > 0 ? (
          <ul className="details-card-list">
            {item.details.map((detail, idx) => {
              if (!detail) return null;
              const title = typeof detail === "string" ? null : detail.title;
              const copy = typeof detail === "string" ? detail : detail.copy;
              return (
                <li key={idx}>
                  {title ? <strong>{title}: </strong> : null}
                  {copy}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export default function DetailsShowcase({
  title,
  subtitle,
  eyebrow,
  items = [],
}) {
  return (
    <div className="details-modern">
      <main>
        <section className="details-hero-simple">
          <div className="details-hero-copy">
            {eyebrow ? <p className="details-hero-eyebrow">{eyebrow}</p> : null}
            <h2 className="details-page-title">{title}</h2>
            {subtitle ? (
              <div className="details-page-subtitle">
                <h2 className="mb-0 fw-light ls-1">{subtitle}</h2>
              </div>
            ) : null}
          </div>
        </section>

        <section className="details-grid">
          {items.map((item, index) => (
            <DetailsCard key={`${item.heading}-${index}`} item={item} index={index} />
          ))}
        </section>
      </main>
    </div>
  );
}
