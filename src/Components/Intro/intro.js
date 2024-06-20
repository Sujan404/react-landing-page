import React, { useEffect, useRef, useState } from "react";
import "./intro.css";
import { Card, Col, Row } from "react-bootstrap";
import technician from "../../assets/images/technician-banner.png";
import plumber from "../../assets/images/plumber.jpg";
import Ratingstars from "../Ratingstars/ratingstars";
import settingssvg from "../../assets/icons/settings-tools.svg";

export const Customintro = () => {
  return (
    <section className="intro-body">
      <div className="plumber-img-container">
        <img src={plumber} alt="Plumber" className="img-fluid plumber-img" />
        <Row>
          <Col lg={6}>
            <div className="intro-content">
              <h1>YOUR LOCAL</h1>
              <h1 className="intro-hotwater">HOTWATER</h1>
              <h1>EXPERTS</h1>
              <div className="price-content">
                <Row>
                  <Col lg={12}>
                    <ul className="list-unstyled">
                      <li className="price-content-list-i d-flex">
                        <div className="list-img-container">
                          <img
                            className="list-img img-fluid"
                            src={settingssvg}
                            alt="Settings Tools"
                          />
                        </div>
                        <div>
                          <p>Upfront pricing</p>
                          <small>
                            Know the price of the job before we start.
                          </small>
                        </div>
                      </li>
                      <li className="price-content-list-ii d-flex">
                        <div className="list-img-container">
                          <img
                            className="list-img img-fluid"
                            src={settingssvg}
                            alt="Settings Tools"
                          />
                        </div>
                        <div>
                          <p>$0 Call out </p>
                          <small>No callout fees</small>
                        </div>
                      </li>
                      <li className="price-content-list-iii d-flex">
                        <div className="list-img-container">
                          <img
                            className="list-img img-fluid"
                            src={settingssvg}
                            alt="Settings Tools"
                          />
                        </div>
                        <div>
                          <p>$50 off for online bookings </p>
                          <small>Book online to receive a discount</small>
                        </div>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="technician-banner">
        <img
          className="technician-img img-fluid"
          src={technician}
          alt="Technician Banner"
        ></img>
        <div className="service-rating">
          <Card className="service-rating-facebook">
            <Card.Body>
              <Card.Title>4.9</Card.Title>
              <Card.Text className="text-center">
                <Ratingstars />
                <small>Average Rating</small>

                <h3>Facebook</h3>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="service-rating-google">
            <Card.Body>
              <Card.Title>5.0</Card.Title>
              <Card.Text className="text-center">
                <Ratingstars />
                <small>Average Rating</small>

                <h3>Google</h3>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="emergency-services">
            <Card.Body>
              <Card.Title className="text-center">24 h</Card.Title>
              <Card.Text className="text-center">
                <small>Emergency Services</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Customintro;
