import styled from "styled-components";
import {
  Btnsave,
  SocialCard,
  useCursosStore,
  useFondosSvgStore,
  useGlobalesStore,
} from "../..";
export function ConsoleCss() {
  const { dataglobales } = useGlobalesStore();
  const { itemselectCategorias } = useCursosStore();
  const { fondoitemselect } = useFondosSvgStore();
  return (
    <Container $bgcolor1={itemselectCategorias.color}>
      <div class="card">
        <div class="card-front">
          <div class="line-numbers">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
          <code className="function">USO</code>
          <br></br>
          <code>
            <span className="property">background: </span>
            <span>{fondoitemselect.style}</span>
          </code>
        </div>
      </div>
    </Container>
  );
}
const Contentlenguaje = styled.div`
  width: 200px;
  font-size: 20rem;
  display: flex;
  position: absolute;
  right: -50px;
  bottom: -70px;
  rotate: -37deg;
  opacity: 0.5;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  justify-content: start;
  display: flex;
  border-radius: 10px;
  background-color: #14161a;
  align-items: center;
  code,
  .card .line-numbers {
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 17px;
    margin-left: 50px;
  }
  code {
    display: flex;
    justify-content: center;
  }
  .card {
    position: relative;
    width: 100%;
    height: 17.5rem;
    overflow: hidden;
  }
  .card-front {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    transition: 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
    backface-visibility: hidden;
    overflow: hidden;
    flex-direction: column;
  }
  .card-front:before,
  .card-front:after,
  .card-back:before,
  .card-back:after {
    position: absolute;
  }
  .card-front:before,
  .card-back:before {
    right: 0;
    bottom: 0;
    content: "";
    width: 80px;
    height: 80px;
    background-color: ${(props) => props.$bgcolor1};
    transform: rotate(45deg);
    z-index: 1;
    filter: blur(35px);
  }

  .card-front {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #101010, ${(props) => props.$bgcolor2});
  }
  .card-front:after {
    color: #ea0dd8;
  }

  .card .line-numbers {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 0 10px;
    background-color: rgba(255, 255, 255, 0.03);
    font-size: 13px;
  }
  .card .line-numbers > div {
    padding: 2.5px 0;
    opacity: 0.4;
  }
  .card code,
  .card .line-numbers {
    color: #fdfdfd;
  }
  .card .indent {
    padding-left: 30px;
  }
  .card .operator {
    color: #4dd0e1;
  }
  .card .string {
    color: #39ff46;
  }
  .card .variable {
    color: #ba68c8;
  }
  .card .property {
    color: #ef5350;
    font-weight: 700;
  }
  .card .method {
    color: #29b6f6;
    font-weight: 700;
  }
  .card .function {
    color: #fdd835;
    font-weight: 700;
  }
  .card .boolean {
    color: #4dd0e1;
  }
`;
const ContentOtrosmediospago = styled.section`
  background-color: rgba(55, 55, 55, 0.5);
  border-radius: 20px;
  padding: 15px;
  color: #fff;
  position: relative;
  left: 50px;
  font-family: "Lucida Console", Monaco, monospace;
  margin-top: 10px;
  .contentimg {
    align-items: center;
    display: flex;
    position: relative;

    gap: 15px;
    img {
      width: 30px;
      object-fit: contain;
    }
  }
`;
