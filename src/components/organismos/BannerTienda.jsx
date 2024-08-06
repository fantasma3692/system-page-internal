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

import Iframe from 'react-iframe'
export function BannerTienda() {
  const navigate = useNavigate();
  const { dataglobales } = useGlobalesStore();
  const irRutas = () => {
    navigate("/rutas");
  };
  return (
    <>
    
      <Container>
       
        <div className="content-wrapper-context">
          <span className="titulo">HASTE PREMIUM Y ACCEDE A TODOS LOS PRODUCTOS</span>
          <div className="content-text">Obtienes acceso a toda la tienda.</div>
          <Btnsave
            url={dataglobales.urlsubbuymeacoffee}
            titulo="UNIRME"
            bgcolor="#FF5722"
            icono={<BsFire />}
            color="#1a1919"
            shadowcolor="#090909"
          />
        </div>

        <img
          className="content-wrapper-img"
          src={dataglobales?.imagenbannertienda}
          alt=""
        ></img>
      </Container>
    </>
  );
}
const Container = styled.div`
  position: relative;
color:#fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #6b6b6b;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='rgba(33, 33, 33, 0.45)'/><path d='M14.5 6.628L8.886 3.372v-6.515L14.502-6.4l5.612 3.257-.001 6.514zm0 50.06l-5.613-3.256v-6.515l5.614-3.258 5.612 3.257-.001 6.515zm14.497-25.117l-5.612-3.257v-6.515L29 18.541l5.612 3.257-.001 6.515zm-29 0l-5.612-3.257v-6.515L0 18.541l5.612 3.257v6.515zM14.5 11.82L4.36 5.967l.002-11.706 10.14-5.855L24.638-5.74l-.001 11.707zm0 50.06L4.36 56.028l.002-11.706 10.14-5.855 10.137 5.852-.001 11.707zm14.498-25.118L18.858 30.91l.002-11.707L29 13.349l10.137 5.853-.001 11.706zm-29 0l-10.139-5.852.002-11.707L0 13.349l10.138 5.853-.002 11.706zm14.501-19.905L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'  stroke-linecap='square' stroke-width='1' stroke='rgba(128, 126, 126, 0.2)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  background-repeat: no-repeat;
  border-radius: 14px;
  @media ${Device.laptop} {
    width: 100%;
  }
  .content-wrapper-context {
    padding: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    .titulo {
      font-size: 20px;
      font-weight: 700;
    }
    .content-text {
      font-weight: 400;
      font-size: 14px;

      line-height: 1.7em;
      color: #ebecec;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .content-wrapper-img {
    padding: 20px;
    width: 90px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -25px;
    object-position: center;
    animation: flotar 1.8s ease-in-out infinite alternate;
    margin-left: 10px;
    @media ${Device.tablet} {
      width: 80px;
    }
    @media ${Device.laptop} {
      width: 80px;
    }
    @media ${Device.desktop} {
      width: 120px;
    }
  }
  @keyframes flotar {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(15px);
    }
  }
`;
const ContentSocial = styled.section`
  display: flex;
  gap: 10px;
  padding-top: 15px;
  cursor: pointer;

  a {
    transition: 0.3s;
    color: #fff;
    font-size: 18px;
  }

  a {
    &:hover {
      transform: translateY(-8px);
    }
  }
`;
const Frase = styled.span`
  display: none;
  font-weight: 650;
  @media ${Device.desktop} {
    font-size: 20px;
    display: block;
  }
`;
