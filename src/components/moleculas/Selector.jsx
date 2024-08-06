import styled from "styled-components";
import { BsFillTriangleFill } from "react-icons/bs";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { Device } from "../../styles/breakpoints";
import { flotar } from "../../styles/Animaciones";
export function Selector({ funcion, texto, bgcolor, icono }) {
  return (
    <Container onClick={funcion} $bgcolor={bgcolor}>
      <BsFillTriangleFill />
      <span>{icono}</span>
      <span>{texto}</span>
      <TbTriangleInvertedFilled />
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.$bgcolor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  width: 90vw;
  color: #191919;
  padding: 10px 0;
  cursor: pointer;
  @media ${Device.tablet} {
    width: auto;
    padding: 8px 20px;
  }
  span {
    font-size: 2.5rem;
    font-weight: 600;
  }
  @media ${Device.tablet} {
    width: auto;
    padding: 8px 20px;
  }
  b {
    animation: ${flotar} 3s ease-in-out infinite;
  }
`;
