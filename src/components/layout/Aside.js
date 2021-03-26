import React from "react";
import { useDispatch } from "react-redux";
import Input from "../formElements/Input";
import { jobsReceived } from "../../store/actions/jobs";

// All styles for this component can be found in <_form.scss>
const Aside = (props) => {
  const dispatch = useDispatch();
  const {
    setOption,
    isFullTime,
    setIsFullTime,
    filterText,
    setFilterText,
  } = props;
  const handleFullTimeCheck = (e) => setIsFullTime((prev) => !prev);

  const handleJobsFilter = (e) => {
    setFilterText(e.target.value);

    dispatch(jobsReceived(filterText));
  };

  const handleRadioChange = (e) => {
    setOption({ [e.target.name]: e.target.value });
  };
  return (
    <aside className="form__aside">
      <form>
        <div className="form__wrapper">
          <input
            type="checkbox"
            id="fullTime"
            className="form__checkbox"
            checked={isFullTime}
            onChange={handleFullTimeCheck}
          />
          <label htmlFor="fullTime" className="form__label">
            Full Time
          </label>
        </div>
        <div className="form__wrapper form__wrapper--location">
          <label className="form__label form__label--location">Location</label>
          <Input
            className="form__input form__input--location"
            placeholder="City, state, zip code or county"
            value={filterText}
            onChange={handleJobsFilter}
          />
          <span className="material-icons form__inputIcon form__inputIcon--location">
            public
          </span>
        </div>
        <div className="form__wrapper__radio">
          <div className="form__radio">
            <input
              type="radio"
              id="london"
              className="form__radio__btn"
              name="city"
              value="London"
              onChange={handleRadioChange}
            />
            <label htmlFor="london" className="form__label form__label--city">
              London
            </label>
          </div>
          <div className="form__radio">
            <input
              type="radio"
              id="amsterdam"
              name="city"
              className="form__radio__btn"
              value="Amsterdam"
              onChange={handleRadioChange}
            />
            <label
              htmlFor="amsterdam"
              className="form__label form__label--city"
            >
              Amsterdam
            </label>
          </div>
          <div className="form__radio">
            <input
              type="radio"
              id="newyork"
              name="city"
              className="form__radio__btn"
              value="New York"
              defaultChecked
              onChange={handleRadioChange}
            />
            <label
              htmlFor="newyork"
              name="newyork"
              className="form__label form__label--city"
            >
              New York
            </label>
          </div>
          <div className="form__radio">
            <input
              type="radio"
              id="berlin"
              name="city"
              className="form__radio__btn"
              value="Berlin"
              onChange={handleRadioChange}
            />
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
