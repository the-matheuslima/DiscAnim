import styled from "styled-components";

export const HeaderContent = styled.header`
  text-align: center;
  padding-top: 1.5rem;
`;

export const ListItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
`;

export const ListItem = styled.li`
    list-style: none;
    position: relative;
    overflow: hidden;
`;

export const ListItemPoster = styled.img`
    width: 185px;
    height: 273px;
    object-fit: cover;
    border-radius: 5px;
`;

export const ListItemHiddenAnime = styled.div`
    transform: translateY(100%);
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    position: absolute;
    top: 0;
    color: black;
    backdrop-filter: blur(6px);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${ListItem}:hover &{
        transform: translateY(0);
        visibility: visible;
    }
`;

export const ListItemNameAnime = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: black;
    text-align: center;
`;
