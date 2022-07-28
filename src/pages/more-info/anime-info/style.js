import styled from "styled-components";

export const DetailsInfo = styled.div`
    margin-top: 1rem;
    line-height: 1.9rem;
    padding: 10px;
    background-color: var(--color-primary);
    color: var(--color-tercery);

    @media (max-width: 489px) {
      width: 80%;
      text-align: center;
  }
`;

export const BorderInfo = styled.p`
  border-bottom: 1px solid var(--color-border);
`;
