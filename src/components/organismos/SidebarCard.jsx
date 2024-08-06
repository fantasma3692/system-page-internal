import styled from "styled-components";
import { v, Btnsave } from "../../index";
export function SidebarCard() {
  return (
    <Container>
      <span className="icon">{<v.iconoayuda />}</span>
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>Centro de ayuda</h3>
        <div className="contentBtn">
          <Btnsave titulo="Contactar" bgcolor="#f8f2fd" url="https://t.me/htmlycss369" color="#000"/>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: auto;
  text-align: center;
  position: relative;
  height:200px;
  top:2rem;
  left:0;
  bottom:0;
  margin:10px;
  width:90%;

  .icon {
    position: absolute;
    font-size: 3rem;
    border-radius: 50%;
    top: -25px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }
  .cardContent {
    position: relative;
   
    background: ${(props) => props.theme.bg5};
    border-radius: 10px;
    overflow: hidden;
padding:15px 0;
    .circle1,
    .circle2 {
      position: absolute;
      background: ${(props) => props.theme.whiteBg};
      border-radius: 50%;
      opacity: 0.7;
    }
    .circle1 {
      height: 100px;
      width: 100px;
      top: -50px;
      left: -50px;
    }
    .circle2 {
      height: 130px;
      width: 130px;
      bottom: -80px;
      right: -70px;
    }
    h3 {
      font-size: 1.1rem;
      margin-top: 1rem;
      padding: 1rem 0;
      font-weight: 800;
      color: #000;
    }
    .contentBtn {
      display:flex;
      justify-content:center;
      position:relative;
      margin-right:0.8rem;
     
    }
  }
`;
