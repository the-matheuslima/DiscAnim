import styled from "styled-components";

export const NavContent = styled.nav`
    background-color: var(--color-primary);
    backdrop-filter: blur(30px);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding: 1rem 1.5rem;
`;

export const Logo = styled.h2`
    font-size: 2rem;
    color: white;
    text-decoration: none;

    :hover {
      color: #dbdada;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 40%;

    @media (max-width: 870px) {
      width: 50%;
    }
`;

export const Input = styled.input`
    height: 25px;
    width: 100%;
    font-size: 1rem;
    padding: 10px;
    outline: none;
    border-radius: 5px;

    ::placeholder {
      opacity: 0.3;
    }
`;
