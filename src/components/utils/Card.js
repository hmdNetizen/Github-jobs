import React from "react";
import { Link } from "react-router-dom";
import getDays from "./getDays";

const dummyLogo =
  "https://www.gsr-technology.co.uk/wp-content/uploads/2015/10/partner-logo-placeholder.jpg";

const Card = ({ details }) => {
  const {
    id,
    type,
    company,
    company_logo,
    title,
    location,
    created_at,
  } = details;
  return (
    <li className="jobCard">
      <Link to={`/${id}`} className="jobCard__link">
        <img
          src={company_logo !== null ? company_logo : dummyLogo}
          alt="Company logo"
          className="jobCard__image"
        />
        <div className="jobCard__description">
          <h3 className="jobCard__header">{company}</h3>
          <h2 className="jobCard__title">{title}</h2>
          <p className="jobCard__text">{type}</p>
        </div>
        <div className="jobCard__info">
          <div className="jobCard__info__wrapper">
            <span className="material-icons jobCard__icon">public</span>
            <p className="jobCard__caption">{location}</p>
          </div>
          <div className="jobCard__info__wrapper">
            <span className="material-icons jobCard__icon">schedule</span>
            <p className="jobCard__caption">{`${
              getDays(created_at) < 1
                ? "Today"
                : getDays(created_at) === 1
                ? getDays(created_at) + " day ago"
                : getDays(created_at) + " days ago"
            }`}</p>
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
              <p className="jobCard__caption">{`${
                getDays(created_at) > 1
                  ? `${getDays(created_at)} days ago`
                  : `${getDays(created_at)} day ago`
              } `}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Card;
