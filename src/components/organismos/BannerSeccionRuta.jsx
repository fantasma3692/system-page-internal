import styled from "styled-components";
import { Btnsave } from "../moleculas/Btnsave";
import { v } from "../../styles/variables";
import { girar } from "../../styles/Animaciones";
export function BannerSeccionRuta({ bgcolor }) {
  return (
    <Container $bgcolor={bgcolor}>
      <article className="contentTextos">
        <span className="title">Ruta hacia REACT</span>
        <span className="descripcion">
          {" "}
          La librería más popular de JavaScript para el desarrollo de
          aplicaciones móviles y web. Creada por Facebook.
        </span>
      </article>
      <span className="icono">
        <v.iconoreact />
      </span>
    </Container>
  );
}
const Container = styled.div`
color:#fff;
  background-color: ${(props) => props.$bgcolor};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(156, 98, 255, 0.95);
  background: rgb(0, 36, 8);
  background: linear-gradient(
    266deg,
    rgba(0, 36, 8, 1) 0%,
    rgba(255, 0, 179, 0.104) 0%,
    rgba(91, 31, 195, 0.5970763305322129) 61%,
    rgba(61, 30, 238, 0.253) 90%
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
  .icono{
    font-size:50px;
    margin-right:5px;
    animation: ${girar} 5s linear infinite;
  }
`;
