import styled from "styled-components";
import { ColorExtractor } from "react-color-extractor";
import { Newetiqueta, Device, Btnsave } from "../../index";
import { useState } from "react";
import { MdDateRange } from "react-icons/md";
import { Btn2 } from "../moleculas/Btn2";
export function CardCurso2({ index, item }) {
  const [colors, setColors] = useState([]);
  function getColors(colorSwatch) {
    setColors(colorSwatch);
  }
  return (
    <Card
      className={item?.precio === "Gratis" ? "cardfree" : ""}
      color0={colors[0]}
      color1={colors[1]}
      color2={colors[2]}
    >
      <div className="image-over2">
        <div className="contentImg">
          <a href={item.url + item.cupon} target="_blank">
            <ColorExtractor getColors={getColors}>
              <img className="card-img-top" src={item?.img} alt="" />
            </ColorExtractor>
          </a>
        </div>
      </div>

      <div className="card-body">
        <a>
          <span className="title">{item?.titulo}</span>
        </a>

        <span>Obtener en:</span>
      </div>
      <ContentBtn className="contentBtn">
        {item.url != "-" && (
          <Btn2
            url={item.url + item.cupon}
            titulo={item?.precio_udemy}
            color="#171717"
            bgcolor="#fff"
          />
        )}

        {item.urlvip != "-" ? (
          <Btn2
            url={item.urlvip}
            titulo={item.precio_vip}
            bgcolor="#fff"
            color="#fff"
          />
        ) : (
          ""
        )}
      </ContentBtn>
    </Card>
  );
}
const ContentBtn = styled.section`
  display: none;
  gap: 8px;
  transition: display 0.35s ease;
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: none;
  text-align: center;
  border-radius: 20px;
  transition: transform 0.35s ease;
  transition: display 0.35s ease;
  background-color: #222222;
  position: relative;
  max-width: calc(100% - 15px);
  padding: 5px;
  gap: 10px;
  &.cardfree {
    background-color: rgba(26, 227, 127, 0.3);
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
  &:hover {
    transform: translateY(-5px);
    border: 3px solid ${(props) => props.color0};
    background-color:#000;
    .contentBtn {
      display: flex;
      flex-direction:column;
      gap: 8px;
    }
    .image-over2 {
      .contentImg {
        img {
          filter: grayscale(0%);
        }
      }
    }
  }
  .image-over2 {
    position: relative;
    overflow: visible;
    z-index: 100;
    .contentImg {
      width: 100%;
      border-top-left-radius: calc(0.25rem - 1px);
      border-top-right-radius: calc(0.25rem - 1px);
      overflow: hidden;
      border-radius: 15px;
      img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        filter: grayscale(100%);
      }
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;

    @media ${Device.tablet} {
    }
    span {
      transition: 0.3s;
      font-weight: 700;
    }
    .precio {
      color: #b8b8b8;
      font-weight: 500;
    }
  }

  &:hover {
    .image-over2 {
      .seller {
        .seller-thumb {
          &::before {
            opacity: 1;
            transform: scale(1);
          }
          &::after {
            height: calc(5rem + 10px);
            width: calc(5rem + 10px);
            top: -5px;
            left: -5px;
            background-color: transparent;
            box-shadow: 0 5px 15px ${(props) => props.color0};
          }
        }
      }
    }

    .card-body {
      a {
        span {
          color: ${(props) => props.color0};
        }
      }
    }
  }
`;
