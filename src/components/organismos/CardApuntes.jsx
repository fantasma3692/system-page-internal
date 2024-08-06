import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
import ReactHtmlParser from "react-html-parser";
import { AiFillEye } from "react-icons/ai";
import { Btnacciones } from "../atomos/Btnacciones";
export function CardApuntes({ setDetalle,item,setOpendetalle }) {
  const seleccionar= ()=>{
    setDetalle();
    setOpendetalle();
  }
  return (
    <Card className="card">
      <div className="image-over2">
        {item.tipo === "imagen" ? (
          <div className="contentImg">
            <img src={item.imagen} />
          </div>
        ) : (
          <CardText>
            <span className="titulo">{item.titulo}</span>
            {item?.html === "s" ? (
              <p className="parrafo">{ReactHtmlParser(item.parrafo)}</p>
            ) : (
              <p className="parrafo">{item.parrafo}</p>
            )}
          </CardText>
        )}
      </div>
      <div className="vermas" >
        <div className="vermas" onClick={seleccionar}>
          <AiFillEye /> ver
        </div>
        
        <Btnacciones
              code={item.parrafo
              }
            />
      </div>
    </Card>
  );
}
const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  border: 1px solid #353535;
  border-radius: 10px;
  margin: 5px;

  transition: 0.35s ease-in-out;
  position: relative;
  .vermas {
    cursor: pointer;
    transition: 0.3s;
    display:flex;
    align-items:center;
    gap:10px;

    &:hover {
      color: #888888;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

  .image-over2 {
    position: relative;
    width: 100%;
    .contentImg {
      overflow: hidden;
      img {
        max-width: 100%;
      }
    }
  }
`;
const CardText = styled.div`
  display: flex;
  flex-direction: column;
  isolation: isolate;
  position: relative;
  height: 150px;

  border-radius: 1rem;

  font-size: 16px;
  padding: 20px;
  text-align: start;

  .titulo {
    color: #7db3fd;
    font-weight: 700;
  }
  .parrafo {
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
    transform: translateY(9px);
  }
`;
