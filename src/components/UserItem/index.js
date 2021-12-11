import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const UserItem = ({id, name, email}) => {
    const [disabled, setDisabled] = useState(true);
    const [buttonText, setButtonText] = useState("Changer Informations");
    const [nameUpdate, setNameUpdate] = React.useState(name);
    const [emailUpdate, setEmailUpdate] = React.useState(email);

    const handleNameChange = (event) => {
        setNameUpdate(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmailUpdate(event.target.value);
    };

    const handleChangeClick = (event) => {
        setDisabled(!disabled);
        setButtonText("Valider");

        event.preventDefault();
        axios.put(`http://localhost:3030/user/${id}`, {
            nameUpdate,
            emailUpdate
        }).then((response) => {
            alert(response.data)
        }).catch((error) => {
            alert(error.response.data.message)
        });
    }

    const handleDelete = (event) => {
        event.preventDefault();
        localStorage.removeItem("userId");
        axios.delete(`http://localhost:3030/user/${id}`
        ).then((response) => {
            alert(response.data)
        }).catch((error) => {
            alert(error.response.data.message)
        });
    };

    return (
        <ItemUser>
            <Label>Nom</Label>
            <Input type="text" disabled={disabled} value={nameUpdate} onChange={handleNameChange}/>
            <Label>Email</Label>
            <Input type="text" disabled={disabled} value={emailUpdate} onChange={handleEmailChange}/>
            <ButtonDiv>
                <Button onClick={handleDelete}>Supprimer Compte</Button>
                <Button onClick={handleChangeClick}>{buttonText}</Button>
            </ButtonDiv>
        </ItemUser>
    );
}

export default UserItem

const Label = styled.label`
  color: #1a5276;
  display: block;
`;

const Input = styled.input`
  color: #1a5276;
  display: block;
  width: 100%
`;

const ItemUser = styled.div`
  padding: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 300px;
  margin: auto;
`;

const Button = styled.button`
  background-color: #5499c7;
  margin: 10px 0 0 0;
  padding: 7px 10px;
  border: 1px solid #2980b9;
  border-radius: 3px;
  color: white;
  display: block;
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
