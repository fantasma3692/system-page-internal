import styled from "styled-components";
import { Icono } from "../../index";
export function Btnsave({
  funcion,
  titulo,
  bgcolor,
  icono,
  url,
  width,
  color,
  shadowcolor,border
}) {
  return (
    <Container
      $width={width}
      type="submit"
      $bgcolor={bgcolor}
      $color={color}
      $shadowcolor={shadowcolor}
      href={url}
      target="_blank"
      $border={border}
    >
      <Icono>{icono}</Icono>

      <span className="btn" onClick={funcion}>
        {titulo}
      </span>
    </Container>
  );
}
const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: ${(props) => props.$border};
  gap: 10px;
  background-color: initial;
  z-index: 2;
  width: ${(props) => props.$width};
  color: ${(props) => props.$color} !important;
  .btn {
    background: ${(props) => props.$bgcolor};
    padding: 0.6em 1.3em;
    font-weight: 700;
    font-size: 18px;
    border: 2px solid ${(props) => props.$shadowcolor};
    border-radius: 0.9em;
    box-shadow: 0.1em 0.1em ${(props) => props.$shadowcolor};
    transition: 0.2s;
    white-space: 1px;

    width: 100%;
    a {
      text-decoration: none;
    }
    cursor: pointer;
    &:hover {
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em ${(props) => props.$shadowcolor};
    }
    &:active {
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em ${(props) => props.$shadowcolor};
    }
  }
`;
