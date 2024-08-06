import styled from "styled-components";
import ReactDOM from "react-dom/client";
import Parser from 'html-react-parser';
export function CardComponente({ item }) {
  return (
    <Container>
      <Conta $codigo={item.codigo}>
       {Parser( item.titulo)}
      </Conta>

      <div className="imgContainer"></div>
      <div className="contentDescripcion">
        <div className="imgdescripcion">
          <img src="https://i.ibb.co/Kj8RkDK/612.png" />
        </div>
        <div className="contentText">
          <span>Componente</span>
          <span>Componente</span>
        </div>
      </div>
    </Container>
  );
}
const Conta = styled.div`
  background-color: #132be3;
  padding: 12px;
  display: flex;

  ${(props) => props.$codigo};
  /* .container {
    background-color: #eb0991;
    width: 100px;
    height: 100px;
    display: flex;
    font-size: 45px;
  } */
`;
const Container = styled.div`
  background-color: #1e1f26;
  padding: 12px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;

  .imgContainer {
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    background-color: #000;
    height: 200px;
    img {
      width: 100%;

      object-fit: cover;
    }
  }
  .contentDescripcion {
    display: flex;

    .imgdescripcion {
      border-radius: 15px;
      width: 100px;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;

        object-fit: contain;
      }
    }
    .contentText {
      display: flex;
      flex-direction: column;
    }
  }
`;
