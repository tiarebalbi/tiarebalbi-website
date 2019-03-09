import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { StyledMenu } from "../../__styles__/layout.style";
import Button from "../ui-kit/button";

const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li className="selected">
          <NavLink to="/">home.</NavLink>
        </li>
        <li>
          <NavLink to="/products">products (coming soon).</NavLink>
        </li>
        <li>
          <Button to="/get-in-touch">get in touch.</Button>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default withRouter(Menu);
