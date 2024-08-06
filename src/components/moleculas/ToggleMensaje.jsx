import styled from "styled-components";
import { Btnsave } from "./Btnsave";
import { useGlobalesStore } from "../../store/GlobalesStores";
import { Device } from "../../styles/breakpoints";
export function ToggleMensaje({
  item,
  bgprimary,
  bgsecundary,
  state,
  left,
  right,
}) {
  const { dataglobales } = useGlobalesStore();
  return (
    <Container
      $bgprimary={item.tipo === "normal" ? bgprimary : "255, 200, 0"}
      $bgsecundary={bgsecundary}
      $left={left}
      $right={right} $valor={item.valor}
    >
      <article class="content">
        <span>{item.descripcion}</span>
        <p>{item.detalle}</p>
      </article>
      <Btnsave
        url={item.url + dataglobales.cupon}
        titulo="Ver curso"
        bgcolor="#fff"
        width="100%"
        color={`rgb(${item.tipo === "normal" ? bgprimary : "230, 161, 0"})`}
        shadowcolor={`rgb(${
          item.tipo === "normal" ? bgsecundary : "255, 236, 170"
        })`}
      />
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  background: rgb(${(props) => props.$bgprimary});
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  transition: 0.5s;
  width: 300px;
  transition-delay: 0.5s;
  top: 78px;
  justify-content: center;
  left: ${(props) => props.$valor};

  z-index: 1;
  padding: 20px;
  @media ${Device.tablet} {
    position: relative;
    right: 140px;
  }

  /* &::before {
    content: "";
    position: absolute;
    top: -8px;
    width: 20px;
    height: 20px;
    background: rgb(${(props) => props.$bgprimary});
    border-radius: 5px;
    opacity: 1;
    transform: rotate(45deg);
    transition: 0.5s;
  } */
  .content {
    width: 100%;
    color: #fff;
    opacity: 1;
    transition: 0.5s;
    transform: scale(1);
    align-items: start;
    display: flex;
    flex-direction: column;
    span {
      font-size: 25px;
      font-weight: 700;
    }
    p {
      font-size: 18px;
      text-align: start;
    }
  }
`;
