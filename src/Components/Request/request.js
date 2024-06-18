import React from "react";
import "./request.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import phone from "../../assets/images/phone-hand.png";
import lock from "../../assets/icons/lock.png";

export const Request = () => {
  return (
    <section className="request-container">
      <Row className="d-flex justify-content-between">
        <Col lg={5}>
          <div className="request-left-container d-flex align-items-center">
            <div>
              <h1 className="request-header">
                Request a <span className="blue-highlight-text">fast</span>
              </h1>
              <h1>quote today</h1>
              <p className="request-paragraph">
                We are industry leaders providing quality plumbing, drainage,
                hotwater, and roofing-related services to our Community of
                Customer. We're ready to assist you with all your needs. From
                routine maintenance to emergency repairs and quality
                installations, we have you covered.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={5}>
          <div className="request-right-container d-flex justify-content-between">
            <div className="text-container d-flex align-items-center text-center">
                <div className="text-container-border">
                    <div>
                        <h1>$0</h1>
                    </div>
                    <div>
                        <h4>No Call</h4>
                        <h4>Out Fees*</h4>
                    </div>
                </div>
            </div>
            <div className="hand-phone-container">
              <img
                className="phone-img img-fluid"
                src={phone}
                alt="Phone Hand"
              />
            </div>
          </div>
        </Col>
      </Row>
      <div className="quote-form">
        <div className="quote-form-content">
          <div className="quote-form-title d-flex align-items-center justify-content-evenly">
            <h3>
              Describe your{" "}
              <span className="blue-highlight-text">plumbing</span> requirement
              to get a quote
            </h3>
            <h5 className="d-flex align-items-center"><img src={lock} alt="Lock" /> {" "}Your information is 100% safe and secure</h5>
            <h5 className="d-flex align-items-center"><img src={lock} alt="Lock" /> {" "}You will receive a response within minutes</h5>
          </div>
          <Form>
            <Row>
              <Col lg={3}>
                <Form.Control className="input-field" type="text" placeholder="Name" />
              </Col>
              <Col lg={3}>
                <Form.Control className="input-field" type="text" placeholder="Phone Number" />
              </Col>
              <Col lg={3}>
                <Form.Control className="input-field" type="email" placeholder="Email Address" />
              </Col>
              <Col lg={3}>
                <Form.Control className="input-field" type="text" placeholder="Suburb" />
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <Form.Control className="input-field" type="text" placeholder="Service Type:" />
              </Col>
              <Col lg={6}>
                <Form.Control className="input-field" type="text" placeholder="Describe your plumbing job" />
              </Col>
              <Col lg={3}>
                <Button className="quote-button">Get a free quote</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </section>
  );
};
