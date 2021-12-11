import React from "react";
import styled from "styled-components";

const AddToCart = (props) => {
  return (
    <ButtonStyle onClick={props.clickFunction}>
      {props.isAdd ? "Ajouter au panier" : "C'est dans la poche"}
    </ButtonStyle>
  );
};

export default AddToCart;

const ButtonStyle = styled.button`
  margin-top: 1em;
  padding: 0.5em;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  background-color: #5499c7;
  display: block;
`;
