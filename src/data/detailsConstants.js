export const SERVICE_SECTIONS = [
  {
    id: "home-network",
    title: "Home Network Overhaul",
    blurb:
      "Audit and segment Wi-Fi and wired networks; guest & IoT isolation, DNS filtering, and safe remote access.",
    icon: "monitor",
    points: [
      { p: "Segment trusted devices from guests and IoT with VLANs and SSID policy." },
      { p: "Deploy secure DNS and content filtering without cloud lock-in." },
      { p: "Harden remote access with keys/passkeys; remove risky port forwards." },
    ],
  },
  {
    id: "device-hardening",
    title: "Device Hardening",
    blurb:
      "iPhone, iPad, macOS, Windows — passkeys, 2FA, encrypted storage, and a safe update policy.",
    icon: "shield",
    points: [
      { p: "Set baseline protections: full-disk encryption, auto-lock, strong auth." },
      { p: "Migrate to passkeys + hardware-backed 2FA; tidy legacy passwords." },
      { p: "Create a quiet, repeatable update and backup routine." },
    ],
  },
  {
    id: "private-file-flow",
    title: "Private File Flow",
    blurb:
      "Local-first storage & encrypted backups you control. No unnecessary third-party vendors.",
    icon: "layers",
    points: [
      { p: "Map critical files, then reduce cloud exposure with local-first sync." },
      { p: "Turn on end-to-end encryption for archives and off-site copies." },
      { p: "Test restores routinely; document a minimal ‘break-glass’ plan." },
    ],
  },
  {
    id: "travel-events",
    title: "Travel & Events",
    blurb:
      "Temporary hardened setups, disposable networks, roaming privacy kits, and post-event hygiene.",
    icon: "cube",
    points: [
      { p: "Provision a travel profile with reduced attack surface and temp devices." },
      { p: "Use disposable SSIDs and captive portal segregation when necessary." },
      { p: "Run post-event cleanup: rotation, key checks, and data hygiene." },
    ],
  },
  {
    id: "concierge-monitoring",
    title: "Concierge Monitoring",
    blurb:
      "Lightweight health signals (uptime, backups, patches) — no invasive tracking or analytics.",
    icon: "signal",
    points: [
      { p: "Only the essentials: status of backups, storage, and patch cadence." },
      { p: "No content collection, no intrusive telemetry — privacy by default." },
      { p: "Private reports with clear next actions instead of dashboards." },
    ],
  },
  {
    id: "family-staff",
    title: "Family & Staff Onboarding",
    blurb:
      "Role-appropriate access, QR-verified messaging, emergency contact flows and briefings.",
    icon: "eye",
    points: [
      { p: "Right-sized access for spouses, family, assistants and vendors." },
      { p: "QR-verified messaging for sensitive coordination (with view-once media)." },
      { p: "Emergency comms cards and escalation playbooks." },
    ],
  },
];

/* APP sections (data-driven, like SERVICE_SECTIONS) */
export const APP_SECTIONS = [
  {
    id: "qr-trust-screens",
    theme: "qr",
    kicker: "QR Trust Screens",
    title: "Face-to-face verification of public keys",
    icon: "eye",
    lede:
      "Contacts confirm identity by scanning each other’s QR code. Keys are pinned locally and mismatches are flagged to stop impostors.",
    points: [
      { h: "Why it matters", p: "Bootstraps trust out-of-band so MITM attackers can’t swap keys during first contact." },
      { h: "How it works", p: "Each profile renders a QR of the long-term public key. A mutual scan stores fingerprints on both devices." },
      { h: "Key changes", p: "On key rotation, contacts get an alert and must re-scan to re-establish trust." },
    ],
  },
  {
    id: "view-once",
    theme: "view",
    kicker: "View-Once & Expiry",
    title: "Self-destructing content with timers",
    icon: "shield",
    lede:
      "Media and files can auto-purge on open or after a window you set. Backup-excluded storage wipes after expiry.",
    points: [
      { h: "Open-to-erase", p: "“View once” removes plaintext and ciphertext fragments after first render." },
      { h: "Timed expiry", p: "Per-item TTL; peers reconcile expirations even if offline for a while." },
      { h: "Background protections", p: "Blocks system previews and blurs while the app is backgrounded." },
    ],
  },
  {
    id: "serverless",
    theme: "srv",
    kicker: "Serverless by Design",
    title: "Direct device-to-device with optional relays",
    icon: "layers",
    lede:
      "When peers are online, messages go direct. Optional relays enable mesh/store-and-forward without central custody.",
    points: [
      { h: "No central inbox", p: "Eliminates server-side retention; relays only hold encrypted packets briefly." },
      { h: "Mesh-friendly", p: "Multi-hop routing with quotas prevents flooding; works on constrained links." },
      { h: "Auditability", p: "Relays see only transport envelopes—no contact graphs." },
    ],
  },
  {
    id: "local-secrets",
    theme: "local",
    kicker: "Local-Only Secrets",
    title: "Keys locked to the device’s secure hardware",
    icon: "cube",
    lede:
      "Private keys live in Secure Enclave/Keychain and cannot be exported. Crypto ops use hardware-backed primitives where available.",
    points: [
      { h: "Zero-exfil stance", p: "No cloud escrow. Recovery uses user-held secrets." },
      { h: "Per-device isolation", p: "Each device has its own keypair; compromise of one doesn’t unlock another." },
      { h: "Backup aware", p: "Sensitive stores are non-migratable; exports require explicit user action." },
    ],
  },
  {
    id: "replay",
    theme: "replay",
    kicker: "Replay Protection",
    title: "Per-message MACs and sequence numbers",
    icon: "monitor",
    lede:
      "Every packet carries a monotonic counter and an AEAD tag so tampering and duplicates are rejected pre-decryption.",
    points: [
      { h: "Out-of-order safe", p: "Sliding windows tolerate reordering while blocking replays." },
      { h: "Binding", p: "MACs bind to sender key and context (conversation id, chunk id)." },
      { h: "Mitigation logs", p: "Local-only notes forensics without leaking telemetry." },
    ],
  },
  {
    id: "background-safety",
    theme: "bgsec",
    kicker: "Background Safety",
    title: "Best-effort screenshot hardening & blur-on-background",
    icon: "signal",
    lede:
      "When content is sensitive, the app blurs during app-switch, blocks previews/shares, and applies download controls.",
    points: [
      { h: "Sensitive mode", p: "Reduces surface area for OS-level captures; caches less aggressively." },
      { h: "Policy hooks", p: "Per-message flags drive export controls and retention rules." },
      { h: "User agency", p: "Clear affordances for “view once,” “no download,” and quick purge." },
    ],
  },
];
