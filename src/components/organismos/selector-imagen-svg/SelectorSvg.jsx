import styled from "styled-components";
import { Btnsave } from "../../moleculas/Btnsave";
import { useFondosSvgStore } from "../../../store/FondosSvgStore";
import { ConsoleCss, downloadSVG, extractSVGAsCSS } from "../../../index";
import { Icon } from "@iconify/react/dist/iconify.js";
import {Device} from "../../../styles/breakpoints"
export function SelectorSvg() {
  const { fondoitemselect, setFondocss } = useFondosSvgStore();
  return (
    <Container>
      <section className="contenttitle">
        <Icon icon="icon-park:mail-download" />
        <span className="title">Descargar</span>
      </section>

      <section className="contentbtn">
        {/* <Btnsave
          titulo="css"
          funcion={() => {
           
             extractSVGAsCSS(fondoitemselect.imagen).then((css)=>{
              setFondocss(css);
            });
            // setFondocss(css);
            
          }}
        /> */}
        <Btnsave
          funcion={() => downloadSVG(fondoitemselect.imagen)}
          titulo="svg"
        />
      </section>
      <ConsoleCss />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  flex-direction: column;
  gap: 10px;
  height: 250px;
  color: #000;
  width:calc(100% - 30px);
  @media ${Device.tablet} {
    width:350px;
  }
  @media ${Device.tablet} {
    min-width:350px;
  }
  .contentbtn {
    display: flex;
  }
  .contenttitle {
    display: flex;
    gap: 8px;
    align-items: center;
    .title {
      font-weight: 700;
    }
  }
`;
