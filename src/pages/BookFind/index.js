import React, {useEffect, useState} from "react";
import axios from "axios";
import BookItem from "../../components/BookItem";
import styled from "styled-components";

const BookFind = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get('http://localhost:3030/books')
                setBook(resp.data);
                console.log(resp.data)
            } catch (err) {
                throw new Error(err);
            }
        };
        fetchData()
    }, []);

    return (
        <Container>
            <h1>Liste des livres</h1>
            <BookList>
                {
                    book.map(({id, title, author, genre, year}) => {
                    return <BookItem id={id} title={title} author={author} genre={genre} year={year}/>;
                    })
                }
            </BookList>
        </Container>
    )
}
export default BookFind;

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  & > h1 {
    color: #5499c7;
    text-align: center;
  }
`;

const BookList = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 24px;
`;
