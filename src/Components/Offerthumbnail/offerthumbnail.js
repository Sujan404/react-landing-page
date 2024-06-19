import React from "react";
import "./offer-thumbnail.css";
import { Card } from "react-bootstrap";
import plumbing from"../../assets/icons/plumbing-white.png";

export const Offerthumbnail = ({description}) => {
  return (
    <Card className="thumbnail-card">
      <Card.Body>
        <div className="card-img"></div>
        <Card.Text className="card-content d-flex ">
          <div className="card-icon-container">
            <img className="img-fluid card-plumbing-icon" src={plumbing} alt="Plumbing White" />
          </div>
          <div className="card-description d-flex align-items-center">
            <h5>{description}</h5>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
