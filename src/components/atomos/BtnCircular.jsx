
import styled from "styled-components";

export function BtnCircular({ icono, funcion, state }) {
 
  return (
    <Container disabled={state === true} onClick={funcion}>
      {icono}
    </Container>
  );
}
const Container = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  border-color: #121212;
  border-width: 2px;
  border-style: dashed;
  transition: 0.3s ease-in-out;
  background-color:initial;
  svg {
    font-size: 25px;
    color: #121212;
  }
  cursor: pointer;
  &:hover {
    background: #121212;
   
    svg {
   
    color: #ffffff;
  }
  }
`;
