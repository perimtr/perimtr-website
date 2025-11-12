import { Link } from "react-router-dom";

const APP_FEATURES = [
  {
    bg: "#3c7dbf",
    icon: "bi-qr-code-scan",
    title: "QR Trust Screens",
    blurb:
      "Verify contacts face-to-face. Public keys confirmed via QR scan, stopping impostors.",
    hash: "qr-trust-screens",
  },
  {
    bg: "#1f3c63",
    icon: "bi-hourglass-split",
    title: "View-Once & Expiry",
    blurb:
      "Optionally auto-purge media and files after open or after a set window.",
    hash: "view-once",
  },
  {
    bg: "#e6513e",
    icon: "bi-hdd-network",
    title: "Serverless by Design",
    blurb:
      "Direct device-to-device with optional relay hooks (mesh/store-and-forward) when peers are offline.",
    hash: "serverless",
  },
  {
    bg: "#197278",
    icon: "bi-shield-lock",
    title: "Local-Only Secrets",
    blurb:
      "Keys locked by the device’s secure hardware and never leave your control.",
    hash: "local-secrets",
  },
  {
    bg: "#105f5b",
    icon: "bi-shield-check",
    title: "Replay Protection",
    blurb:
      "Per-message MACs and sequence numbers help block tampering and replays.",
    hash: "replay",
  },
  {
    bg: "#6b4fd1",
    icon: "bi-eye-slash-fill",
    title: "Background Safety",
    blurb:
      "Best-effort screenshot hardening, blur-on-background, and download controls for sensitive items.",
    hash: "background-safety",
  },
];

function AppFeatureCard({ bg, icon, title, blurb, hash }) {
  return (
    <article className="app-card" style={{ "--app-card-bg": bg }}>
      <div className="app-card-copy">
        <p className="app-card-eyebrow">Perimtr Chat</p>
        <h3>{title}</h3>
        <p>{blurb}</p>
      </div>

      <Link
        to={`/app-details#${hash}`}
        className="app-card-cta"
      >
        Read More
      </Link>

      <i className={`${icon} app-card-glyph`} aria-hidden="true" />
    </article>
  );
}

export default function AppFeaturesRow() {
  return (
    <div className="app-grid">
      {APP_FEATURES.map((feature) => (
        <AppFeatureCard key={feature.hash} {...feature} />
      ))}
    </div>
  );
}
