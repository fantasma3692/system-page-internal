import styled from "styled-components";
import { CursosData } from "../../utils/dataEstatica";
import {
  CardCurso,
  BannerTop,
  CardSocial,
  FondoShape,
  ShapeSBig,
  ShapeSmall,
  useCursosStore,
  Spinner,
  ContentCategorias,
  CategoriasApuntes,
  ApuntesData,
  CardApuntes,
  CardComunidad,
  useComunidadStore,
  Header,
} from "../../index";
import { Device } from "../../styles/breakpoints";

import { useQuery } from "@tanstack/react-query";
import { BannerClonSpotify } from "../moleculas/BannerClonSpotify";
export function ComunidadTemplate() {
  const { datacomunidad, mostrarcomunidad } = useComunidadStore();
  const {
    data: componentes,
    isLoading,
    error,
  } = useQuery(["comunidad"], mostrarcomunidad, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  if (isLoading) {
    // return <Spinner />;
  }
  if (error) {
    return <span>Error</span>;
  }
  return (
    <Container>
      <ShapeSmall $bgcolor="#212121" />
      <ShapeSBig $bgcolor="#8a8a8a" />
      <ShapeSmall $right="0" $bgcolor="#a9a9a9" />
      <ShapeSBig $right="0" $bgcolor="#730ed1" />
      <ShapeSBig $right="0" $bgcolor="#000000" />
  
      <section className="header">
       <BannerClonSpotify/>
      </section>

      <section className="bannerCursos">
        {/* {
          isLoading && <span>...</span>
        } */}
        <span className="titulo">
          Comunidad - unete y sientete como en casa. Bienvenido.
        </span>
        
        <Content>
          {datacomunidad.map((item, index) => {
            return <CardComunidad key={index} item={item} />;
          })}
        </Content>
      </section>
    </Container>
  );
}
const Container = styled.div`
  padding: 20px;
  display: grid;
  gap: 60px;
  color:${({theme})=>theme.text};
  @media ${Device.tablet} {
    gap: 40px;
  }
  @media ${Device.laptop} {
    gap: 0px;
  }

  grid-template-areas:
    "header"
    "contentCategorias"
    "cursosCards";

  .header {
    grid-area: header;
    /* background-color: rgba(93, 246, 37, 0.4); */
  }
  .contentCategorias {
    grid-area: contentCategorias;
  }
  .bannerCursos {
    padding-top: 20px;
    .titulo {
      font-weight: 650;
      font-size: 30px;
    }
    grid-area: cursosCards;
    @media ${Device.laptop} {
      margin-top: 20px;
    }
    /* background-color: rgba(93, 246, 37, 0.4); */
  }
`;
const Content = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  @media ${Device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-template-rows: repeat(auto-fill, auto);
  }
`;
