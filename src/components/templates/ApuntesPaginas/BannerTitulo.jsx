import styled from "styled-components";
import { bounce, girar } from "../../../styles/Animaciones";

export function BannerTitulo({
  rgb1,
  rgb2,
  rgb3,
  rgb4,
  rgb5,
  icono,
  titulo,
  descripcion,
}) {
  return (
    <Container $rgb1={rgb1} $rgb2={rgb2} $rgb3={rgb3} $rgb4={rgb4} $rgb5={rgb5}>
      <article className="contentTextos">
        <span className="title">{titulo}</span>
        <span className="descripcion"> {descripcion}</span>
      </article>
      <span className="icono">{icono}</span>
    </Container>
  );
}
const Container = styled.div`
  color: #fff;
 position: relative;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(${(props) => props.$rgb1}, 0.95);
  background: linear-gradient(
    266deg,
    rgba(${(props) => props.$rgb2}, 1) 0%,
    rgba(${(props) => props.$rgb3}, 0.104) 0%,
    rgba(${(props) => props.$rgb4}, 0.5970763305322129) 61%,
    rgba(${(props) => props.$rgb5}, 1) 90%
  );
  .contentTextos {
    text-align: start;
    align-items: start;
    display: flex;
    flex-direction: column;

    .title {
      font-weight: 700;
      font-size: 25px;
    }
  }
  .icono {
    font-size: 50px;
    margin-right: 5px;
    animation: ${girar} 10s infinite linear;
   
  }
`;
