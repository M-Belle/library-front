import React from "react";
import styled from "styled-components";
import AddToCart from "../AddToCart";
import {Link} from "react-router-dom";

const BookItem = ({ id, title, author, genre, year, img }) => {
  const [isAdd, setIsAdd] = React.useState(true);
  console.log(img)

  const handleClick = () => {
    setIsAdd(!isAdd);
  };

  return (
      <ItemBook>
          <Img src={img} alt="Couv. Livre" />
          <Link to={`/book/${id}`}><TitleBook>{title}</TitleBook></Link>
          <DetailBook>Auteur : {author}</DetailBook>
          <DetailBook>Genre : {genre}</DetailBook>
          <DetailBook>Year : {year}</DetailBook>
          <AddToCart clickFunction={handleClick} isAdd={isAdd} />
      </ItemBook>
  );
};

const TitleBook = styled.h2`
  color: #1a5276;
  font-weight: bold;
  text-align: center;
`;

const DetailBook = styled.label`
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
  height: content-box;
  border: 4px solid #2471a3;
  border-radius: 20px;
`;

const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export default BookItem;
