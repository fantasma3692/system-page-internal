import styled from "styled-components";
import {
  Btnsave,
  Device,
  SocialCard,
  useCursosStore,
  useGlobalesStore,
} from "../..";
export function CardConsole() {
  const { dataglobales } = useGlobalesStore();
  const { itemselectCategorias } = useCursosStore();
  return (
    <Container $bgcolor1={itemselectCategorias.color}>
      <section className="area1">
        <span class="property">CUPON ACTIVO: </span>
        <span>{dataglobales?.cupon}</span>
        <br></br>
        <br></br>
        <span class="method">FECHA CADUCA: </span>
      </section>

      <span class="string">'{dataglobales?.fechacaduca}'</span>
      <br></br>
      <br></br>
      <span className="function">PROMOCION: </span>
      <span>{dataglobales?.promocion}</span>
      <span class="function"></span>

      <ContentOtrosmediospago>
        <span>Ahora puedes adquirir por:</span>
        <section className="contentimg">
          <img src="https://i.ibb.co/ykLX3BN/9877sd.png" />
          <img src="https://i.ibb.co/wLRY5w2/plin-logo-967-A4-AF583-seeklogo-com.png" />
          <span>{dataglobales?.numeros}</span>
        </section>
        <Btnsave
          url="https://t.me/codigo369new"
          color="#fafafa"
          titulo="Telegram"
          bgcolor="#000"
          border="1px"
        />
      </ContentOtrosmediospago>
      <SocialCard />

      <Contentlenguaje>{itemselectCategorias.icon}</Contentlenguaje>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  justify-content: start;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  background-color: red;
`;
const Contentlenguaje = styled.div`
  width: 200px;
  font-size: 20rem;
  display: flex;
  position: absolute;
  right: -50px;
  bottom: -70px;
  rotate: -37deg;
  opacity: 0.5;
`;

const ContentOtrosmediospago = styled.section`
  background-color: rgba(55, 55, 55, 0.5);
  border-radius: 20px;
  padding: 15px;
  color: #fff;
  position: relative;
  left: 50px;
  font-family: "Lucida Console", Monaco, monospace;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${Device.tablet} {
  }
  .contentimg {
    align-items: center;
    display: flex;
    position: relative;

    gap: 15px;
    img {
      width: 30px;
      object-fit: contain;
    }
    span {
      font-size: 14px;
    }
  }
`;
