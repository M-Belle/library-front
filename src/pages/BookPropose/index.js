import React from "react";
import styled from "styled-components";
import TypeBooksList from "../../components/TypeBooksList";
import axios from "axios";

const BookPropose = () => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [year, setYear] = React.useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value)
  };

  const handleYearChange = (event) => {
    setYear(event.target.value)
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

      const fetchData = async () => {
        try {
          await axios.post('http://localhost:3030/books/propose', {
            title,
            author,
            genre,
            year,
          })
          //console.log(resp.data);
        } catch (err) {
          throw new Error(err);
        }
      };
      fetchData()
  }

    return (
        <div>
          <h1>Proposer un livre</h1>
          <Form onSubmit={HandleSubmit}>
            <Label>
              Titre du Livre: <Input type="text" onChange={handleTitleChange}/>
            </Label>
            <Label>
              Auteur du Livre <Input type="text" onChange={handleAuthorChange}/>
            </Label>
            <Label>
              Genre du Livre <TypeBooksList onChange={handleGenreChange}/>
            </Label>
            <Label>
              Date <Input type="text" onChange={handleYearChange}/>
            </Label>
            <Button type="submit">Ajouter</Button>
          </Form>
        </div>
    );
}

export default BookPropose;

const Form = styled.form`
  position: relative;
  width  : 740px;
  height : 498px;
  margin : 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid rgb(31, 97, 141);
  border-radius: 8px;
`;

const Label = styled.label`
  width: 100%;
  padding: 10px 20px;
  margin: 8px 0;
  display: inline-block;
  font-size: 20px;
  background-color: #5499c7;
  color: white;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  background-color: #5499c7;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  padding: 15px 32px;
`;
