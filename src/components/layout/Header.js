import React from "react";
import PropTypes from "prop-types";

const Header = ({ header, headerTitle, headerThin }) => {
  return (
    <header className={header}>
      <h1 className={headerTitle}>
        Github <span className={headerThin}>Jobs</span>
      </h1>
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
  headerThin: PropTypes.string.isRequired,
};

export default Header;
