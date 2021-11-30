import React from "react";
import BooksCards from "./BookCards";
//import Presentation from "./Presentation"
import styled from "styled-components";

const Index = () => {
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

export default Index;
