import axios from "axios";
import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const AddComment = ({ id }) => {
    const [rating, setRating] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [bookId] = React.useState(id);
    const userId = localStorage.getItem("userId");

    const handleRatingChange = (event) => {
        setRating(Number(event.target.value))
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    };

    const HandleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3030/book/comment', {
            bookId,
            rating,
            description
        }).then((response) => {
            alert(response.data)
            window.location.reload(true);
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
        <div>
            <Form onSubmit={HandleSubmit}>
                <Label>Note /5</Label>
                <Input type="text" onChange={handleRatingChange}/>
                <Textarea onChange={handleDescriptionChange}/>
                <Button type="submit">Valider</Button>
            </Form>
        </div>
    )
}

export default AddComment;

const Label = styled.label`
    display: block;
`;

const Input = styled.input`
  display: block;
  width: 50px;
  border: 2px solid rgb(31, 97, 141);
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  resize: none;
  font-size: 10px;
  overflow: auto;
  height: 100px;
  border: 2px solid rgb(31, 97, 141);
  border-radius: 8px;
`;

const Button = styled.button`
  display: block;
  background-color: #5499c7;
  margin: 10px 0 0 0;
  padding: 7px 10px;
  border: 1px solid #2980b9;
  border-radius: 3px;
  width: 100%;
  font-size: 15px;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #5499c7;
  }
`;

const Form = styled.form`
  background-color: #eaf2f8;
  border: 1px solid #2980b9;
  border-radius: 5px;
  margin-top: 40px;
  margin-left: 40px;
  padding: 10px;
  display: block;
`;

const AskConnection = styled.div`
  width: fit-content;
  margin: auto;
  margin-left: 40px;
    & > h1 {
      text-align: center;
      color: #5499c7;
    }
`;
