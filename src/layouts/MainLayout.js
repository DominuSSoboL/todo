import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Header from './Header';

const MainLayout = ({
  wrapClass, children
}) => (
  <>
    <Header />
    <main className="main-body">
      {children}
    </main>
  </>
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
