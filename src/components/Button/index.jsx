import React from "react";
import styled from "styled-components";

function index({ text }) {
  return (
    <Button className="app__button">
      {text}
    </Button>
  );
}

const Button = styled.button`
  padding: 10px 15px;
  background-color: transparent;
  color: var(--color-text);
  border-top: 2px dashed var(--color-border);
  border-left: 2px dashed var(--color-border);
  cursor: pointer;
`;

export default index;
