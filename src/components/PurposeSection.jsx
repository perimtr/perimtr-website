import React from "react";

const PURPOSES = [
  {
    eyebrow: "Purpose",
    title: "Business",
    copy:
      "Protect executives and sensitive operations with isolated networks, hardened endpoints, and controlled communications—without vendor lock-in.",
  },
  {
    eyebrow: "Purpose",
    title: "Personal",
    copy:
      "Keep your household safe with guest & IoT isolation, private backups, and trusted-circle messaging. Discreet, on-site, by appointment.",
  },
];

export default function PurposeSection() {
  return (
    <section className="purpose-section">
      <div className="purpose-card">
        {PURPOSES.map((item) => (
          <article key={item.title} className="purpose-panel">
            <p className="purpose-eyebrow">{item.eyebrow}</p>
            <h3>{item.title}</h3>
            <p className="purpose-copy">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
