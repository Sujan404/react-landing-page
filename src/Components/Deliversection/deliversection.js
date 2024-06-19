import React from "react";
import "./deliver-section.css";
import { Col, Row } from "react-bootstrap";
import document from "../../assets/icons/document.svg";
import setting from "../../assets/icons/settings-tools.svg";
import plumber2 from "../../assets/images/plumber-ii.png";

export const Deliversection = () => {
  return (
    <section className="deliver-section-container">
      <Row>
        <Col lg={6}>
          <div className="deliver-section-right-container">
            <div className="deliver-section-title d-flex justify-content-start">
              <h1>What we deliver</h1>
            </div>
            <div className="deliver-section-description">
              <p>
                As a family-owned business, we take immense pride in offering a
                24/7 Service that sets us apart from the rest. With a focus on
                transparency and customer convenience, we believe in keeping
                things simple and hassle-free for our valued customers. That's
                why we proudly offer a $0 callout, upfront pricing & lifetime
                labour warranty, ensuring that you know exactly what to expect
                right from the start.
              </p>
            </div>
            <div className="deliver-section-card d-flex justify-content-between mt-5">
              <div className="deliver-section-card-i">
                <div className="deliver-section-i-img-container d-flex justify-content-between align-items-center">
                  <div className="deliver-section-img">
                    <img
                      className="deliver-section-img-icon img-fluid"
                      src={setting}
                      alt="Tools"
                    />
                  </div>
                  <div>
                    <h3>Lifetime labour warranty</h3>
                  </div>
                </div>
                <p>
                  We pride ourselves on our workmanship and guarantee our
                  service.
                </p>
              </div>
              <div className="deliver-section-card-ii">
                <div className="deliver-section-ii-img-container d-flex justify-content-between align-items-center">
                  <div className="deliver-section-img">
                    <img
                      className="deliver-section-img-icon  img-fluid"
                      src={setting}
                      alt="Paper check"
                    />
                  </div>
                  <div>
                    <h3>Fully licensed & insured</h3>
                  </div>
                </div>
                <p>
                  Our professionals are reliable and provide compliance
                  certificate for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};
