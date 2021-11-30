import React from "react";
import styled from "styled-components";


const BookCard = ({ title, author, genre, year }) => {
    return (
        <Container>
            {title}
            {author}
            {genre}
            {year}
        </Container>
    )
}

const Container = styled.div`
  width: 180px;
  height: 260px;
  border: 1px solid black;
  border-radius: 3px ;
`;

export default BookCard;
