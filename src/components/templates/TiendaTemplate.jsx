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
  useApuntesStore,
  Header,
  Spinner2,
  useGlobalesStore,
  useTiendaStore,
  CardProducto,
  BannerTienda,
  Buscador,

} from "../../index";
import { Device } from "../../styles/breakpoints";

import { useQuery } from "@tanstack/react-query";
import { SeccionMiembros } from "../organismos/SeccionMiembros";
export function TiendaTemplate() {
  const { datatienda, buscarproductos, buscador } = useTiendaStore();

  const {
    data: componentes,
    isLoading,
    error,
  } = useQuery(
    ["buscar tienda", { buscador: buscador }],
    () => buscarproductos(buscador),
    { refetchOnWindowFocus: false }
  );

  if (error) {
    return <span>Error</span>;
  }

  return (
    <Container>
      <ShapeSmall $bgcolor="#191919" />
      <ShapeSBig $bgcolor="#0d0d0d" />
      <ShapeSmall $right="0" $bgcolor="#fff" />
      <ShapeSBig $right="0" $bgcolor="#FF1751" />
      <ShapeSBig $right="0" $bgcolor="#F7027F" />

      <header className="header">
        <BannerTienda />
      </header>
      <section className="contentbuscador">
        <Buscador />
      </section>

      <section className="main">
        {/* {
          isLoading && <span>...</span>
        } */}
        {isLoading ? (
          <Spinner2 />
        ) : (
          <Content>
            {datatienda.map((item, index) => {
              return <CardProducto item={item} key={index} />;
            })}
          </Content>
        )}

        {/* <ShapeSBig $right="45%" $bgcolor="#39f60a45" />
        <ShapeSmall $right="56%" $bgcolor="#2eee1d7c" /> */}
      </section>
      <section className="contentMiembros">
        <SeccionMiembros />
      </section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  gap: 10px;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(3) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='rgba(0, 0, 0,0.2)'/><path d='M3.25 10h13.5M10 3.25v13.5'  stroke-linecap='square' stroke-width='1' stroke='rgba(65, 66, 68,0.2)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  background-repeat: no-repeat;

  grid-template:
    "header" 255px
    "contentbuscador" 100px
    "main" auto
    "contentMiembros" auto;

  @media ${Device.tablet} {
    gap: 20px;
    grid-template:
      "header header" 200px
      "contentbuscador contentbuscador" 100px
      "main contentMiembros" auto;
  }
  @media ${Device.laptop} {
    gap: 10px;
    grid-template:
      "header header" 200px
      "contentbuscador contentbuscador" 100px
      "main contentMiembros" auto;
  }

  .header {
    grid-area: header;
    /* background-color: rgba(246, 100, 37, 0.4); */
    padding: 20px;
  }
  .contentbuscador {
    padding: 20px;
    grid-area: contentbuscador;
    /* background-color: rgba(239, 18, 202, 0.4); */
  }
  .main {
    padding: 20px;
    grid-area: main;

    /* background-color: rgba(93, 246, 37, 0.4); */
  }
  .contentMiembros {
    grid-area: contentMiembros;
    /* background-color: rgba(60, 223, 248, 0.4); */
    padding: 20px;
  }
`;
const Content = styled.div`
  display: grid;

  grid-template-columns: repeat(1, 1fr);
  gap:20px;
  @media ${Device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fill, auto);
  }
`;
