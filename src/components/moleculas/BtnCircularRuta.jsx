import styled from "styled-components";
import { Icono, ToggleMensaje } from "../../index";
import { useState } from "react";
export function BtnCircularRuta({
  funcion,
  titulo,
  bgprimary,
  bgsecundary,
  icono,
  url,
  left,
  right,
  id,
  state,
  setState,
  item,
}) {
  const [stateVisible, setStateVisible] = useState(false);
  const seleccionar = (id) => {
    setStateVisible(!stateVisible);
    setState(id);
  };
  return (
    <Container
      $tipo={item.tipo}
      $left={left}
      $right={right}
      type="submit"
      $bgprimary={bgprimary}
      $bgsecundary={bgsecundary}
      onClick={() => seleccionar(id)}
    >
      <span className="back"></span>
      <span className="front">{<item.icono />}</span>
      {state === id && stateVisible && <ToggleMensaje bgprimary={bgprimary} bgsecundary={bgsecundary} item={item} state={stateVisible} left={left}
      right={right}/>}
      {state === id && stateVisible &&  <Triangulo $bgprimary={item.tipo === "normal" ? bgprimary : "255, 200, 0"} />}
     
    </Container>
  );
}
const Container = styled.button`
  left: ${(props) => props.$left};
  right: ${(props) => props.$right};
  --primary: ${(props) =>
    (props.$tipo === "normal" ? (props) => props.$bgprimary : "255, 200, 0")};

  --secondary: ${(props) =>
    (props.$tipo === "normal" ? (props) => props.$bgsecundary : "205, 121, 0")};

  width: 70px;
  height: 60px;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  outline: 10px solid rgb(var(--primary), 0.1);
  border-radius: 100%;
  position: relative;
  transition: 0.3s;
  .back {
    background: rgb(var(--secondary));
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .front {
    background: rgb(var(--primary), 1);
    box-shadow: 0 0.5em 1em -0.2em rgba(var(--secondary), 0.5);
    border-radius: 100%;
    position: absolute;
    border: 1px solid rgb(var(--secondary));
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 600;
    font-family: inherit;
    transform: translateY(-15%);
    transition: 0.15s;
    color: #fff;
  }

  &:active .front {
    transform: translateY(0%);
    box-shadow: 0 0;
  }
  /* &::before {
    content: "";
    position: absolute;
    top: 70px;
    width: 20px;
    height: 20px;
    background: rgb(${(props) => props.$bgprimary});
    border-radius: 5px;
    opacity: 1;
    transform: rotate(45deg);
    transition: 0.5s;
  } */
`;
const Triangulo = styled.div`
  
    position: absolute;
    top: 70px;
    width: 20px;
    height: 20px;
    background: rgb(${(props) => props.$bgprimary});
    border-radius: 5px;
    opacity: 1;
    transform: rotate(45deg);
    transition: 0.5s;
    left:25px;
`