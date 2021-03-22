import React from "react";
import Input from "../formElements/Input";

const Aside = () => {
  return (
    <aside className="form__aside">
      <form>
        <div className="form__wrapper">
          <input type="checkbox" id="fullTime" className="form__checkbox" />
          <label htmlFor="fullTime" className="form__label">
            Full Time
          </label>
        </div>
        <div className="form__wrapper form__wrapper--location">
          <label className="form__label form__label--location">Location</label>
          <Input
            className="form__input form__input--location"
            placeholder="City, state, zip code or county"
          />
          <span className="material-icons form__inputIcon form__inputIcon--location">
            public
          </span>
        </div>
        <div className="form__wrapper__radio">
          <div className="form__radio">
            <input type="radio" id="london" className="form__radio__btn" />
            <label htmlFor="london" className="form__label form__label--city">
              London
            </label>
          </div>
          <div className="form__radio">
            <input type="radio" id="amsterdam" className="form__radio__btn" />
            <label
              htmlFor="amsterdam"
              className="form__label form__label--city"
            >
              Amsterdam
            </label>
          </div>
          <div className="form__radio">
            <input type="radio" id="newyork" className="form__radio__btn" />
            <label htmlFor="newyork" className="form__label form__label--city">
              New York
            </label>
          </div>
          <div className="form__radio">
            <input type="radio" id="berlin" className="form__radio__btn" />
            <label htmlFor="berlin" className="form__label form__label--city">
              Berlin
            </label>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default Aside;
