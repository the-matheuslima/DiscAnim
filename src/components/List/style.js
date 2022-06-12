import styled from "styled-components";

export const ListConteiner = styled.div`
  position: absolute;
  overflow: hidden;
`;

export const ListItemsPoster = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
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

    ${ListConteiner}:hover &{
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
