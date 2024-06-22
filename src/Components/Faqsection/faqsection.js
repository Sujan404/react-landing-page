import React from "react";
import "./faqs-section.css";
import { Row, Col } from "react-bootstrap";
import { Faqstable } from "../Faqstable/faqstable";

export const Faqsection = () => {
  return (
    <section>
      <div className="faqs-section">
        <div>
          <Row>
            <Col lg={12} className="faqs-section-title mb-3">
              <h1>
                Plumber sydney <span className="faqs-blue-text">faqs</span>
              </h1>
            </Col>
            <Col lg={12} className="faqs-section-description">
              <h3>
                We are industry leaders providing quality plumbing, drainage,
                hotwater, and roofing-related services to our Community of
                Customers. We're ready to assist you with all your needs. From
                routine maintenance to emergency repairs and quality
                installations, we have you covered.
              </h3>
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <Row>
            <Col lg={6}>
              <Faqstable description={"What types of services do you offer?"} />
            </Col>
            <Col lg={6}>
              <Faqstable
                description={"Do you provide emergency plumbing services?"}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Faqstable description={"How do I schedule an appoitment?"} />
            </Col>
            <Col lg={6}>
              <Faqstable description={"How do you charge for your services?"} />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Faqstable description={"What areas do you service?"} />
            </Col>
            <Col lg={6}>
              <Faqstable description={"Are you licensed and insured"} />
            </Col>
          </Row>

          <div className="quote-banner-right-content d-flex flex-wrap justify-content-center mt-5">
            <div className="quote-banner-phone faqs-phone">
              <h5>1300 000 000</h5>
            </div>
            <div className="quote-banner-text faqs-quote">
              <h5>Get a free quote</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
