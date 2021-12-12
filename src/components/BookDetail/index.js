import React from "react";
import styled from "styled-components";
import AddToCart from "../AddToCart";
import AddComment from "../AddComment";
import DisplayComment from "../DisplayComment";

const BookDetail = ({ id, title, author, genre, year, resume, img }) => {
    const [isAdd, setIsAdd] = React.useState(true);

    const handleClick = () => {
        setIsAdd(!isAdd);
    };

    return (
        <ItemBook>
            <ImageBook>
                <img src={img} width='70%' height='100%' resizeMode='contain' alt="Couv. Livre" />
                <AddToCart clickFunction={handleClick} isAdd={isAdd} />
            </ImageBook>
            <DescriptionBook>
                <TitleBook>{title}</TitleBook>
                <DetailBook>Auteur : {author}</DetailBook>
                <DetailBook>Genre : {genre}</DetailBook>
                <DetailBook>Année : {year}</DetailBook>
                <Resume>
                    <Label>Résumé</Label>
                    <DetailBook>{resume}</DetailBook>
                </Resume>
            </DescriptionBook>
            <CommentArea>
                <AddComment id={id}/>
                <DisplayComment id={id}/>
            </CommentArea>
        </ItemBook>
    );
}

export default BookDetail;

const ImageBook = styled.div`
  display: inline-block;
  width: 25%;
  height: auto;
  vertical-align: top;
  & > img {
    min-height: 180px;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    align-self: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
`;

const DescriptionBook = styled.div`
  display: inline-block;
  width: 37.5%;
  height: auto;
  vertical-align: top;
`;

const Resume = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: justify;
`;

const Label = styled.h3`
  color: #1a5276;
`;

const TitleBook = styled.h1`
  color: #1a5276;
`;

const DetailBook = styled.p`
  color: #1a5276;
`;

const ItemBook = styled.div`
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const CommentArea = styled.div`
  display: inline-block;
  width: 37.5%;
  height: auto;
  vertical-align: top;
`;
