import React from "react";
import livreLogo from "../../pictures/livreLogo.png";
import HeaderStyled from "./Styles/headerStyle";
import MenuContainer from "./Styles/Menu/menuContainer";
import ImageLogo from "./Styles/LogoNom/imageLogo";
import NomAppliContainer from "./Styles/LogoNom/nomAppliContainer";
import NomLogoContainer from "./Styles/LogoNom/nomLogoContainer";
import {Connection} from "../../pages";

const Menu = () => {
  return (
    <MenuContainer>
      <ul>
        <li>
          <a href="/bookfind">Trouver un livre</a>
        </li>
        <li>
          <a href="/bookpropose">Proposer un livre</a>
        </li>
        <li>
          <a href="/myaccount">Mon compte</a>
        </li>
      </ul>
    </MenuContainer>
  );
};

const LogoNom = () => {
  return (
    <NomLogoContainer>
      <NomAppliContainer>
        <ImageLogo src={livreLogo} alt="LogoLivre" />
        <div>BookOChange</div>
      </NomAppliContainer>
    </NomLogoContainer>
  );
};

const Header = () => {
  return (
    <HeaderStyled>
      <Menu />
      <LogoNom />
      <Connection />
    </HeaderStyled>
  );
};

export default Header;
