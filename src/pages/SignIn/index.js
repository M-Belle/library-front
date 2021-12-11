import React from "react";
import styled from "styled-components";
import axios from "axios";


const SignIn = () => {
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

    axios.post('http://localhost:3030/user/auth', {
          email,
          password,
        }).then((response) => {
            if (response.data.token) {
                localStorage.setItem("userId", response.data.id);
            }
        }).catch((error) => {
            alert(error.response.data.message);
    });
  };

  return (
    <LogMenu>
        <h1>Page de Connexion</h1>
        <form onSubmit={handleSubmit}>
            <EmailMdPForm placeholder="Email" type="email" onChange={handleEmailChange} />
            <EmailMdPForm
                placeholder="Mot de Passe"
                type="password"
                onChange={handlePasswordChange}
            />
            <ConnexionButton type="submit">Connexion</ConnexionButton>
        </form>
    </LogMenu>
  );
};

export default SignIn;

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

const EmailMdPForm = styled.input`
  background-color: white;
  border: 1px solid #2980b9;
  border-radius: 3px;
  margin: 5px 0 10px 0;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
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
`;
