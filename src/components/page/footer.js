import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  color: #fff;
  font-size: 12px;
  padding-left: 35px;
  padding-bottom: 35px;
  height: 35px;
  line-height: 35px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Copyright © 2019 Tiarê Balbi Bonamini. All rights reserved.
    </StyledFooter>
  );
};

export default Footer;
