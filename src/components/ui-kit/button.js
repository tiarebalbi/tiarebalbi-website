import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../helpers/globalStyle';

const StyledLink = styled(NavLink)`
  background: ${theme.secondary};
  border-radius: 10px;
  height: 50px;
  padding: 15px 20px;
  color: #fff;
  transition: background-color 200ms linear;

  &:hover {
    background: ${theme.primary};
    color: #fff !important;
  }
`;

const Button = ({ to, children, ...rest }) => {
  return (
    <StyledLink to={to} {...rest}>
      {children}
    </StyledLink>
  );
};

export default Button;
