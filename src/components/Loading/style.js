import styled, { keyframes } from "styled-components";

export const Loading = styled.div`
  display: flex;
  height: 71vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
`;

const rotete = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingDiv = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid var(--color-border);
  border-radius: 50%;
  animation: ${rotete} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--color-border) transparent transparent transparent;

  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;
