import React from 'react';
import PropTypes from 'prop-types';
import { Error } from './ErrorMessage.styled';

const ErrorMessage = ({ text }) => {
  return <Error>{text}</Error>;
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export { ErrorMessage };
