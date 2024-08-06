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
import { SvgComponent } from "../atomos/FondosSvgComponent";
import { Lottieanimacion } from "../atomos/Lottieanimacion";
import animacion from "../../assets/construir.json";
import Lottie from "react-lottie";
export function BannerPreestreno() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacion,
  };
  return (
    <Container $color={`rgba(45,45,45,1)`}>
       <span>🔥PROYECTOS EN CONSTRUCCIÓN</span>
       <span>-puedes acceder de forma anticipada y proponer modulos a agregar</span>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  font-size: 30px;
  flex-direction:column;
  font-weight:700;
  gap:10px;
  padding:10px;
`;
