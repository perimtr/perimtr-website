import React from "react";
import AppFeaturesRow from "./AppFeaturesBox";

export default function AppSection() {
  return (
    <section id="section-app" className="text-center page-section pt-0">
      <div className="section m-0">
        <div className="container">
          <h2 className="mx-auto mb-5 font-body" style={{ maxWidth: "700px", fontSize: "40px" }}>
            Perimtr<sup>&trade;</sup> Chat
          </h2>
          <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
            <h2 className="mb-0 fw-light ls-1">
              A private, peer‑to‑peer messenger for households and close teams—no central server, device‑bound keys,
              and QR‑verified trust.
            </h2>
          </div>
        </div>
      </div>

      <AppFeaturesRow />
    </section>
  );
}
