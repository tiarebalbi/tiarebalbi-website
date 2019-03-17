import React from 'react';

import styled from 'styled-components';

const StyledContent = styled.div`
  flex-grow: 3;
`;


const Content = props => {
  return <StyledContent style={props.style}>{props.children}</StyledContent>;
};

export default Content;
