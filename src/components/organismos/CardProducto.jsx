import styled from "styled-components";
import { Btnsave } from "../moleculas/Btnsave";
export function CardProducto({ item }) {
  return (
    <Container>
      <article className="contentImg">
        
        <ContentNumero>{item.codigo}</ContentNumero>
        <img src={item.img} />
      </article>
      <article className="contentDetalle">
        <span className="titulo">{item.titulo}</span>
        <section className="contentPrecio">
          <span>{item.precio}</span>
          <span className="promo">{item.promo}</span>
        </section>
      </article>
      <article className="contentButtons">
        {
          item.demo != "-" ? (  <Btnsave titulo="Demo"  url={item.demo} color="#fff" />):("")
        }
      
        <Btnsave titulo="Codigo fuente" url={item.urladquirir} color="#fff" />
      </article>
      {item.urlyoutube != "-" ? (
        <article className="contentButtons">
          <Btnsave titulo="Ver en Youtube" url={item.urlyoutube} color="#fb8585" />
        </article>
      ) : (
        ""
      )}
    </Container>
  );
}
const Container = styled.div`
  border-radius: 15px;
  background-color: #14161a;
  overflow: hidden;

  .contentImg {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .contentDetalle {
    gap: 10px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    .titulo {
      font-size: 18px;
      font-weight: 700;
    }
    .contentPrecio {
      display: flex;
      justify-content: space-between;
      .promo {
        color: #f76f51;
        font-weight: 700;
      }
    }
  }
  .contentButtons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-right: 10px;
  }
`;
const ContentNumero = styled.div`
  width: 45px;
  height: 45px;
  background-color: #111111;
  border: 2px solid #f96945;
  border-radius: 15px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  top: 5px;
  left: 5px;
  font-size: 25px;
`;
