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
  DetalleApunte,
} from "../../index";
import { Device } from "../../styles/breakpoints";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BannerClonSpotify } from "../moleculas/BannerClonSpotify";
export function ApuntesTemplate() {
  const {
    dataapuntes,
    mostrarapuntes,
    etiquetas,
    selectEtiquetas,
    idstate,
    setIdstate,
  } = useApuntesStore();
  const [openDetalle,setOpendetale] = useState(false);
  const [detalle,setDetalle] = useState("");
  const {
    data: componentes,
    isLoading,
    error,
  } = useQuery(
    ["apuntes", { etiquetasapuntes: etiquetas }],
    () => mostrarapuntes({ etiquetas: etiquetas }),
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
     <DetalleApunte item={detalle} onClose={()=>setOpendetale(!openDetalle)} open={openDetalle}/>
      <ShapeSmall $right="0" $bgcolor="#202121" />
      <ShapeSBig $right="0" $bgcolor="#454545" />
      <ShapeSBig $right="0" $bgcolor="#9e9e9e" />
     
      <section className="header">
        <BannerClonSpotify/>
      </section>
      <section className="contentCategorias">
        <ContentCategorias
          setIdstate={setIdstate}
          idstate={idstate}
          setSelect={selectEtiquetas}
          data={CategoriasApuntes}
        />
      </section>

      <section className="bannerCursos">
        {/* {
          isLoading && <span>...</span>
        } */}
        {isLoading ? (
          <Spinner2 />
        ) : (
          <Content>
            {dataapuntes.map((item, index) => {
              return <CardApuntes setDetalle={()=>setDetalle(item.parrafo)} item={item} key={index} setOpendetalle={()=>setOpendetale(!openDetalle)}/>;
            })}
          </Content>
        )}

        <ShapeSBig $right="45%" $bgcolor="#39f60a45" />
        <ShapeSmall $right="56%" $bgcolor="#2eee1d7c" />
      </section>
    </Container>
  );
}
const Container = styled.div`
  padding: 20px;
  display: grid;
  gap: 60px;
  color:#fff;
  @media ${Device.tablet} {
    gap: 40px;
  }
  @media ${Device.laptop} {
    gap: 10px;
  }

  grid-template-areas:
    "header"
    "contentCategorias"
    "cursosCards";

  .header {
    grid-area: header;
  }
  .contentCategorias {
    grid-area: contentCategorias;
  }
  .bannerCursos {
    grid-area: cursosCards;

    /* background-color: rgba(93, 246, 37, 0.4); */
  }
`;
const Content = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  @media ${Device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  
  }
`;
