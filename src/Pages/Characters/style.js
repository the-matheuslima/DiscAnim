import styled from "styled-components";

export const ListItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const ListItem = styled.li`
    list-style: none;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    width: 225px;
    height: 313px;

    @media (max-width: 870px) {
      width: 175px;
      height: 263px;
    }
`;

export const ListItemImages = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ListItemHidden = styled.div`
    transform: translateY(100%);
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    position: absolute;
    top: 0;
    color: black;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;

    ${ListItem}:hover &{
      transform: translateY(0%);
      backdrop-filter: blur(6px);
    }
`;

export const NameCharacter = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: black;
    text-align: center;
    cursor: pointer;
`;
