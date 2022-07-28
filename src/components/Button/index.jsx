import React from "react";
import styled from "styled-components";

function Button({ children }) {
  return (
    <CButton>
      {children}
    </CButton>
  );
}

const CButton = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  color: var(--color-text);
  border-top: 2px dashed var(--color-border);
  border-left: 2px dashed var(--color-border);
  cursor: pointer;
`;

export default Button;
