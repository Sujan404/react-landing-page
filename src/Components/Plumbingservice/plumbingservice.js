import React from "react";
import "./plumbing-service.css";
import { Col, Row } from "react-bootstrap";

export const Plumbingservice = () => {
  return (
    <section className="plumbing-service-container">
      <div className="plumbing-service-content-container d-flex justify-content-center">
        <div className="plumbing-service-content">
          <div className="plumbing-service-bonus-container d-flex align-items-center justify-content-center">
            <div className="plumbing-service-discount-border plumbing-service-discount d-flex align-items-center">
              <div className="plumbing-service-discount-container d-flex align-items-center">
                <h3>
                  <sup>$</sup>50
                </h3>
                <span className="text-rotate">OFF</span>
              </div>
            </div>
            <div className="plumbing-service-discount-right d-flex align-items-center">
              <h3>
                When you <br />
                book online
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="plumbing-service-offer">
        <div className="plumbing-service-offer-intro-container d-flex align-items-center justify-content-center">
          <Row className="d-flex justify-content-center">
            <div className="plumbing-service-offer-heading text-center">
              <h1>
                Plumbing <span className="blue-highlight-text">services</span>{" "}
                we offer
              </h1>
            </div>
            <Col lg={6}>
              <p className="plumbing-service-offer-paragraph text-center">
                We are industry leaders providing quality plumbing, drainage,
                hotwater, and roofing-related services to our Community of
                Customers.
              </p>
            </Col>
          </Row>
        </div>
        <div className="plumbing-service-offer-thumbnail">

        </div>
      </div>
    </section>
  );
};
