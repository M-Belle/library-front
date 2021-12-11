import {Link} from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
    const id = localStorage.getItem('userId')

    return (
        <MenuContainer>
            <ul>
                <li>
                    <Link to={`/book`}>Trouver un livre</Link>
                </li>
                <li>
                    <Link to={`/bookpropose`}>Proposer un livre</Link>
                </li>
                <li>
                    <Link to={`/user/${id}`}>Mon compte</Link>
                </li>
            </ul>
        </MenuContainer>
    );
};

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

export default Menu;
