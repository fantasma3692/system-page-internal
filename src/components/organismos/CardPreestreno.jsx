import styled from "styled-components";
import { FondoShape } from "../atomos/FondoShape";
import fondobanner from "../../assets/fondobanner.svg";
import { Btnsave } from "../moleculas/Btnsave";
import { Device } from "../../styles/breakpoints";
import { BsFire } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useGlobalesStore } from "../../store/GlobalesStores";
import { v } from "../../styles/variables";
import { DataRedesSociales } from "../../utils/dataEstatica";
import { IoMdTennisball } from "react-icons/io";
import { TbBrandReact } from "react-icons/tb";
import { SvgComponent } from "../atomos/FondosSvgComponent";
import { FondoSpace } from "./Fondospace";

export function CardPreestreno({
  titulo,
  subtitulo,
  fechapublicacion,
  linkgrupo,
  linkcurso,
  icono,colorFondo,colorstroke,colorborde
}) {
  return (
    <Container
      $colorFondo={colorFondo}
      $colorstroke={colorstroke}
      $colorborde={colorborde}
    >
       <FondoSpace />
      <span className="textenconstruccion">#enconstruccion</span>
      <section className="contentCentral">
        <span className="titulo">{titulo}</span>
        <span>{subtitulo}</span>
        <Btnsave titulo="Ver en udemy" url={linkcurso} color="#fff" />
        <Btnsave
          titulo="Unirse al grupo"
          url={linkgrupo}
          color={colorborde}
          bgcolor="#0e0e0e"
        />
        <span>{fechapublicacion}</span>
      </section>
      <span className="icono">{icono}</span>
    </Container>
  );
}
const Container = styled.div`
  height: auto;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid ${(props)=>props.$colorborde};
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='${(
    props
  ) =>
    props.$colorFondo}'/><path d='M3.25 10h13.5M10 3.25v13.5'  stroke-linecap='square' stroke-width='1' stroke='${(
    props
  ) =>
    props.$colorstroke}' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");

  background-repeat: no-repeat;
  width: 100%;
  border-radius: 14px;
  padding: 15px;
  &::before {
    content: "";
    display: flex;
    background: rgb(224, 84, 33);
    background: linear-gradient(
      0deg,
      rgba(4, 29, 56, 0.7) 0%,
      rgba(66, 152, 245, 0.06) 100%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    z-index:-1;
  }

  .contentCentral {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .titulo {
      font-size: 3vw;
      font-weight: 700;
    }
  }

  .textenconstruccion {
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    font-size: 12px;
    @media ${Device.tablet} {
      font-size: 20px;
    }
  }
  .textfooter {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 10px;
  }
  .icono {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 15vw;
    opacity: 0.09;
    color: ${(props)=>props.$colorborde};
    transform: rotate(-25deg);
  }
`;
