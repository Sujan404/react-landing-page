import React from "react";
import "./join-plumbing.css";
import { Col, Row } from "react-bootstrap";

export const Joinplumbing = () => {
  return (
    <section className="join-plumbing-section">
      <div className="p-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={4}>
            <div className="join-plumbing-section-logo d-flex justify-content-center align-items-center">
                <h1>LOGO</h1>
            </div>
          </Col>
          <Col lg={8}>
            <div className="join-plumbing-section-description">
              <h1>
                At the end of the day, our goal is simple: to provide reliable,
                exceptional plumbing services that excedd expectations
              </h1>
              <p>
                This is dedication to customer satisfaction, along with our
                experience and technical expertise, is what set us apart
              </p>
              <p>
                Get started today with <u>plumbing example</u>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
