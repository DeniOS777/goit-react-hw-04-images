import React from 'react';
import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';

const Button = ({ children, onClick, ...allyProps }) => {
  return (
    <LoadMore type="button" onClick={onClick} {...allyProps}>
      {children}
    </LoadMore>
  );
};

Button.defaultProps = {
  'aria-label': '',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};

export { Button };
