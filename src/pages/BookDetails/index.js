import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import BookDetail from "../../components/BookDetail";
import {useParams} from "react-router-dom";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:3030/books/${id}`)
                .then((response) => {
                    setBook(response.data);
            }).catch((error) => {
                throw new Error(error);
            })
        };
        fetchData()
    }, [id]);

    return (
        <Container>
            {
                book.map(({id, title, author, genre, year, resume, image}) => {
                    return <BookDetail id={id} title={title} author={author} genre={genre} year={year} resume={resume} img={image}/>;
                })
            }
        </Container>

    )
}
export default BookDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
`;
