import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Header from './Header';

const MainLayout = ({
  wrapClass, children
}) => (
  <div className={classNames('main-wrap', wrapClass)}>
    <Header />
    <main className="main-body">
      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  wrapClass: PropTypes.string,
  children: PropTypes.node
};

MainLayout.defaultProps = {
  wrapClass: null,
  children: null
};

export default MainLayout;
