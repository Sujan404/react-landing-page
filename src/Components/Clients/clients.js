import React from "react";
import "./clients.css";
import { Col, Row, Form, Button } from "react-bootstrap";
import quoteSign from "../../assets/icons/quote.svg";
import lock from "../../assets/icons/lock.png";

export const Clients = () => {
  return (
    <section className="clients-container">
      <div className="clients-container-content">
        {/* <Row className="mb-5">
          <Col
            lg={12} */}
        <div className="clients-section-title d-flex justify-content-center align-items-center text-center">
          <h1>What our clients say.</h1>
        </div>
        {/* </Row> */}
        {/* <Row>
          <Col lg={4} className="text-center"> */}
        <div className="client-quote-content-container d-flex flex-wrap justify-content-between align-items-center text-center mt-5">
          <div className="client-quote-content client-quote-content-left text-center">
            <img
              className="quote-icon-container img-fluid"
              src={quoteSign}
              alt="Quote sign"
            />
            <h2>John Smith</h2>
            <p>
              This is placeholder text This is placeholder text This is
              placeholder text This is placeholder text This is placeholder text
              This is placeholder text This is placeholder text
            </p>
            <p className="clients-rating-star">⭐⭐⭐⭐⭐</p>
            <h3>Abbotsford</h3>
          </div>
          {/* </Col>
          <Col lg={4} className="text-center"> */}
          <div className="client-quote-content text-center">
            <img
              className="quote-icon-container img-fluid"
              src={quoteSign}
              alt="Quote sign"
            />
            <h2>John Smith</h2>
            <p>
              This is placeholder text This is placeholder text This is
              placeholder text This is placeholder text This is placeholder text
              This is placeholder text This is placeholder text
            </p>
            <p className="clients-rating-star">⭐⭐⭐⭐⭐</p>
            <h3>Five Dock</h3>
          </div>
          {/* </Col>
          <Col lg={4} className="text-center"> */}
          <div className="client-quote-content client-quote-content-right text-center">
            <img
              className="quote-icon-container img-fluid"
              src={quoteSign}
              alt="Quote sign"
            />
            <h2>John Smith</h2>
            <p>
              This is placeholder text This is placeholder text This is
              placeholder text This is placeholder text This is placeholder text
              This is placeholder text This is placeholder text
            </p>
            <p className="clients-rating-star">⭐⭐⭐⭐⭐</p>
            <h3>Ultimo</h3>
          </div>
          {/* </Col> */}
          {/* </Row> */}
        </div>
      </div>
      <div className="booking-container">
        <div className="booking-container-min-1400-show">
          <Row>
            <Col lg={8}>
              <Row>
                <Col className="booking-container-title">
                  <h1>
                    Book a{" "}
                    <span className="booking-container-blue-text">plumber</span>{" "}
                    near you
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="text"
                    placeholder="Full Name*"
                  />
                </Col>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="number"
                    placeholder="Phone Number*"
                  />
                </Col>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="email"
                    placeholder="Email Address*"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="text"
                    placeholder="Suburb"
                  />
                </Col>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="text"
                    placeholder="Service type"
                  />
                </Col>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="datetime"
                    placeholder="Date & Time"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={8}>
                  <Form.Control
                    className="input-field"
                    type="text"
                    placeholder="Additional Information"
                  />
                </Col>
                <Col lg={4}>
                  <Button className="quote-button">Get a free quote</Button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <h5 className="booking-info d-flex align-items-center">
                    <img className="img-fluid" src={lock} alt="Lock" /> Your
                    information is 100% safe and secure
                  </h5>
                </Col>
                <Col lg={4}>
                  <h5 className="booking-info d-flex align-items-center">
                    <img className="img-fluid" src={lock} alt="Lock" /> You will
                    receive a response within minutes
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="d-flex justify-content-center align-items-center">
              <div className="map-container d-flex justify-content-center align-items-center">
                <h1>Map</h1>
              </div>
            </Col>
          </Row>
        </div>
        <div className="booking-container-max-1400-show">          
          <Row>
            <Col lg={12}>
              <Row>
                <Col className="booking-container-title text-center">
                  <h1>
                    Book a{" "}
                    <span className="booking-container-blue-text">plumber</span>{" "}
                    near you
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="text"
                    placeholder="Full Name*"
                  />
                </Col>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="number"
                    placeholder="Phone Number*"
                  />
                </Col>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="email"
                    placeholder="Email Address*"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="text"
                    placeholder="Suburb"
                  />
                </Col>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="text"
                    placeholder="Service type"
                  />
                </Col>
                <Col lg={4}>
                  <Form.Control
                    className="input-field"
                    type="datetime"
                    placeholder="Date & Time"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={8}>
                  <Form.Control
                    className="input-field"
                    type="text"
                    placeholder="Additional Information"
                  />
                </Col>
                <Col lg={4}>
                  <Button className="quote-button">Get a free quote</Button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={4}>
                  <h5 className="booking-info d-flex align-items-center">
                    <img className="img-fluid" src={lock} alt="Lock" /> Your
                    information is 100% safe and secure
                  </h5>
                </Col>
                <Col lg={4}>
                  <h5 className="booking-info d-flex align-items-center">
                    <img className="img-fluid" src={lock} alt="Lock" /> You will
                    receive a response within minutes
                  </h5>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="map-container d-flex justify-content-center align-items-center mt-5">
                <h1>Map</h1>
              </div>
        </div>
      </div>
    </section>
  );
};
