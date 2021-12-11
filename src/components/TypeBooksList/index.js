import React from "react";
import styled from "styled-components";

const TypeBooksList = ({ setGenre }) => {

  const handleGenreChange = (event) => {
    setGenre(event.target.value)
  };

  return (
    <div>
      <select id="dropdown" onChange={handleGenreChange}>
        <Option value="Classique">Classique</Option>
        <Option value="Littérature étrangère">Littérature étrangère</Option>
        <Option value="Horreur">Horreur</Option>
        <Option value="Enfance">Enfance</Option>
        <Option value="Policier">Policier</Option>
        <Option value="Fantastique">Fantastique</Option>
        <Option value="Science-Fiction">Science-Fiction</Option>
      </select>
    </div>
  );
};

export default TypeBooksList;

const Option = styled.option`
  width: auto;
  margin: 20px 20px 20px 20px;
  box-sizing: border-box;
  border: 2px solid rgb(31, 97, 141);
  border-radius: 8px;
`;
