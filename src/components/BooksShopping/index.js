import BookItem from "../BookItem";
import styled from "styled-components";

import MortsurleNil from "../../../pictures/Mort-sur-le-Nil.jpg";
import JurassicPark from "../../../pictures/Jurassic-Park.jpg"
import SeigneurdesAnneauxT1 from "../../../pictures/Le-seigneur-des-anneaux-t1.jpg"

const BooksShopping = () => {

    const books = [
        {
            id: 1,
            title: "Mort sur le Nil",
            author: "Agatha Christie",
            genre: "Policier",
            year: 1937,
            image: {MortsurleNil}
        },
        {
            id: 2,
            title: "Jurassic Park",
            author: "Michael Crichton",
            genre: "Science-Fiction",
            year: 1990,
            image: {JurassicPark}
        },
        {
            id: 3,
            title: "Le Seigneur des anneaux (Tome 1) - La fraternité de l'anneau",
            author: "J. R. R. Tolkien",
            genre: "Fantastique",
            year: 1954,
            image: {SeigneurdesAnneauxT1}
        }
    ];

  return (
    <BooksShoppingStyle>
      <BookItem
        titleBook={books.title}
        authorBook="Jules Verne"
        typeBook="Classique"
        imageBook={voyageCentreTerre}
        pointNumberBook="🌳🌳🌳"
      />
      <BookItem
        titleBook="Le Parfum"
        authorBook="Patrick Süskind"
        typeBook="Littérature étrangère"
        imageBook={leParfum}
        pointNumberBook="🌳🌳"
      />
      <BookItem
        titleBook="Shining"
        authorBook="Stephen King"
        typeBook="Horreur"
        imageBook={shining}
        pointNumberBook="🌳"
      />
      <BookItem
        titleBook="L'étranger"
        authorBook="Albert Camus"
        typeBook="Classique"
        imageBook={etranger}
        pointNumberBook="🌳"
      />
      <BookItem
        titleBook="La Condition Humaine"
        authorBook="André Malraux"
        typeBook="Classique"
        imageBook={conditionHumaine}
        pointNumberBook="🌳🌳"
      />
      <BookItem
        titleBook="Harry Potter à l'Ecole des Sorciers"
        authorBook="J.K. Rowling"
        typeBook="Enfance"
        imageBook={harryPotterEcoleSorcier}
        pointNumberBook="🌳🌳🌳"
      />
      <BookItem
        titleBook="Le Petit Prince"
        authorBook="Antoine de Saint-Exupery"
        typeBook="Enfance"
        imageBook={petitPrince}
        pointNumberBook="🌳🌳🌳"
      />
    </BooksShoppingStyle>
  );
};

const BooksShoppingStyle = styled.div`
  padding: 20px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export default BooksShopping;
