import styled from "styled-components";

export const FondoShape = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  mix-blend-mode: soft-light;
  opacity: 0.5;
  z-index: -1;
  margin: -20px;
`;
