import React from "react";
import styled from "styled-components";
import TypeBooksList from "../../components/TypeBooksList";
import axios from "axios";
import {Link} from "react-router-dom";

const BookPropose = () => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [year, setYear] = React.useState("");
  const [resume, setResume] = React.useState("");
  const [image, setImage] = React.useState("");
  const userId = localStorage.getItem("userId");

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  };

  const handleYearChange = (event) => {
    setYear(Number(event.target.value))
  };

  const handleResumeChange = (event) => {
      setResume(event.target.value)
  }

  const handleImageChange = (event) => {
      setImage(event.target.value)
  }

  const HandleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3030/books/propose', {
            title,
            author,
            genre,
            year,
            resume,
            image,
          }).then((response) => {
              alert(response.data)
          }).catch((error) => {
              alert(error.response.data.message)
    });
  };

    if (!userId) {
        return (
            <AskConnection>
                <h1>Veuillez vous connecter ou créer un compte pour accéder à cette page</h1>
                <Link to="/signin"><Button>Se Connecter</Button></Link>
                <Link to="/signin"><Button>S'inscrire</Button></Link>
            </AskConnection>
        )
    }

    return (
        <Container>
          <h1>Proposer un livre</h1>
          <Form onSubmit={HandleSubmit}>
            <Label>
                Titre du Livre: <Input type="text" onChange={handleTitleChange}/>
            </Label>
            <Label>
                Auteur du Livre <Input type="text" onChange={handleAuthorChange}/>
            </Label>
            <Label>
                Genre du Livre <TypeBooksList setGenre={setGenre}/>
            </Label>
            <Label>
                Date <Input type="text" onChange={handleYearChange}/>
            </Label>
            <Label>
                Resumé <Textarea onChange={handleResumeChange}/>
            </Label>
              <Label>
                  Image <Input type="url" onChange={handleImageChange}/>
              </Label>
            <Button type="submit">Ajouter</Button>
          </Form>
        </Container>
    );
}

export default BookPropose;

const Container = styled.div`
  & > h1 {
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width  : 740px;
  margin : 0 auto;
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  font-size: 10px;
  overflow: auto;
  height: 100px;
  border: 2px solid rgb(31, 97, 141);
  border-radius: 8px;
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
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #5499c7;
  }
`;

const AskConnection = styled.div`
  width: fit-content;
  margin: auto;
    & > h1 {
      text-align: center;
      color: #5499c7;
    }
`;
