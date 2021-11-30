import React from "react";
import FooterStyled from "./Styles/footerStyle";

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

export default Footer;
