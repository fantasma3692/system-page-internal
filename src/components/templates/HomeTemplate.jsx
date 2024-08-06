import { ListaAnimacionXtipo } from "@components/organismos/ListaAnimacionXtipo";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import {
  useAnimacionesStore,
  ModalCopiar,
  Fondoanimado,
  Menu,
  useCategoriasStore,
  Selector,
  Spinner,
  Linea,
  Sidebar,
  FondoShape,
  ShapeSBig,
  ShapeSmall,
  Device,
  Spinner2,
 
} from "../../index";
import { flotar } from "../../styles/Animaciones";

import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export function HomeTemplate() {
  const [stateMenu, setStateMenu] = useState(false);
  const { dataanimaciones, mostraranimaciones, statemodal, count } =
    useAnimacionesStore();
  const { mostrarcategorias, dataselect } = useCategoriasStore();
  //usequery
  const { data: categorias } = useQuery(["categorias"], mostrarcategorias, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const {
    data: animaciones,
    isLoading,
    error,
  } = useQuery(
    ["animaciones", { idcategoria: dataselect.id }],
    () => mostraranimaciones({ idcategoria: dataselect.id }),
    { enabled: dataselect.id > 0 }
  );
  if (isLoading) {
    // return <Spinner />;
  }
  if (error) {
    return <span>error</span>;
  }
  return (
    <Container>
      <ShapeSmall $right="80%" $bgcolor={dataselect.color} />
      <ShapeSBig $right="90%" $bgcolor={dataselect.color} />
      {/* <ShapeSmall $left="90%" $bgcolor={dataselect.color} />
      <ShapeSBig $left="90%" $bgcolor={dataselect.color} />
      <ShapeSBig $left="90%" $bgcolor={dataselect.color} /> */}
      {/* <FondoShape src={fondoshape} alt="" /> */}
    
      {/* <ContentImg>
        <img src={logo} />
      </ContentImg> */}
    
     
      <span className="titulo">AnimalaCSS</span>
      <span>
        - bonita colección de animaciones CSS para tus increíbles proyectos web.
      </span>

      <Selector
        texto={dataselect.descripcion}
        funcion={() => setStateMenu(!stateMenu)}
        bgcolor={dataselect.color}
        icono={dataselect.icono}
      />
      {
        stateMenu && ( <Menu setState={() => setStateMenu(!stateMenu)}/>)
      }
     
      <Linea $bgcolor={dataselect.color} />
      {isLoading ? <Spinner2 /> : <ListaAnimacionXtipo />}

      {/* <Fondoanimado /> */}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  position: relative;
  padding: 0 20px;
  z-index: 1;

  text-align: center;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
color:#fff;
  .titulo {
    color: #ffffff;
    font-size: 3.1rem;
    font-weight: 700;
  }
`;
const ContentImg = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  @media ${Device.tablet} {
  }
  img {
    width: 100%;
    animation: ${flotar} 3s ease-in-out infinite;
  }
`;
