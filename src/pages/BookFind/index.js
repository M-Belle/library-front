import React, { Component } from "react";
import styled from "styled-components";
import ConnexionButton from "../../components/Header/Styles/User/connexionButton";
import TypeBooksList from "../../components/TypeBooksList";

class BookFind extends Component {
  state = {
    titleBook: null,
    authorBook: null,
    typeBook: null,
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
          <ConnexionButton>Trouver</ConnexionButton>
        </form>
      </div>
    );
  }
}

export default BookFind;

const Input = styled.input`
  width: auto;
  padding: 12px 20px;
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
