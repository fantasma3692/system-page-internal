import { useState } from "react";
import styled from "styled-components";
import img1 from "../../assets/react.svg";
import img2 from "../../assets/canvas.png";
import { useCategoriasStore } from "../../store/CategoriasStore";
import { Device } from "../../styles/breakpoints";
export function Menu({ setState }) {
  const { datacategorias, setdataselect } = useCategoriasStore();
  const seleccionar = (item) => {
    setdataselect(item);
    setState();
  };
  return (
    <Container>
      <div className="navigation">
        <Toggle onClick={setState}>x</Toggle>
        <div className="navArea">
          <ul>
            {datacategorias.map((item, index) => {
              return (
                <Item
                  key={index}
                  $color={item.color}
                  onClick={() => seleccionar(item)}
                >
                  <span>{item.icono}</span>
                  <a href="#">{item.descripcion}</a>
                </Item>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
 
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background: #111;
    transition: all 0.2s;
    justify-content: center;
    z-index: 10;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fb5604;
      border-radius: 10px;
    }
  }

  .navArea {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
    }
  }

  .navArea ul li a {
    font-size: 3em;
    font-weight: 600;
    text-decoration: none;
    color: ${(props) => props.$color};
  }
  .navArea ul li:hover a {
    color: #fff;
  }

  @media (max-width: 768px) {
    .navArea {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
    }
    .navArea ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .navArea ul li:hover:before {
      opacity: 0;
    }
    .navArea ul li {
      margin: 5px 10px;
      padding: 5px 10px;
      border-radius: 8px;
    }

    .imgArea {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #000;
    }
    .imgArea img {
      opacity: 0.8;
    }
  }
`;
const Toggle = styled.span`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 50px;
  height: 50px;

  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10000;
  cursor: pointer;
  border-radius: 8px;
  font-size: 50px;
  color: #ffffff;
  &.active {
    background: #db1a1a;
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(1);
  }
`;
const Item = styled.li`
  display: flex;
  gap: 12px;
  font-size: 12px;
  align-items:center;
  span {
    font-size: 20px;
  }

  a {
    color: ${(props) => props.$color};
    font-size: 15px;
  }
  @media ${Device.tablet} {
    span {
      font-size: 40px;
    }
  }
`;
