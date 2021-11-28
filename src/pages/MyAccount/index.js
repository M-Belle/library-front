import React from "react";
import styled from "styled-components";
import axios from "axios";

const MyAccount = ({ setUserToken }) => {
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
        axios.put("http://localhost:3030/users", {
            email,
            password,
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log("error", error);
        });
    }

    return (
            <form>
                <EmailMdPForm placeholder="email" onChange={handleEmailChange} />
                <EmailMdPForm
                    placeholder="Mot de Passe"
                    type="password"
                    onChange={handlePasswordChange}
                />
                <ConnexionButton onClick={handleSubmit}>Changement de mot de passe</ConnexionButton>
            </form>
    );
}

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

export default MyAccount;
