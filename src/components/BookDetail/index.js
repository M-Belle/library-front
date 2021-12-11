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
            <ImageBook>
                <img src={img} width='70%' height='100%' resizeMode='contain' alt="Couv. Livre" />
            </ImageBook>
            <DescriptionBook>
                <TitleBook>{title}</TitleBook>
                <DetailBook>Auteur : {author}</DetailBook>
                <DetailBook>Genre : {genre}</DetailBook>
                <DetailBook>Année : {year}</DetailBook>
            </DescriptionBook>
            <Resume>
                <DetailBook>Résumé: {resume}</DetailBook>
            </Resume>
            <AddToCart clickFunction={handleClick} isAdd={isAdd} />
        </ItemBook>
    );
}

export default BookDetail;

const ImageBook = styled.div`
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  box-sizing: border-box;
  width: 25%;
  float: left;
  /*& > img {
    min-height: 180px;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    align-self: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }*/
`;

const DescriptionBook = styled.div`
  width: 50%;
  float: left;
  position: relative;
  box-sizing: border-box;
`;

const Resume = styled.div`
  float: left;
  position: relative;
  box-sizing: border-box;
`;

const TitleBook = styled.h1`
  color: #1a5276;
  float: left;
  position: relative;
  box-sizing: border-box;
`;

const DetailBook = styled.p`
  color: #1a5276;
  float: left;
  position: relative;
  box-sizing: border-box;
`;

const ItemBook = styled.div`
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  float: left;
  position: relative;
`;
