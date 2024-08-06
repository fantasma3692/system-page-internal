import styled from "styled-components";
import { useAnimacionesStore } from "../../store/AnimacionesStore";
import { Btnacciones, FondoSpace } from "../../index";

export function ModalCopiar() {
  const { dataselect, setstatemodal, statemodal } = useAnimacionesStore();
  if (!statemodal) return;
  const llaveApertura = "{";
  const llavecierre = "}";

  return (
    <Container>
      <ContentOpacity />

      {/* <FondoSpace/> */}
      <ContentCopiar>
        <FondoSpace />
        <div class="header">
          <span class="title">CSS</span>
          <Btncerrar onClick={() => setstatemodal()} />
        </div>

        <div class="editor-content">
          <code class="code">
            <p>
              <span class="color-0">.elemento </span>{" "}
              <span>{llaveApertura}</span>
            </p>
            <div className="areacopiar1">
              <p class="property">
                <span class="color-2">animation</span>
                <span>: </span>
                <span class="color-1">
                  {dataselect.nombre} {}
                </span>
                <span class="color-3">{dataselect.valores}</span>;
              </p>
              <Btnacciones
                code={
                  "animation:" +
                  " " +
                  dataselect.nombre +
                  " " +
                  dataselect.valores +
                  ";"
                }
              />
            </div>

            <span>{llavecierre}</span>
          </code>
          <code class="code areacopiar2">
            <p>
              <span class="color-0">@keyframe {dataselect.nombre} </span>{" "}
              <span>{llaveApertura}</span>
            </p>

            <p class="property">
              <span class="color-2">{dataselect.keyframe}</span>;
            </p>
            <span>
              {llavecierre}
              <br />
              <br />
            </span>
            <Btnacciones
              code={
                "@keyframes " +
                dataselect.nombre +
                "{" +
                dataselect.keyframe +
                "}"
              }
            />
          </code>
        </div>
      </ContentCopiar>
    </Container>
  );
}
const Btncerrar = styled.span`
  width: 20px;
  height: 20px;
  background: rgb(246, 53, 19);
  background: linear-gradient(
    15deg,
    rgba(246, 53, 19, 0.8603816526610644) 9%,
    rgba(238, 87, 29, 1) 100%
  );
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;
const ContentOpacity = styled.div`
  background-color: rgba(9, 9, 9, 0.98);
  height: 100%;
  width: 100%;
`;
const ContentCopiar = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  box-shadow: 0px 4px 30px rgba(242, 104, 54, 0.3);
  border-radius: 20px;
  width: 80%;
  font-size: 18px;
  padding: 20px;
  position: absolute;
  overflow: hidden;
  transition: all 0.3s;
  border-color: #f26836;
  border-width: 5.5px;
  border-style: solid;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    position: relative;
    .cerrar {
      cursor: pointer;
    }
  }
  .title {
    font-family: Lato, sans-serif;
    font-weight: 900;

    letter-spacing: 1.57px;
    color: rgb(212 212 212);
  }

  .icon {
    width: 20px;
    transition: 0.2s ease;
  }

  .icon:hover {
    cursor: pointer;
    border-radius: 50px;
    background-color: #6e7281;
  }

  .editor-content {
    color: white;
    .areacopiar1 {
      padding: 10px;
      width: 95%;
      height: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      border-width: 2px;
      border-style: dashed;
      transition: 0.3s;
      border-color: inherit;
      border-color: transparent;
      position: relative;
      &:hover {
        border-color: #616161;
      }
    }
    .areacopiar2 {
      padding: 10px;
      width: 95%;
      height: 100%;
      display: flex;
      flex-direction: column;

      border-radius: 20px;
      border-width: 2px;
      border-style: dashed;
      transition: 0.3s;
      border-color: inherit;
      border-color: transparent;
      position: relative;
      &:hover {
        border-color: #616161;
      }
    }
  }

  .property {
  }

  .property:hover {
    cursor: text;
  }

  .editor-content .color-0 {
    color: #f0642d;
    font-weight: 700;
  }

  .editor-content .color-1 {
    color: #fff;
  }

  .editor-content .color-2 {
    color: #ecbf38;
  }

  .editor-content .color-3 {
    color: #f841e3;
  }

  .color-preview-1,
  .color-preview-2 {
    height: 8px;
    width: 8px;
    border: 1px solid #fff;
    display: inline-block;
  }

  .color-preview-1 {
    background-color: #1d1e22;
  }

  .color-preview-1 {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
