import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <ul>
        <a href="/">Acceuil</a> <br />
        Mentions légales <br />
        Nous contacter <br />
      </ul>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  padding: 8px;
  text-align: center;
  font-size: 100%;
  border: solid 3px rgb(31, 97, 141);
  border-radius: 50px;
  margin-top: 40px;
  flex-shrink: 0;
`;

export default Footer;
