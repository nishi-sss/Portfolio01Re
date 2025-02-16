import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #2E2D2E;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: auto;
`;

const FooterLink = styled(Link)`
  color: #bbb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 Co-creation nishi-sss. All rights reserved.</p>
      <p>Est. 2025 | Designed & Developed by nishi-sss</p>
      <p>
        <FooterLink to="/privacy-policy">Privacy Policy</FooterLink> |{" "}
        <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
      </p>
    </FooterContainer>
  );
}

export default Footer;

