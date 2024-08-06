import styled from "styled-components";
import { CategoriasCursos } from "../../utils/dataEstatica";
import { NavLink, useNavigate } from "react-router-dom";
import { v } from "../../styles/variables";
import { useCursosStore } from "../../store/CursosStore";
import { useState } from "react";

export function ContentCategorias({ data, setSelect, idstate, setIdstate }) {
  // const { selectEtiquetas,idstate,setIdstate } = useCursosStore();
  const [bgcolorState, setBgcolorState] = useState("#2b45ae");
  const { setItemselectCategorias } = useCursosStore();
   const navegar = useNavigate();
  const seleccionar = (item) => {
    setIdstate(item.id);
    setSelect(item.etiquetas);
    setBgcolorState(item.color);
    setItemselectCategorias(item);
    if (item.etiquetas === "#node-express") {
     
      navegar("/node-express");
    }
  };
  return (
    <Container $bgcolor={bgcolorState}>
      {data.map((item, index) => {
        return (
          <div
            className="LinkContainer"
            key={index}
            onClick={() => seleccionar(item)}
          >
            <a className={idstate === item.id ? "Links active" : "Links"}>
              <div className="Linkicon">{item.icon}</div>
              <span className="label_ver">{item.label}</span>
              {/* {state && <span>{label}</span>} */}
            </a>
          </div>
        );
      })}
    </Container>
  );
}
const Container = styled.div`

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .LinkContainer {
    transition: all 0.3s ease-in-out;

    position: relative;
    cursor: pointer;
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 10px;
      color: ${(props) => props.theme.text};
      height: 50px;
      border-radius: 10px;

      &:hover {
        background: rgba(194, 194, 194, 0.4);
      }
      .Linkicon {
        padding: 10px 13px;
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      .label_ver {
        transition: 0.3s ease-in-out;
        opacity: 1;
      }
      .label_oculto {
        opacity: 0;
      }
      &.active {
        color: #fff;
        background-color: ${(props) => props.$bgcolor};
        font-weight: 700;
      }
    }
    &.active {
      padding: 12px;
    }
  }
`;
