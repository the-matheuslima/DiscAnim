import styled from "styled-components";

export const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  height: 80px;
  background-color: var(--color-primary);
  margin-top: 2rem;
  width: 100%;
  color: var(--color-tercery);
  position: fixed;
  position: inherit;
  bottom: 0;
`;

export const CodedBy = styled.p`
  .author{
    text-decoration: underline;
    color: var(--color-border);
  }
`;

export const IconFooter = styled.a`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 5px;
  margin: 5px;
  padding: 2px;
`
