import styled from "styled-components";
import { useFondosSvgStore } from "../../index";
export function CardFondoSvg({ item, funcion }) {
  const { setFondoitemselect } = useFondosSvgStore();
  function select(item) {
    funcion(item.imagen);
    setFondoitemselect(item);
  }
  return (
    <Container onClick={() => select(item)}>
      <section className="contentimg">
        <img src={item.imagen} />
      </section>
    </Container>
  );
}
const Container = styled.div`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  background-color: #000000;
  transition: box-shadow 0.3s ease;
  .contentimg {
    width: 100%;
    height: 100%;
  
   
    img {
       transition: transform 0.3s ease;
      width: 100%;
      height: 100%;
      object-fit:cover;
    }
  }
  &::before {
    content: "";
    box-shadow: inset 0 0 0 8px #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: box-shadow 0.3s ease;
    z-index: 2;
  }
  &::after {
    content: "VISTA PREVIA";
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-weight: 700;
    z-index: 2;
    color:#fff;
  }
  &:hover {
    cursor: pointer;
    background-color: #000;
    .contentimg {
      filter: blur(5px);
      img {
        transform: rotate3d(1, 1, 1, 45deg);
      }
    }
    &::before {
      box-shadow: inset 0 0 0 16px #fff;
      background-color: rgba(10, 10, 10, 0.5);
    }
    &::after {
      display: flex;
    }
  }
`;
