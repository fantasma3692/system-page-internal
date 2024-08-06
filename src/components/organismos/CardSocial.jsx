import styled from "styled-components";
import { Btnsave } from "../moleculas/Btnsave";
import { FaTelegramPlane } from "react-icons/fa";
import { useGlobalesStore } from "../../store/GlobalesStores";
import { BsCalendarCheck } from "react-icons/bs";
import { Device } from "../../styles/breakpoints";
import { Cupon, useCursosStore } from "../../index";
import { Icon } from "@iconify/react";
export function CardSocial() {
  const { dataglobales } = useGlobalesStore();
  const {itemselectCategorias}= useCursosStore()
  return (
    <Container $bgcolor1={itemselectCategorias.color} $bgcolor2={itemselectCategorias.color2}>
      <div className="content-wrapper-context">
        <span className="title">CUPON ACTIVO: {dataglobales?.cupon}</span>

        <span className="content-text">
          <BsCalendarCheck /> {dataglobales?.fechacaduca} - Acceso de por
          vida!!!
        </span>
        <ContentBtn>
          <span className="content-text">{dataglobales?.promocion}</span>
        </ContentBtn>

        <ContentOtrosmediospago>
          <span>Ahora puedes adquirir por:</span>
          <section className="contentimg">
            <img src="https://i.ibb.co/ykLX3BN/9877sd.png" />
            <img src="https://i.ibb.co/wLRY5w2/plin-logo-967-A4-AF583-seeklogo-com.png" />
            <span>+51 940308023</span>
            <Btnsave
              url="https://t.me/codigo369new"
              color="#fafafa"
              titulo="Telegram"
              bgcolor="#000"
            />
          </section>
        </ContentOtrosmediospago>
      </div>
      <Contentlenguaje>
        {
          itemselectCategorias.icon
        }
    
      </Contentlenguaje>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${(props)=>props.$bgcolor1};
  color: #fff;
  border-radius: 14px;
  padding: 15px;
  position: relative;
  overflow:hidden;
  @media ${Device.desktop} {
    width: 100%;
  }
  background: linear-gradient(to bottom right, ${(props)=>props.$bgcolor1}, ${(props)=>props.$bgcolor2});
  .title {
    font-weight: 700;
  }
  .content-wrapper-context {
    .content-text {
      font-weight: 500;
      font-size: 14px;
      margin-top: 16px;
      line-height: 1.7em;

      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
const ContentBtn = styled.div`
  display: flex;
`;
const ContentOtrosmediospago = styled.section`
  background-color: rgba(55, 55, 55, 0.2);
  border-radius: 20px;
  padding: 15px;
  color: #fff;
  .contentimg {
    align-items: center;
    display: flex;
    position: relative;

    gap: 15px;
    img {
      width: 50px;
      object-fit: contain;
    }
  }
`;
const Contentlenguaje = styled.div`
  width: 200px;
  font-size: 20rem;
  display: flex;
  position: absolute;
  right: -50px;
  bottom: -70px;
  rotate:-37deg;
  opacity:0.5;
`;
