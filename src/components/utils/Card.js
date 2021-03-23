import React from "react";
import { Link } from "react-router-dom";

const Card = ({ details }) => {
  return (
    <Link to="/">
      <li className="card">
        <img
          src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcEtkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--281d993a7b6bbedd61a312ed9fbc04ac5a098ab7/gary-jonas-computing-squarelogo-1446789417023.png"
          alt="Company logo"
          className="card__image"
        />
        <div className="card__description">
          <h3 className="card__header">{details}</h3>
          <h2 className="card__title">Frontend Software Engineer</h2>
          <p className="card__text">Full TIme</p>
        </div>
        <div className="card__info">
          <div className="card__info__wrapper">
            <span className="material-icons card__icon">public</span>
            <p className="card__caption">New York</p>
          </div>
          <div className="card__info__wrapper">
            <span className="material-icons card__icon">schedule</span>
            <p className="card__caption">3 days ago</p>
          </div>
        </div>
        {/* Only displays on breakpoints that is less than 600px */}
        <div className="card__details">
          <div className="card__description card__description--phone">
            <h3 className="card__header">Company Name</h3>
            <h2 className="card__title">Frontend Software Engineer</h2>
            <p className="card__text">Full TIme</p>
          </div>
          <div className="card__info card__info--phone">
            <div className="card__info__wrapper">
              <span className="material-icons card__icon">public</span>
              <p className="card__caption">New York</p>
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
