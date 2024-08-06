import styled from "styled-components";
import {
  BannerPreestreno,
  BannerTop,
  CardPreestreno,
  Device,
  FondoSpace,
  Header,
  v,
} from "../../index";
import { useState } from "react";
import { TbBrandReact } from "react-icons/tb";
import { PiShoppingCartBold } from "react-icons/pi";
import { PiCodeSimpleBold } from "react-icons/pi";
export function PreestrenosTemplate() {
  const [state, setState] = useState(false);
  return (
    <Container>
       
      <header className="header">
        <BannerPreestreno />
      </header>

      <section className="main">
        <CardPreestreno
          titulo="React Native"
          subtitulo="Crea apps moviles multiplataforma"
        
          fechapublicacion="."
          linkgrupo="https://t.me/htmlycss369"
          linkcurso="https://www.udemy.com/course/react-native-la-guia-practica-proyectos/?couponCode=ELGRINCH"
          icono={<TbBrandReact />}
          colorFondo="rgba(250, 250, 250, 0.12)"
          colorstroke="rgba(62, 127, 197, 0.2)"
          colorborde="#4298F5"
        />
         {/* <CardPreestreno
         colorborde="#FF1751"
         colorFondo="rgba(255, 23, 81,0.12)"
         colorstroke="rgba(255, 23, 81,0.2)"
          titulo="REACT Diseños Responsive"
          subtitulo=""
          fechapublicacion="Se termina de publicar el 26 de octubre 2023"
          linkgrupo=""
          linkcurso=""
          icono={<PiCodeSimpleBold />}
        /> */}
        <CardPreestreno
        colorborde="#1AE37F"
         colorFondo="rgba(201, 249, 225, 0.12)"
         colorstroke="rgba(26, 227, 127,0.2)"
          titulo="Punto de venta REACT"
          subtitulo=""
          fechapublicacion="."
          linkgrupo="https://t.me/ada369react"
          linkcurso="https://www.udemy.com/course/punto-de-venta-con-react-full-stack/?couponCode=ELGRINCH"
          icono={<PiShoppingCartBold />}
        />
       
      </section>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.text};
  display: grid;

  gap: 20px;
  grid-template:
    "header" auto
    "main" auto;

  .header {
    /* background-color: rgba(27, 246, 7, 0.4); */
    grid-area: header;

    display: flex;
    align-items: center;
  }

  .main {
    padding: 10px 50px 10px 10px;

    grid-area: main;
    /* background-color: rgba(246, 7, 167, 0.4); */
    display: flex;
    gap: 20px;
    flex-direction: column;
    @media ${Device.laptop} {
      flex-direction: row;
      padding: 10px;
    }
  }
`;
