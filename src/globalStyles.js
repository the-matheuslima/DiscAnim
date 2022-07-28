import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  text-decoration: none;
}

:root {
  --color-bg: #122438;
  --color-primary: #0B1622;
  --color-secondary: #020508;
  --color-tercery: #fff;
  --color-text: #fff;
  --color-border: #d3d0d0;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  max-width: 1440px;
  margin: 0 auto;
}


.app__container-type-movie {
  color: var(--color-text);
  padding: 1rem;
}
`;

export const AppContainer = styled.section`
  padding: 1rem 1.5rem;
`;

export const PosterContent = styled.div`
    border-radius: 5px;
`;
export const PosterImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 5px;
`;

export const AnimeMore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default GlobalStyle;
