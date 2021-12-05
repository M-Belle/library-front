import React, {useEffect, useState} from "react";
import styled from "styled-components";
import BookItem from "../../../components/BookItem";
import axios from "axios";

const BookCards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async ()=> {
            try{
                const resp = await axios.get('http://localhost:3030/books');
                setData(resp.data);
            }catch(err) {
                throw new Error(err);
            }
        };
        fetchData()
    },[]);

    return (
        <Container>
            {
                data.map(({id, title, author, genre,year }) => {
                    return <BookItem id={id} title={title} author={author} genre={genre} year={year} />;
                })
            }
        </Container>
    )
}

export default BookCards

const Container = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
`;

