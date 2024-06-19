import React from "react";
import "./quote-banner.css";

export const Quotebanner = () => {
  return (
    <section className="quote-banner-container">
      <div className="quote-banner d-flex align-items-center">
        <div className="quote-banner-left-content">
          <h1>Get a free onsite quote</h1>
        </div>
        <div className="quote-banner-right-content d-flex">
          <div className="quote-banner-phone">
            <h5>1300 000 000</h5>
          </div>
          <div className="quote-banner-text">
            <h5>Get a free quote</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
