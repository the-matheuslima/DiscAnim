import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AsideLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 18.5%;
  width: 18.5%;

  @media (max-width: 768px) {
      flex-direction: row;
      max-width: none;
      width: 100%;
      justify-content: center;
      gap: 20px;
    }


  @media (max-width: 489px) {
      flex-direction: column;
  }
`;

export const AsideRight = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 80%;

  @media (max-width: 768px) {
      width: 100%;
    }
`;
