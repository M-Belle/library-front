import React from "react";
import livreLogo from "../../pictures/livreLogo.png";
import HeaderStyled from "./Styles/headerStyle";
import ImageLogo from "./Styles/LogoNom/imageLogo";
import NomAppliContainer from "./Styles/LogoNom/nomAppliContainer";
import NomLogoContainer from "./Styles/LogoNom/nomLogoContainer";
import {Link} from "react-router-dom";
import Menu from "../Menu";
import styled from "styled-components";

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

const Connection = () => {
    const userId = localStorage.getItem('userId')

    if(!userId) {
        return (
            <LogMenu>
                <Link to={`/signin`}><ConnexionButton>Se connecter</ConnexionButton></Link>
                <Link to={'/signup'}><ConnexionButton>S'inscrire</ConnexionButton></Link>
            </LogMenu>
        )}
    else {
        return (
            <LogMenu>
                <p>Connecté</p>
                <ConnexionButton onClick={logOutHandler}>Déconnecter</ConnexionButton>
            </LogMenu>
        );
    }
}

const logOutHandler = () => {
    localStorage.removeItem("userId");
}

const Header = () => {
  return (
    <HeaderStyled>
      <Menu />
      <LogoNom />
      <Connection />
    </HeaderStyled>
  );
};

const LogMenu = styled.button`
  background-color: #eaf2f8;
  border: 1px solid #2980b9;
  border-radius: 5px;
  justify-content: center;
  margin: auto;
  padding: 10px;
  display: flex;
  width: fit-content;
`;

const ConnexionButton = styled.button`
  background-color: #5499c7;
  padding: 7px 10px;
  border: 1px solid #2980b9;
  border-radius: 3px;
  font-size: 15px;
  color: white;
  display: block;
  width: max-content;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #5499c7;
  }
`;

export default Header;
