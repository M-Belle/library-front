import React, {useEffect, useState} from "react";
import axios from "axios";
import UserItem from "../../components/UserItem";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

const MyAccount = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    const userId = localStorage.getItem("userId");

    useEffect( () => {
        const fetchData = async () => {
            await axios.get(`http://localhost:3030/user/${id}`).then((response) => {
                setUser(response.data)
            }).catch((err) => {
                throw new Error(err);
            })
        };
        fetchData();
    }, [id]);

    if (!userId) {
        return (
            <div>
                <h1>Veuillez vous connecter ou créer un compte pour accéder à cette page</h1>
                <Link to="/signin"><Button>Se Connecter</Button></Link>
                <Link to="/signin"><Button>S'inscrire</Button></Link>
            </div>
        )
    }

    return (
        <div>
            {
                user.map(({id, name, email}) => {
                    return <UserItem id={id} name={name} email={email}/>;
                })
            }
        </div>
    )
}

export default MyAccount;

const Button = styled.button`
  width: 100%;
  background-color: #5499c7;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  padding: 15px 32px;
`;
