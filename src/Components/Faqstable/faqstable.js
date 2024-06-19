import React from "react";
import "./faqstable.css";
import plusSign from "../../assets/icons/plus-sign.svg";

export const Faqstable = ({description}) => {
  return (
    <div className="faqs-table-box d-flex justify-content-between align-items-center">
        <div className="faqs-table-description">
          <p>{description}</p>
        </div>
        <div className="plus-sign-container">
          <img className="img-fluid" src={plusSign} alt="Plus Sign" />
        </div>
    </div>
  );
};
