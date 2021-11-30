import styled from "styled-components";

const MenuContainer = styled.div`
  & > ul {
    display: flex;
    gap: 10px;
  }

  & > ul > li {
    display: inline-block;
    padding: 0 20px;
    text-align: center;
    color: rgb(169, 204, 227);
    font-weight: bold;
    border: 3px solid rgb(31, 97, 141);
  }
`;

export default MenuContainer;
