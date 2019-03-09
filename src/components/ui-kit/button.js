import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  background: #3eb2e0;
  border-radius: 10px;
  height: 50px;
  padding: 15px 20px;
  color: #fff;
  transition: background-color 100ms linear;

  &:hover {
    background: #013884;
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
