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
`;

const BookList = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 24px;
`;

//Fonctionnalité de recherche par titre ou auteur ou genre (Pas terminée)

            /*state = {
              titleBook: null,
              authorBook: null,
              typeBook: null,
            };

            change = (e) => {
              this.setState({
                [e.target.id]: e.target.value,
              });
            };

            submit = (e) => {
              e.preventDefault();
              console.log(this.state);
            };

            render() {
              return (
                <div>
                  <form onSubmit={this.submit}>
                    <Label htmlFor="titleBook">Titre du Livre</Label>
                    <Input type="text" id="titleBook" onChange={this.change} />
                    <Label htmlFor="authorBook">Auteur du Livre</Label>
                    <Input type="text" id="authorBook" onChange={this.change} />
                    <Label htmlFor="typeBook">Genre du Livre</Label>
                    <TypeBooksList />
                    <ConnexionButton>Trouver</ConnexionButton>
                  </form>
                </div>
              );
            }
        }

const Input = styled.input`
  width: auto;
  padding: 12px 20px;
  margin: 20px 20px 20px 20px;
  box-sizing: border-box;
  border: 2px solid rgb(31, 97, 141);
  border-radius: 8px;
`;

const Label = styled.label`
  font-size: 20px;
  margin: 10px 10px 10px 10px;
  background-color: #5499c7;
  color: white;
  border-radius: 4px;
`;*/
