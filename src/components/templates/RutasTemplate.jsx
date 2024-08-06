import styled from "styled-components";
import {
  BannerSeccionRuta,
  BtnCircularRuta,
  CoordenadasRuta,
  ToggleMensaje,
  Lottieanimacion,
  Device,
  MaquinaEscribirEfecto,
  FondoShape,
  ShapeSBig,
  ShapeSmall,
  
} from "../../index";
import { useState } from "react";
import animacion1 from "../../assets/h1.json";
import animacion2 from "../../assets/h2.json";

export function RutasTemplate() {
  const [state, setState] = useState(0);
  return (
    <Container>
      <ShapeSmall $right="80%" $bgcolor="#3D1A78" />
      <ShapeSBig $right="90%" $bgcolor="#3D1A78" />
      <ShapeSmall $right="0" $bgcolor="#176dee" />
      <ShapeSBig $right="0" $bgcolor="#17a6ee" />
      <ShapeSBig $right="0" $bgcolor="#17bcee" />
    
    
      <BannerSeccionRuta bgcolor="#168EC5" />
      <section>
        <Lottieanimacion
          animacion={animacion1}
          ancho="200"
          alto="200"
          top="20%"
          right="11%"
        />
        <Lottieanimacion
          animacion={animacion2}
          ancho="200"
          alto="200"
          top="60%"
          right="60%"
        />
        {CoordenadasRuta.map((item, index) => {
          return (
            <BtnCircularRuta
              state={state}
              key={index}
              left={item.left}
              id={item.id}
              setState={setState}
              item={item}
              bgprimary="28, 176, 246"
              bgsecundary="22, 141, 197"
            />
          );
        })}
       
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  padding: 20px;
  position: relative;

  section {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    gap: 40px;
  }
  @media ${Device.laptop} {
  }
`;
