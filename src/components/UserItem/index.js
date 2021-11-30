import React from "react";
import styled from "styled-components";

const UserItem = ({name, mail}) => {
    return (
        <ItemUser>
            <NameUser>Nom : {name}</NameUser>
            <MailUser>Email : {mail}</MailUser>
        </ItemUser>
    );
}

export default UserItem

const NameUser = styled.div`
  color: #1a5276;
  font-weight: bold;
  text-align: center;
`;

const MailUser = styled.div`
  color: #1a5276;
  text-align: center;
`;

const ItemUser = styled.div`
  padding: 20px;
  display: flex;
  align-items: safe center;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  height: 250px;
  border: 4px solid #2471a3;
  border-radius: 20px;
`;