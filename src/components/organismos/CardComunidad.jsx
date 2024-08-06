import { useState } from "react";
import styled from "styled-components";
import { ColorExtractor } from "react-color-extractor";
export function CardComunidad({ item }) {
  const [colors, setColors] = useState([]);
  function getColors(colorSwatch) {
    setColors(colorSwatch);
   
  }
  return (
    <Container
      color0={colors[0]}
      color1={colors[1]}
      color2={colors[2]}
      href={item?.url}
      target="_blank"
    >
      <section className="contentImg">
        <ColorExtractor getColors={getColors}>
          <img src={item.icono} />
        </ColorExtractor>
      </section>
      <section className="contentText">
        <span>{item.descripcion}</span>
      </section>
    </Container>
  );
}
const Container = styled.a`
  display: flex;
  transition: 0.3s ease-in-out;
  background-color: ${(props) => props.color1};
  border-radius: 15px;
  padding: 15px;
  align-items: center;
  gap: 15px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  .contentImg {
    width: 80px;
    img {
      width: 100%;
    }
  }
  &:hover {
    transform: scale(0.97);
  }
 
    
    
  
`;
