import styled from "styled-components";
import { CategoriasCursos, CursosData } from "../../utils/dataEstatica";
import {
  CardCurso,
  ContentCards,
  BannerTop,
  CardSocial,
  FondoShape,
  ShapeSBig,
  ShapeSmall,
  useCursosStore,
  Spinner,
  ContentCategorias,
  Header,
  SeccionNuevosCursos,
  Cardinformativa,
} from "../../index";
import { Device } from "../../styles/breakpoints";

import { useQuery } from "@tanstack/react-query";
import { Spinner2 } from "../moleculas/Spinner2";
import { CardCurso2 } from "../organismos/CardCurso2";
import { BannerClonSpotify } from "../moleculas/BannerClonSpotify";
import { useState } from "react";

export function CursosTemplate() {
  const [isHovered, setIsHovered] = useState({
    section1: false,
    section2: false,
  });
  const {
    datacursos,
    mostrarcursos,
    etiquetas,
    setIdstate,
    idstate,
    selectEtiquetas,
    itemselectCategorias,
  } = useCursosStore();
  const {
    data: componentes,
    isLoading,
    error,
  } = useQuery(
    ["cursos", { etiquetas: etiquetas }],
    () => mostrarcursos({ etiquetas: etiquetas }),
    { refetchOnWindowFocus: false }
  );

  const {
    data: datacursosnuevos,
    isLoading: isloadingnuevos,
    error: errornuevos,
  } = useQuery(
    ["cursos", { etiquetas: "#nuevo" }],
    () => mostrarcursos({ etiquetas: "#nuevo" }),
    { refetchOnWindowFocus: false }
  );
  const {
    data: datacursosgratis,
    isLoading: isloadinggratis,
    error: errorgratis,
  } = useQuery(
    ["cursos", { etiquetas: "#gratis" }],
    () => mostrarcursos({ etiquetas: "#gratis" }),
    { refetchOnWindowFocus: false }
  );
  if (isLoading) {
    // return <Spinner />;
  }
  if (error) {
    return <span>Error</span>;
  }
  return (
    <Container>
      <Section1
        isHovered={isHovered.section1}
        onMouseEnter={() => setIsHovered({ ...isHovered, section1: true })}
        onMouseLeave={() => setIsHovered({ ...isHovered, section1: false })}
      >
        <BannerClonSpotify />
        {/* <Header /> */}
        {/* <Cardinformativa/> */}

        <section className="contentCategorias">
          <ContentCategorias
            data={CategoriasCursos}
            setIdstate={setIdstate}
            idstate={idstate}
            setSelect={selectEtiquetas}
          />
        </section>

        <section className="bannerCursos">
          {isLoading ? (
            <Spinner2 />
          ) : (
            <ContentCards>
              {datacursos?.map((item, index) => {
                return <CardCurso key={index} item={item} />;
              })}
            </ContentCards>
          )}

          <ShapeSBig $right="45%" $bgcolor={itemselectCategorias.color2} />
          <ShapeSmall $right="56%" $bgcolor={itemselectCategorias.color} />
        </section>
      </Section1>

      <Section2
        isHovered={isHovered.section2}
        onMouseEnter={() => setIsHovered({ ...isHovered, section2: true })}
        onMouseLeave={() => setIsHovered({ ...isHovered, section2: false })}
      >
        <Titulo>Cursos Nuevos</Titulo>
        <ContentCursos>
          {datacursosnuevos?.map((item, index) => {
            return <CardCurso2 key={index} item={item}></CardCurso2>;
          })}
        </ContentCursos>

        <Titulo>Cursos Gratis</Titulo>
        <ContentCursos>
          {datacursosgratis?.map((item, index) => {
            return <CardCurso2 key={index} item={item}></CardCurso2>;
          })}
        </ContentCursos>
      </Section2>
    </Container>
  );
}

const Containerr = styled.div`
  display: flex;
  height: 100vh;
`;

const Section = styled.div`
  flex: 1;
  overflow-y: scroll;

  transition: overflow 0.3s ease;
  /* Estilos para la barra de desplazamiento */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(143, 143, 143, 0.5);
    border-radius: 6px;
    visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
  }

  &:hover &::-webkit-scrollbar-thumb {
    visibility: visible;
  }
`;
const Section1 = styled(Section)`
  flex: 5; /* Ajusta la proporción de la sección 1 */
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section2 = styled(Section)`
  flex: 1; /* Ajusta la proporción de la sección 2 */
  background-color: #121212;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  display: none;
  @media ${Device.desktop} {
    display: block;
  }
`;
const Content = styled.div`
  height: 150vh; /* Ajusta la altura del contenido para que sea más grande que el contenedor y active el scroll */
`;
const ContainerMain = styled.section`
  width: 100%;
  transition: all 0.3s;
  &:hover {
    overflow: auto;
  }
  &::-webkit-scrollbar {
    width: 12px; /* Ancho de la barra de desplazamiento */
  }

  &::-webkit-scrollbar-track {
    background: rgba(
      0,
      0,
      0,
      0.1
    ); /* Fondo de la pista de la barra de desplazamiento */
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(
      116,
      116,
      116,
      0.5
    ); /* Color del pulgar de la barra de desplazamiento */
    border-radius: 6px; /* Bordes redondeados del pulgar */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(
      0,
      0,
      0,
      0.7
    ); /* Color del pulgar al pasar el mouse por encima */
  }
`;
const Container = styled.div`
  display: flex;
  color: #fff;
  gap: 10px;
  width: 100%;
  height: 100vh;

  .header {
    /* background-color: rgba(93, 246, 37, 0.4); */
  }

  .contentCategorias {
  }
  .bannerCursos {
    position: relative;

    @media ${Device.laptop} {
    }
    /* background-color: rgba(93, 246, 37, 0.4); */
  }
`;
const Area3 = styled.section`
  padding: 10px;
  background-color: #121212;
  border-radius: 8px;
  width: 350px;
  display: auto;
  flex: 1;
  @media ${Device.desktop} {
    display: block;
  }
`;
const ContentCursos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Titulo = styled.span`
  font-weight: 700;
  font-size: 24px;
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
`;
