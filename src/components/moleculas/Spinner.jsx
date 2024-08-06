import styled from "styled-components";
import { DotLoader } from "react-spinners";

export function Spinner() {
 
  return (
    <Container>
      <DotLoader color="#ffffff" />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #14161A;
  transform: all 0.3s;
  color: #6df643;
`;
