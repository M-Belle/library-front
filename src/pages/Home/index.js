import React from "react";
import BooksCards from "./BookCards";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
        <BooksCards/>
    </Container>
  );
};

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
`;

export default Home;
