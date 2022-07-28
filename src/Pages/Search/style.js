import styled from "styled-components";

export const ListItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    padding-top: 2rem;
`;

export const ListItem = styled.li`
    width: 225px;
    height: 313px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    @media (max-width: 870px) {
      width: 175px;
      height: 263px;
    }
`;

export const ListItemPoster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ListItemHidden = styled.div`
    transform: translateY(100%);
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    color: var(--color-primary);

    ${ListItem}:hover &{
      transform: translateX(0);
      visibility: visible;
      position: absolute;
      background-color: transparent;
      backdrop-filter: blur(6px);
      width: 100%;
      height: 100%;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: black;
      padding: 1.2rem;
    }
`;

export const AnimeTitle = styled.h2`
    color: var(--color-primary);
    font-size: 1.2rem;
`;

