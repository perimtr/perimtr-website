import React from "react";
import FeaturesGrid from "./FeaturesBox";
import Testimonials from "./Testimonials";
import testimonialsPhoto from "../assets/testimonials.jpg";

export default function ServicesSection() {
  return (
    <section id="section-services" className="text-center page-section pt-0">
      <div className="section m-0">
        <div className="container">
          <h2 className="mx-auto mb-5 font-body" style={{ maxWidth: "700px", fontSize: "40px" }}>
            Our Services
          </h2>
          <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
            <h2 className="mb-0 fw-light ls-1">
              Calm, private, concierge-level help for homes and small executive offices. Explore Perimtr&apos;s core
              services below.
            </h2>
          </div>
        </div>
      </div>

      <div className="row align-items-stretch">
        <FeaturesGrid />
      </div>

      <div className="section dark m-0 services-cta-break">
        <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
          <h2 className="mb-0 fw-light ls-1">
            Interested in Our Services? Get a{" "}
            <a
              href="#contact-form"
              data-scrollto="#contact-form"
              data-offset="140"
              data-easing="easeInOutExpo"
              data-speed="1250"
              className="button button-border button-circle button-light button-large my-0"
              style={{ position: "relative", top: "-3px" }}
            >
              Quote
            </a>
          </h2>
        </div>
      </div>

      <div id="section-testimonials" className="section parallax scroll-detect m-0 dark" style={{ padding: "150px 0" }}>
        <img src={testimonialsPhoto} className="parallax-bg" alt="" aria-hidden="true" />

        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6">
              <Testimonials autoPlay interval={5000} showArrows={false} showDots={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
