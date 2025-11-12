import React, { useMemo } from "react";
import DetailsShowcase from "../components/DetailsShowcase";
import { SERVICE_SECTIONS } from "../data/detailsConstants";

import "../styles/site.css";
import "../styles/details.css";

export default function ServicesDetails() {
  const items = useMemo(
    () =>
      SERVICE_SECTIONS.map((section) => ({
        id: section.id,
        heading: section.title,
        body: section.blurb,
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
      eyebrow="Services"
      title="Discreet Services"
      subtitle="We provide amazing, custom security solutions for private residences, family offices, and trusted staff."
      items={items}
    />
  );
}
