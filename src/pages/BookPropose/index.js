import React, { Component, useState } from "react";
import styled from "styled-components";
import ConnexionButton from "../../components/Header/Styles/User/connexionButton";
import TypeBooksList from "../../components/TypeBooksList";

const NumberOfBooksPropose = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ConnexionButton onClick={() => setCount(count + 1)}>
        Proposez ce livre
      </ConnexionButton>
      <p>Vous avez proposé {count} livre(s)</p>
    </div>
  );
};

class Index extends Component {
  state = {
    titleBook: null,
    authorBook: null,
    typeBook: null,
    pointNumberBook: null,
  };

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <Label htmlFor="titleBook">Titre du Livre</Label>
          <Input type="text" id="titleBook" onChange={this.change} />
          <Label htmlFor="authorBook">Auteur du Livre</Label>
          <Input type="text" id="authorBook" onChange={this.change} />
          <Label htmlFor="typeBook">Genre du Livre</Label>
          <TypeBooksList />
          <Label htmlFor="pointNumberBook">Valeur affectée au livre</Label>
          <Input type="text" id="pointNumberBook" onChange={this.change} />
          <NumberOfBooksPropose />
        </form>
      </div>
    );
  }
}

export default Index;

const Input = styled.input`
  width: auto;
  padding: auto;
  margin: 20px 20px 20px 20px;
  box-sizing: border-box;
  border: 2px solid rgb(31, 97, 141);
  border-radius: 8px;
`;

const Label = styled.label`
  font-size: 20px;
  margin: 10px 10px 10px 10px;
  background-color: #5499c7;
  color: white;
  border-radius: 4px;
`;
