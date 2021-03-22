import PropTypes from "prop-types";

const Input = (props) => {
  const { className, placeholder } = props;
  return <input type="text" className={className} placeholder={placeholder} />;
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
