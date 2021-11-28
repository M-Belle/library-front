import React from "react";
import styled from "styled-components";


const BookCard = ({ title, img }) => {
    return (
        <Container>
            {title}
            <img src={img} height="250px" width="180px"/>
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
