import React from "react";
import "./plumbing-service.css";
import { Card, Col, Row } from "react-bootstrap";
import { Offerthumbnail } from "../Offerthumbnail/offerthumbnail";
import dux from "../../assets/icons/dux.png";
import parisi from "../../assets/icons/parisi.png";
import grohe from "../../assets/icons/grohe.png";
import aquamax from "../../assets/icons/aquamax.png";
import rheem from "../../assets/icons/rheem.png";
import thermann from "../../assets/icons/thermann.png";
import vulcan from "../../assets/icons/vulcan.png";

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
            <Col lg={12}>
              <p className="plumbing-service-offer-paragraph text-center">
                We are industry leaders providing quality plumbing, drainage,
                hotwater, and roofing-related services to our Community of
                Customers.
              </p>
            </Col>
          </Row>
        </div>
        <div className="plumbing-service-offer-thumbnail d-inline-flex flex-wrap">

        <Offerthumbnail description={"BLOCKED DRAINS"} />
        <Offerthumbnail description={"HOTWATER"} />
        <Offerthumbnail description={"LEAKING PIPES"} />
        <Offerthumbnail description={"GAS FITTING"} />
        <Offerthumbnail description={"LEAKING TAPS"} />
        <Offerthumbnail description={"PIPE REUNING"} />
        <Offerthumbnail description={"LEAKING TOILETS"} />
        <Offerthumbnail description={"LEAK DETECTION"} />
          {/* <Row>
            <Col xl={3} lg={4}>
              <Offerthumbnail description={"BLOCKED DRAINS"} />
            </Col>
            <Col xl={3} lg={4}>
              <Offerthumbnail description={"HOTWATER"} />
            </Col>
            <Col xl={3} lg={4}>
              <Offerthumbnail description={"LEAKING PIPES"} />
            </Col>
            <Col xl={3} lg={4}>
              <Offerthumbnail description={"GAS FITTING"} />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xl={3} lg={4}>
              <Offerthumbnail description={"LEAKING TAPS"} />
            </Col>
            <Col xl={3} lg={4}>
              <Offerthumbnail description={"PIPE REUNING"} />
            </Col>
            <Col xl={3} lg={4}>
              <Offerthumbnail description={"LEAKING TOILETS"} />
            </Col>
            <Col xl={3} lg={4}>
              <Offerthumbnail description={"LEAK DETECTION"} />
            </Col>
          </Row> */}
        </div>
      </div>
      <div className="our-brands mt-5">
        <div className="our-brands-heading d-flex flex-wrap align-items-center justify-content-between">
          <div className="our-brands-title">
            <h3>We use well known brands including</h3>
          </div>
          <div className="our-brands-title-separator"></div>
        </div>
        <div className="our-brands-logo d-flex flex-wrap justify-content-around mt-4">
            <div className="our-brands-logo-icons">
              <img className="our-brands-logo-img img-fluid" src={vulcan} alt="Vulcan" />
            </div>
            <div className="our-brands-logo-icons">
              <img className="our-brands-logo-img img-fluid" src={thermann} alt="Thermann" />
            </div>
            <div className="our-brands-logo-icons">
              <img className="our-brands-logo-img img-fluid" src={parisi} alt="Parisi" />
            </div>
            <div className="our-brands-logo-icons">
              <img className="our-brands-logo-img img-fluid" src={grohe} alt="Grohe" />
            </div>
            <div className="our-brands-logo-icons">
              <img className="our-brands-logo-img img-fluid" src={dux} alt="Dux" />
            </div>
            <div className="our-brands-logo-icons">
              <img className="our-brands-logo-img img-fluid" src={aquamax} alt="Aquamax" />
            </div>
            <div className="our-brands-logo-icons">
              <img className="our-brands-logo-img img-fluid" src={rheem} alt="Rheem" />
            </div>
        </div>
      </div>
     
    </section>
  );
};
