import React from "react";
import BooksCards from "./BookCards";
import Presentation from "./Presentation"
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
        <BooksCards/>
        <Presentation/>
    </Container>
  );
};

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
`;

export default Home;
