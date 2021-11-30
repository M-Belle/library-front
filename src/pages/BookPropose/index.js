import React, {Component, useEffect} from "react";
import styled from "styled-components";
import TypeBooksList from "../../components/TypeBooksList";
import axios from "axios";

class BookPropose extends Component {
    state = {
      title: '',
      author: '',
      genre: '',
      year: '',
    };

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  };

  handleAuthorChange = (event) => {
    this.setState({
      author: event.target.value
    })
  };

  handleGenreChange = (event) => {
    this.setState({
      genre: event.target.value
    })
  };

  handleYearChange = (event) => {
    this.setState({
      year: event.target.value
    })
  };

  handleSubmit(event) {
    event.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      year: this.state.year,
    }

    axios
        .post(`http://localhost:3030/books/propose`, {book})
        .then(res => {
          console.log(res.data);
        });
  };

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <Label>
              Titre du Livre: <Input type="text" onChange={this.handleTitleChange}/>
            </Label>
            <Label>
              Auteur du Livre <Input type="text" onChange={this.handleAuthorChange}/>
            </Label>
            <Label>
              Genre du Livre <TypeBooksList onChange={this.handleGenreChange}/>
            </Label>
            <Label>
              Date <Input type="text" onChange={this.handleYearChange} />
            </Label>
            <button type="submit">Add</button>
          </form>
        </div>
    );
  }
}

export default BookPropose;

const Input = styled.input`
  width: auto;
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