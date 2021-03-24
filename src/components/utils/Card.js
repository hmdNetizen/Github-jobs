import React from "react";
import { Link } from "react-router-dom";

const dummyLogo =
  "https://www.gsr-technology.co.uk/wp-content/uploads/2015/10/partner-logo-placeholder.jpg";

const Card = ({ details }) => {
  const { company, company_logo, title, location } = details;
  return (
    <Link to="/">
      <li className="card">
        <img
          src={company_logo ? company_logo : dummyLogo}
          alt="Company logo"
          className="card__image"
        />
        <div className="card__description">
          <h3 className="card__header">{company}</h3>
          <h2 className="card__title">{title}</h2>
          <p className="card__text">Full TIme</p>
        </div>
        <div className="card__info">
          <div className="card__info__wrapper">
            <span className="material-icons card__icon">public</span>
            <p className="card__caption">{location}</p>
          </div>
          <div className="card__info__wrapper">
            <span className="material-icons card__icon">schedule</span>
            <p className="card__caption">3 days ago</p>
          </div>
        </div>
        {/* Only displays on breakpoints that is less than 600px */}
        <div className="card__details">
          <div className="card__description card__description--phone">
            <h3 className="card__header">{company}</h3>
            <h2 className="card__title">{title}</h2>
            <p className="card__text">Full TIme</p>
          </div>
          <div className="card__info card__info--phone">
            <div className="card__info__wrapper">
              <span className="material-icons card__icon">public</span>
              <p className="card__caption">{location}</p>
            </div>
            <div className="card__info__wrapper">
              <span className="material-icons card__icon">schedule</span>
              <p className="card__caption">3 days ago</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Card;
