import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Header = ({
  className
}) => (
  <header className={classNames('main-header', className)}>
    <h1 className="main-header__title">
      <Link to='/'>ToDoList</Link>
    </h1>
    <nav className="main-header__nav">
      <ul className="main-header__nav-list">
        <li className="main-header__nav-list-item">
          <Link to='/login_in'>Войти</Link>
        </li>
        <li className="main-header__nav-list-item">
          <Link to='/sign_up'>Зарегистрироваться</Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: null
};

export default Header;
