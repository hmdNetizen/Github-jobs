import React from "react";
import { Link } from "react-router-dom";

const dummyLogo =
  "https://www.gsr-technology.co.uk/wp-content/uploads/2015/10/partner-logo-placeholder.jpg";

const Card = ({ details }) => {
  const { company, company_logo, title, location } = details;
  return (
    <Link to="/">
      <li className="jobCard">
        <img
          src={company_logo !== null ? company_logo : dummyLogo}
          alt="Company logo"
          className="jobCard__image"
        />
        <div className="jobCard__description">
          <h3 className="jobCard__header">{company}</h3>
          <h2 className="jobCard__title">{title}</h2>
          <p className="jobCard__text">Full TIme</p>
        </div>
        <div className="jobCard__info">
          <div className="jobCard__info__wrapper">
            <span className="material-icons jobCard__icon">public</span>
            <p className="jobCard__caption">{location}</p>
          </div>
          <div className="jobCard__info__wrapper">
            <span className="material-icons jobCard__icon">schedule</span>
            <p className="jobCard__caption">3 days ago</p>
          </div>
        </div>
        {/* Only displays on breakpoints that is less than 600px */}
        <div className="jobCard__details">
          <div className="jobCard__description jobCard__description--phone">
            <h3 className="jobCard__header">{company}</h3>
            <h2 className="jobCard__title">{title}</h2>
            <p className="jobCard__text">Full TIme</p>
          </div>
          <div className="jobCard__info jobCard__info--phone">
            <div className="jobCard__info__wrapper">
              <span className="material-icons jobCard__icon">public</span>
              <p className="jobCard__caption">{location}</p>
            </div>
            <div className="jobCard__info__wrapper">
              <span className="material-icons jobCard__icon">schedule</span>
              <p className="jobCard__caption">3 days ago</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Card;
