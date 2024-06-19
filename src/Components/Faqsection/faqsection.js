import React from "react";
import "./faqs-section.css";
import {Row, Col} from "react-bootstrap";

export const Faqsection = () => {
  return (
    <section>
      <div className="faqs-section">
        <div>
          <Row>
            <Col lg={12}>
              <h1>
                Plumber sydnery <span className="faqs-blue-text">faqs</span>
              </h1>
            </Col>
            <Col lg={12}>
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
        <div></div>
      </div>
    </section>
  );
};
