import React from 'react';
import styled from 'styled-components';
import { theme } from '../../helpers/globalStyle';

const StyledTag = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 20px;
  border-radius: 30px;
  color: ${theme.text.light};
  font-size: 12px;
`;

const Tag = props => {
  return <StyledTag style={{ backgroundColor: props.color }}>{props.children}</StyledTag>;
};

export default Tag;
