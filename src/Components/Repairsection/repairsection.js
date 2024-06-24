import React, { useEffect, useRef } from "react";
import "./repair-section.css";
import { Col, Row } from "react-bootstrap";
import payment from "../../assets/images/payment-card.png";

export const Repairsection = () => {
  const repariPaymentContainer = useRef(null);
  const repairPaymentOptionsContainer = useRef(null);
  const repairSectionRef = useRef(null);

  const updatePaddingBottom = () => {
    if (
      repariPaymentContainer.current &&
      repairPaymentOptionsContainer.current
    ) {
      const totalHeight =
        repariPaymentContainer.current.offsetHeight +
        repairPaymentOptionsContainer.current.offsetHeight;
      repairSectionRef.current.style.paddingBottom = `${totalHeight}px`;
      // console.log("The total height of the two containers is: ", totalHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updatePaddingBottom);
    document.addEventListener("load", updatePaddingBottom);

    updatePaddingBottom();
  });

  return (
    <section className="repair-section" ref={repairSectionRef}>
      <div className="repair-section-absolute-position">
        <div className="repair-payment-container" ref={repariPaymentContainer}>
          <Row className="repair-payment-row-container d-flex flex-wrap">
            <Col
              lg={3}
              className="repair-payment-stretch-container repair-payment-logo-container d-flex justify-content-center align-items-center"
            >
              <div className="repair-section-logo d-flex justify-content-center align-items-center">
                <h1>LOGO</h1>
              </div>
            </Col>
            <Col
              lg={6}
              className="repair-payment-stretch-container repair-payment-stretch-container-show "
            >
              <Row className="payment-description d-flex justify-content-center align-items-center">
                <Col lg={12} className="payment-description-plan text-center">
                  <h3>Ask about our payment plans</h3>
                </Col>
                <Col
                  lg={12}
                  className="payment-description-pay-later text-center mb-4"
                >
                  <h1>Repair now, Pay Later</h1>
                </Col>
                <Col
                  lg={12}
                  className="payment-description-contact text-center d-flex justify-content-center align-items-center"
                >
                  <div className="payment-description-phone">
                    <h3>1300 000 000</h3>
                  </div>
                  <div className="payment-description-quote">
                    <h3>Get a free quote</h3>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="payment-description-card">
              <img
                className="payment-card-img img-fluid"
                src={payment}
                alt="Payment Card"
              />
            </Col>
          </Row>
          <div
            className="repair-payment-options-container d-flex justify-content-between flex-wrap"
            ref={repairPaymentOptionsContainer}
          >
            {/* <Row className="d-flex flex-wrap"> */}
            {/* <Col lg={4}> */}
            <div className="repair-payment-option-i d-flex justify-content-between align-items-center">
              <div className="repair-payment-option-i-title">
                <h1>01</h1>
              </div>
              <div className="repair-payment-option-i-description">
                <h1>Do it now</h1>
                <p>Big jobs or little jobs, repaired today.</p>
              </div>
              <div className="repair-payment-option-separator repair-payment-option-separator-hide"></div>
            </div>
            {/* </Col>
              <Col lg={4}> */}
            <div className="repair-payment-option-ii d-flex justify-content-between align-items-center">
              <div className="repair-payment-option-ii-title">
                <h1>02</h1>
              </div>
              <div className="repair-payment-option-ii-description">
                <h1>Pay later</h1>
                <p>Pay if off in small, affordable installments.</p>
              </div>
              <div className="repair-payment-option-separator repair-payment-option-separator-hide"></div>
            </div>
            {/* </Col>
              <Col lg={4}> */}
            <div className="repair-payment-option-iii d-flex justify-content-between align-items-center">
              <div className="repair-payment-option-iii-title">
                <h1>03</h1>
              </div>
              <div className="repair-payment-option-iii-description">
                <h1>No interest ever</h1>
                <p>Talk to us to find out more.</p>
              </div>
            </div>
            {/* </Col>
            </Row> */}
          </div>
        </div>
      </div>
    </section>
  );
};
