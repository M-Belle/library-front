import React from "react";
import styled from "styled-components";
import axios from "axios";

const Connection = ({ setUserToken, userToken }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3030/users/auth", {
        email,
        password,
      })
      .then((response) => {
        setUserToken(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const User = ({ userToken }) => {
    return (
        <div>
          { !userToken ? "Non-connecté" : "Connecté" }
        </div>
    );
  };

  return (
    <LogMenu>
      <form>
        <User userToken={userToken}/>
        <EmailMdPForm placeholder="email" onChange={handleEmailChange} />

        <EmailMdPForm
          placeholder="Mot de Passe"
          type="password"
          onChange={handlePasswordChange}
        />

        <ConnexionButton onClick={handleSubmit}>Connexion</ConnexionButton>
      </form>
    </LogMenu>
  );
};

export default Connection;

const LogMenu = styled.div`
  background-color: #eaf2f8;
  padding: 5px;
  border: 1px solid #2980b9;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

const EmailMdPForm = styled.input`
  background-color: white;
  border: 1px solid #2980b9;
  border-radius: 5px;
  padding: 2px;
`;

const ConnexionButton = styled.button`
  background-color: #5499c7;
  border-color: #2980b9;
  border-radius: 5px;
`;
