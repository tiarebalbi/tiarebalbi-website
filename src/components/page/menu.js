import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { StyledMenu } from '../../styles/LayoutStyle';

const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <NavLink exact to="/">
            home.
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/blog">
            blog.
          </NavLink>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default withRouter(Menu);
