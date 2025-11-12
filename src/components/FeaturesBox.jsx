import { Link } from "react-router-dom";

function FeatureCard({ icon, title, blurb, hash }) {
  return (
    <article className="service-card">
      <span className="service-icon" aria-hidden="true">
        <i className={icon} />
      </span>

      <div className="service-body">
        <h3>{title}</h3>
        <p>{blurb}</p>
      </div>

      <Link to={`/services-details#${hash}`} className="service-link">
        Read More <i className="bi-arrow-right" aria-hidden="true" />
      </Link>
    </article>
  );
}

const FEATURES = [
  {
    icon: "icon-et-browser",
    title: "Home Network Overhaul",
    blurb:
      "Audit and segment Wi-Fi and wired networks; guest & IoT isolation, DNS filtering, safe remote access.",
    hash: "home-network",
  },
  {
    icon: "icon-et-lock",
    title: "Device Hardening",
    blurb:
      "iPhone, iPad, macOS, Windows. Passkeys, 2FA, encrypted storage, safe update policy.",
    hash: "device-hardening",
  },
  {
    icon: "icon-et-cloud",
    title: "Private File Flow",
    blurb:
      "Local-first storage & encrypted backups you control. No unnecessary third-party vendors.",
    hash: "private-file-flow",
  },
  {
    icon: "icon-et-map",
    title: "Travel & Events",
    blurb:
      "Temporary hardened setups, disposable networks, roaming privacy kits, post-event hygiene.",
    hash: "travel-events",
  },
  {
    icon: "icon-et-linegraph",
    title: "Concierge Monitoring",
    blurb:
      "Lightweight health signals (uptime, backups, patches) – no invasive tracking or analytics.",
    hash: "concierge-monitoring",
  },
  {
    icon: "icon-et-genius",
    title: "Family & Staff Onboarding",
    blurb:
      "Role-appropriate access, QR-verified messaging, emergency contact flows and briefings.",
    hash: "family-staff",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="services-grid">
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.hash} {...feature} />
      ))}
    </div>
  );
}
