import React from "react";
import styled from "styled-components";
import AddToCart from "../AddToCart";

const BookDetail = ({ title, author, genre, year, resume, img }) => {
    const [isAdd, setIsAdd] = React.useState(true);

    const handleClick = () => {
        setIsAdd(!isAdd);
    };

    return (
        <ItemBook>
            <img src={img} width='70%' height='100%' resizeMode='contain' alt="Couv. Livre" />
            <TitleBook>{title}</TitleBook>
            <DetailBook>Auteur : {author}</DetailBook>
            <DetailBook>Genre : {genre}</DetailBook>
            <DetailBook>Year : {year}</DetailBook>
            <AddToCart clickFunction={handleClick} isAdd={isAdd} />
        </ItemBook>
    );
}

export default BookDetail;

const TitleBook = styled.div`
  color: #1a5276;
  font-weight: bold;
  text-align: center;
`;

const DetailBook = styled.div`
  color: #1a5276;
  text-align: center;
`;

const ItemBook = styled.div`
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
