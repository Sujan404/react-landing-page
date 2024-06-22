import React from "react";
import "./footer.css";
import { Col, Row } from "react-bootstrap";
import mediaco from "../../assets/icons/Mediaco-logo.png";

export const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-content-container">
        <Row className="flex-wrap">
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="footer-logo-container d-flex justify-content-center align-items-center">
              <h1>LOGO</h1>
            </div>
          </Col>
          <Col lg={8}>
          <div className="footer-options d-flex flex-wrap justify-content-between">
            {/* <Row>
              <Col lg={4}> */}
              <div>
                <div className="footer-topic">
                  <h1>Services</h1>
                  <div className="footer-topic-dash"></div>
                </div>
                <div className="footer-topic-links">
                  <p>Blocked Drains</p>
                  <p>Hot Water</p>
                  <p>Repairs & Maintenance</p>
                  <p>View All Services</p>
                </div>
                </div>
              {/* </Col>
              <Col lg={4}> */}
              <div>
                <div className="footer-topic">
                  <h1>Quick links</h1>
                  <div className="footer-topic-dash"></div>
                </div>
                <div className="footer-topic-links">
                  <p>Services</p>
                  <p>About us</p>
                  <p>FAQ</p>
                </div>
                </div>
              {/* </Col>
              <Col lg={4}> */}
              <div>
                <div className="footer-topic">
                  <h1>Contact us</h1>
                  <div className="footer-topic-dash"></div>
                </div>
                <div className="footer-topic-links">
                  <p>p:1300 000 000</p>
                  <p>E:info@plumber.com.au</p>
                  <div className="quote-banner-text">
                    <h5>Get a free quote</h5>
                  </div>
                </div>
                </div>
              {/* </Col>
            </Row> */}
            </div>
          </Col>
        </Row>
        <div className="footer-separator"></div>
        <div className="footer-end d-flex flex-wrap justify-content-between align-items-center text-center">
            <div>
                <p>©2023 .All rights reserved. here's our Terms and Conditions and Privacy Policy.</p>
            </div>
            <div className="footer-margin d-flex flex-wrap justify-content-center align-items-center">
                <div className="mr-3">
                    <p>Services by</p>
                </div>
                <div className="footer-logo">
                    <img className="img-fluid" src={mediaco} alt="Mediaco Logo"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
