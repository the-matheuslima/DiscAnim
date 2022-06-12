import styled from "styled-components";

export const RecommendationContent = styled.section`
     margin-top: 1rem;
 `;

export const Title = styled.h2`
     font-size: 1.5rem;
     font-weight: normal;
     padding: 1rem 1rem 1rem 0;
`;

export const ListItems = styled.ul`
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     gap: 10px;
     justify-content: center;
`;

export const ListItem = styled.li`
     list-style: none;
     width: 120px;
     height: 180px;
     border-radius: 5px;

     &:hover {
      transition: all 0.5s;
      transform: scale(1.1);
   }
`;

export const ListItemPoster = styled.img`
     border-radius: 5px;
     width: 100%;
     height: 100%;
     object-fit: cover;
`;
