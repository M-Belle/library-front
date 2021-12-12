import React from "react";
import styled from "styled-components";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3030/users', {
            name,
            email,
            password,
        }).then((response) => {
            alert(response.data);
            navigate('/signin', { replace: true })
            window.location.reload(true);
        }).catch((error) => {
            alert(error.response.data.message)
        });
    };

    return (
        <LogMenu>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <Label htmlFor="name">Nom</Label>
                <Input type="text" id="name" onChange={handleNameChange} />
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" onChange={handleEmailChange} />
                <Label htmlFor="password">Mot de Passe</Label>
                <Input type="password" id="password" onChange={handlePasswordChange} />
                <ConnexionButton type="submit">Envoyer</ConnexionButton>
            </form>
        </LogMenu>
    );
}

export default SignUp;

const LogMenu = styled.div`
  background-color: #eaf2f8;
  border: 1px solid #2980b9;
  border-radius: 5px;
  justify-content: center;
  margin: auto;
  margin-top: 40px;
  padding: 10px;
  display: block;
  width: fit-content;
  & > h1 {
    color: #5499c7;
    text-align: center;
  }
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid #2980b9;
  border-radius: 3px;
  margin: 5px 0 10px 0;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
`;

const Label = styled.label`
  float: left;
  font-size: 20px;
`;

const ConnexionButton = styled.button`
  background-color: #5499c7;
  margin: 10px 0 0 0;
  padding: 7px 10px;
  border: 1px solid #2980b9;
  border-radius: 3px;
  width: 100%;
  font-size: 15px;
  color: white;
  display: block;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #5499c7;
  }
`;
