import styled from "styled-components";
import { HashLoader } from "react-spinners";

export function Spinner2() {
  return (
    <Container>
      <HashLoader color="#ffffff" />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  transform: all 0.3s;
 
`;
