import styled from "styled-components";

export const CharactersContainer = styled.div`
  text-align: center;
`;

export const ListItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 1rem;
    justify-content: center;
`;

export const ListItem = styled.li`
    list-style: none;
    width: 121px;
    height: 148px;
`;

export const CharactersImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
