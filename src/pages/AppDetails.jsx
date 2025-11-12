// src/pages/AppDetails.jsx
import React, { useMemo } from "react";
import DetailsShowcase from "../components/DetailsShowcase";
import { APP_SECTIONS } from "../data/detailsConstants";

import "../styles/site.css";
import "../styles/details.css";

export default function AppDetailsPage() {
  const items = useMemo(
    () =>
      APP_SECTIONS.map((section) => ({
        id: section.id,
        heading: section.title,
        body: section.lede,
        kicker: section.kicker,
        icon: section.icon,
        details: section.points?.map((point) => ({
          title: point.h,
          copy: point.p,
        })),
      })),
    []
  );

  return (
    <DetailsShowcase
      eyebrow="The App"
      title="App Security Details"
      subtitle="A concise rundown of the capabilities we harden for private households and discreet teams."
      items={items}
    />
  );
}
