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

export function BannerTop() {
  const navigate = useNavigate();
  const { dataglobales } = useGlobalesStore();
  const irRutas = () => {
    navigate("/rutas");
  };
  return (
    <Container>
      <div className="content-wrapper-context">
        <span className="img-content">RUTAS DE APRENDIZAJE</span>
        <div className="content-text">
          Rutas segun los objetivos que quieras alcanzar.
        </div>
        <Btnsave
          funcion={irRutas}
          titulo="Ver rutas"
          bgcolor="#FF5722"
          icono={<BsFire />}
          color="#1a1919"
          shadowcolor="#090909"
        />
        <ContentSocial>
          {DataRedesSociales?.map((item, index) => {
            return (
              <a href={item.url} target="_blank" key={index}>
                <span>{<item.icono />}</span>
              </a>
            );
          })}
        </ContentSocial>
        {/* <Frase>"Cualquiera puede programar"</Frase> */}
      </div>

      <img
        className="content-wrapper-img"
        src={dataglobales?.imagenbanner1}
        alt=""
      ></img>
      <img className="cuadros" src={fondobanner}></img>
    </Container>
  );
}
const Container = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border: 2px solid #f05113;
position:relative;
  &:hover {
    .cuadros {
      transform: rotate(37deg) rotateX(5deg) rotateY(12deg) skew(2deg)
        skewY(1deg) scaleX(1.2) scaleY(1.2);
    }
  }
  .cuadros {
    margin-left:-20px;
    position: absolute;
    height: 200vh;
    width: 100vw;
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    z-index:-1;
  }

  border-radius: 14px;
  padding: 15px;

  @media ${Device.laptop} {
    width: 100%;
  }
  .content-wrapper-context {
    gap: 10px;
    display: flex;
    flex-direction: column;
    .img-content {
      font-weight: 500;
      font-size: 17px;
      display: flex;
      align-items: center;

      svg {
        width: 28px;
        margin-right: 14px;
      }
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
    width: 90px;
    object-fit: cover;
    margin-top: -25px;
    object-position: center;
    animation: flotar 1.8s ease-in-out infinite alternate;
    margin-left: 10px;
    @media ${Device.tablet} {
      width: 90px;
    }
    @media ${Device.laptop} {
      width: 90px;
    }
    @media ${Device.desktop} {
      width: 150px;
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
