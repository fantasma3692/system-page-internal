import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useTiendaStore } from "../../store/TiendaStore";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../moleculas/Spinner";
export function Buscador() {
  const { buscador, setBuscador } = useTiendaStore();
  function buscar(e) {
    setBuscador(e.target.value);
  }

  return (
    <Container>
      <article className="content">
        <FaSearch className="icono" />
        <input onChange={buscar} placeholder="...buscar" />
      </article>
    </Container>
  );
}
const Container = styled.div`
  background-color: #252830;
  border-radius: 10px;
  height: 60px;
  align-items: center;
  display: flex;
  color: #fff;
  .content {
    padding: 15px;
    gap: 10px;
    display: flex;
    align-items: center;
    position:relative;
    width: 100%;
    .icono {
      font-size: 25px;
    }
    input {

      font-size: 22px;
      width: 100%;
      outline: none;
      background: none;
      border: 0;
      color: #fff;
    }
  }
`;
