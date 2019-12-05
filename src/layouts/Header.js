import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Header = ({
  className
}) => (
  <header className={classNames('main-headeer', className)}>
    <h1>Header</h1>
  </header>
);

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: null
};

export default Header;
