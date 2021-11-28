import React from "react";
import styled from "styled-components";
import BookItem from "../../../components/BookItem";

import MortsurleNil from "../../../pictures/Mort-sur-le-Nil.jpg";
import JurassicPark from "../../../pictures/Jurassic-Park.jpg"
import SeigneurdesAnneauxT1 from "../../../pictures/Le-seigneur-des-anneaux-t1.jpg"

const books = [
    {
        id: 1,
        title: "Mort sur le Nil",
        author: "Agatha Christie",
        genre: "Policier",
        year: 1937,
        image: MortsurleNil
    },
    {
        id: 2,
        title: "Jurassic Park",
        author: "Michael Crichton",
        genre: "Science-Fiction",
        year: 1990,
        image: JurassicPark
    },
    {
        id: 3,
        title: "Le Seigneur des anneaux (Tome 1) - La fraternité de l'anneau",
        author: "J. R. R. Tolkien",
        genre: "Fantastique",
        year: 1954,
        image: SeigneurdesAnneauxT1
    }
];

const BookCards = () => {
    return (
        <Container>
            {
                books.map(({id, title, image}) => {
                    return <BookItem key={id} title={title} img={image}/>;
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

