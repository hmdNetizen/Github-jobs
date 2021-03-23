import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcEtkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--281d993a7b6bbedd61a312ed9fbc04ac5a098ab7/gary-jonas-computing-squarelogo-1446789417023.png"
        alt="Company logo"
        className="card__image"
      />
      <div className="card__description">
        <h3 className="card__header">Company Name</h3>
        <h2 className="card__title">Frontend Software Engineer</h2>
        <p className="card__text">Full TIme</p>
      </div>
      <div className="card__info">
        <div className="card__info__wrapper">
          <span className="material-icons card__icon">public</span>
          <p className="card__location">New York</p>
        </div>
        <div className="card__info__wrapper">
          <span class="material-icons card__icon">schedule</span>
          <p className="card__scheduleText">3 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
