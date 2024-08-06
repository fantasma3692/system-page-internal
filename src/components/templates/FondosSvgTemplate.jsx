import styled from "styled-components";
import { DataFondosSvg } from "../../utils/dataEstatica";
import {
  ShapeSBig,
  useCursosStore,
  CardFondoSvg,
  SelectorSvg,
  useFondosSvgStore,
  Header,
  PowerBy,
  BannerSeccionRuta,
  Spinner,
  scaleup,
} from "../../index";
import { Device } from "../../styles/breakpoints";

import { useQuery } from "@tanstack/react-query";
import { Spinner2 } from "../moleculas/Spinner2";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export function FondosSvgTemplate() {
  const [statefondo, setStatefondo] = useState("");
  const [stateSelector, setStateSelector] = useState(false);
  const {
    fondocss,
    mostrarfondossvg,
    datafondossvg,
    fondoitemselect,
    setFondoitemselect,
  } = useFondosSvgStore();

  const { data, isLoading, error } = useQuery(
    ["mostrar fondossvg"],
    mostrarfondossvg,
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );
  if (isLoading) {
    // return <Spinner />;
  }
  if (error) {
    return <span>Error</span>;
  }
  return (
    <Container
      $imagen={fondoitemselect.imagen}
      $background={fondoitemselect.stylecodigo369}
    >
      {/* <Contentselect>
        <span className="titulo">FONDOS SVG PREMIUM</span>

        <Icon className="iconofuego" icon="fluent-emoji:alien" />

        <PowerBy />
      </Contentselect> */}

      <section className="main">
        {fondoitemselect.imagen && <SelectorSvg />}

        {isLoading ? (
          <Spinner2 />
        ) : (
          <ContentCardSvg>
            {datafondossvg?.map((item, index) => {
              return (
                <CardFondoSvg funcion={setStatefondo} key={index} item={item} />
              );
            })}
          </ContentCardSvg>
        )}

        {/* <ShapeSBig $right="45%" $bgcolor={itemselectCategorias.color2} />
        <ShapeSmall $right="56%" $bgcolor={itemselectCategorias.color} /> */}
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  position: relative;
  /* background-image: url(${(props) => props.$statefondo});
  background-size: auto;
  background-repeat: repeat;
  background-position: center;
  background-attachment: scroll; */
  background: ${(props) => props.$background} url(${(props) => props.$imagen})
    /*background > repeat attachment position size url*/;
  @media ${Device.tablet} {
 
  }
  @media ${Device.desktop} {
      
  }
  min-height: 100vh;
  .main {
    margin: 20px;
    display: flex;
    position: relative;
    flex-direction: column;
    /* background-color: rgba(93, 246, 37, 0.4); */
    gap: 20px;
    @media ${Device.laptop} {
      margin-top: 10px;
      flex-direction: row;
    }
  }
`;
const Titulo = styled.span`
  font-weight: 700;
  font-size: 24px;
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
`;
const ContentCardSvg = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding-top: 10px;
`;
const Contentselect = styled.div`
  border-radius: 5px;
  width: 90%;
  padding: 20px;
  display: flex;
 
  /* overflow: hidden; */
  position: relative;
  justify-content: center;
  color: #fff;
  background: rgb(0, 36, 8);
  background: linear-gradient(
    266deg,
    rgba(0, 36, 8, 1) 0%,
    rgba(0, 255, 119, 0.904) 0%,
    rgba(31, 50, 195, 0.797) 61%,
    rgba(61, 30, 238, 0.653) 90%
  );
  .titulo {
    z-index: 1;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 2.5rem;
  }
  .iconofuego {
    position: absolute;
    right: -30px;
    font-size: 11rem;
    top: -20px;
    transition: rotate 3.2s;
    transform: rotate(-25deg);
  }
  @media ${Device.tablet} {
    width: 750px;
  }
`;
