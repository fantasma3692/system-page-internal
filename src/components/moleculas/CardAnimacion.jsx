import {
  BtnCircular,
  ContentItems,
  InputTiempo,
  useAnimacionesStore,
} from "../../index";
import styled, { keyframes } from "styled-components";

import { BiCopy } from "react-icons/bi";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

export function CardAnimacion({ item }) {
  const texto = item.keyframe;
  const animacion = "";
  const [state, setState] = useState(false);
  const [valor, setValor] = useState(0.4);
  const { setstatemodal, setdataselect } = useAnimacionesStore();

  function play() {
    setState(true);
    setTimeout(function () {
      setState(false);
    }, valor * 1000);
  }
  const obtenerValor = (e) => {
    setValor(e.target.value);
  };
  function copyCode(item) {
    setdataselect(item);
    setstatemodal();
  }
  return (

   <Container
      $state={state}
      $valor={valor}
      $keyframe={item.keyframe}
      $nombre={item.nombre}
      $bgcolor={item.categorias.color} 
    >
      <p>{item.nombre}</p>
      <InputTiempo
        id="scale-up-center-div-duration"
        onchange={obtenerValor}
        defaultvalue={valor}
      />
      {/* <input type="number" onChange={obtenerValor} defaultValue={valor}  step="0.1" min="0.1" id="namecantidad"/> */}

      <ContentItems>
        <BtnCircular icono={<BiCopy />} funcion={() => copyCode(item)} />
        <BtnCircular
          state={state}
          icono={<BsFillCollectionPlayFill />}
          funcion={() => play()}
        />
      </ContentItems>
    </Container>

   
  );
}

const Container = styled.div`
  background-color: ${(props) => props.$bgcolor};
  border-radius: 40px;
  padding: 10px;
  color: black;
  box-shadow: 0px 1px 15px -5px ${(props) => props.$bgcolor};
  animation: ${(props) => props.$state && props.$nombre}
    ${(props) => props.$valor}s;
  ${(props) => props.$keyframe};
  @keyframes ${(props) => props.$nombre} {
    ${(props) => props.$keyframe}
  }
  
`;
