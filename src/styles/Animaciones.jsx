import { keyframes } from "styled-components";
export const flotar = keyframes`
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
    `;
export const girar = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const scaleup = keyframes`
  0%{transform:scale(.5);transform-origin:right center}100%{transform:scale(1);transform-origin:right center};
`;


//animacion de rebote aleatorio
export const bounce = keyframes`
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(50px, -50px);
  }
  50% {
    transform: translate(-50px, 50px);
  }
  75% {
    transform: translate(50px, 50px);
  }
  100% {
    transform: translate(-50px, 50px);
  }
`;