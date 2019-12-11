import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Input = ({
  className,
  type,
  placeholder,
  id
}) => (
  <input type="text"/>
);

Input.protoTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  className: null,
  id: null,
  type: null,
  placeholder: null
};

export default Input;
