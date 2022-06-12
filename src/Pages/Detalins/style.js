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
    border-radius: 5px;
    overflow: hidden;
`;

// export const ListItemImages = styled.img`
//     width: 205px;
//     height: 293px;
//     object-fit: cover;
// `;

export const ListItemHidden = styled.div`
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

export const NameAnime = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: black;
    text-align: center;
    cursor: pointer;
`;
