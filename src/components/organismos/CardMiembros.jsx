import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";
import { Device } from "../../styles/breakpoints";
export function CardMiembros({ item }) {
  return (
    <Container>
      <div className="contentImg">
        <span>{item.icono}</span>
      </div>
      <article className="contentUser">
        <span>{item.nombre}</span>
        <span className="status">{item.status}</span>
      </article>
    </Container>
  );
}
const Container = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
 
  @media ${Device.tablet} {
   
  }
  .contentImg {
    
    min-width: 50px;
    height: 50px;
    background-color: rgba(87, 61, 48, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contentUser {
    display: flex;
    flex-direction: column;
    .status{
      color:#f98e4b;
      font-size:13px;
      font-weight:600;
    }
  }

`;
