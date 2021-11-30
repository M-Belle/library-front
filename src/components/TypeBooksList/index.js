import React from "react";
import styled from "styled-components";

const TypeBooksList = () => {
  return (
    <label>
      <select>
        <Option value="classic">Classique</Option>
        <Option value="foreignLiterature">Littérature étrangère</Option>
        <Option value="horror">Horreur</Option>
        <Option value="childhood">Enfance</Option>
        <Option value="crime">Policier</Option>
        <Option value="fantastic">Fantastique</Option>
        <Option value="sci-fi">Science-Fiction</Option>
      </select>
    </label>
  );
};

export default TypeBooksList;

const Option = styled.option`
  width: auto;
  //padding: auto;
  margin: 20px 20px 20px 20px;
  box-sizing: border-box;
  border: 2px solid rgb(31, 97, 141);
  border-radius: 8px;
`;
