import styled from "styled-components";
import { ColorExtractor } from "react-color-extractor";
import { Newetiqueta, Device, Btnsave } from "../../index";
import { useState } from "react";
import { MdDateRange } from "react-icons/md";
export function CardCurso({ index, item }) {
  const [colors, setColors] = useState([]);
  function getColors(colorSwatch) {
    setColors(colorSwatch);
  }
  return (
    <>
      <Card
        className={item?.precio === "Gratis" ? "cardfree" : ""}
        color0={colors[0]}
        color1={colors[1]}
        color2={colors[2]}
      >
        <div className="image-over2">
          <div className="contentImg">
            <a href={item.url + item.cupon} target="_blank">
              <img className="card-img-top" src={item?.img} alt="" />
            </a>
          </div>

          {/* Seller */}
          <a className="seller">
            <div className="seller-thumb avatar-lg">
              <ColorExtractor getColors={getColors}>
                <img className="rounded-circle" src={item?.icono} alt="" />
              </ColorExtractor>
            </div>
          </a>
        </div>
        {/* Card Caption */}

        <div className="card-body">
          <a>
            <span className="title">{item?.titulo}</span>
          </a>
          {/* <span className="precio">{item?.precio}</span> */}
          {/* <span className="mb-2">
            <MdDateRange /> {item?.fechacaduca}
          </span> */}
          <span>Obtener en:</span>
        </div>
        {
          item.url!="-" &&  <Btnsave
          url={item.url + item.cupon}
          titulo={item?.precio_udemy}
          color="#171717"
          bgcolor="#A335EF"
        />
        }
       
        <br />
        {
          item.urlvip !="-"?   <Btnsave url={item.urlvip} titulo={item.precio_vip} bgcolor="#2c2b2b" color="#fff" />:""
        }
     
        {/* {item?.precio == "$ 9.99 Nuevo" ? <Newetiqueta /> : null} */}
      </Card>
    </>
  );
}

const Card = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;
  padding: 18px;
  text-align: center;
  border-radius: 20px;
  transition: 0.35s ease-in-out;
  position: relative;
  &.cardfree {
    background-color: rgba(26, 227, 127, 0.3);
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
  &:hover {
    transform: translateY(-10px);
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
      }
    }

    .seller {
      display: block;
      position: absolute;
      top: calc(100% - 2.5rem);
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      .seller-thumb {
        position: relative;
        border: 3px solid ${(props) => props.color1};

        height: 80px;
        width: 80px;
        border-radius: 50%;
        box-shadow: inset 0 0 0 2px ${(props) => props.color0};
        &:before,
        &:after {
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          border-radius: 50%;
          transition: all 0.2s ease 0s;
        }
        &:before {
          content: "";
          top: 0;
          width: calc(5rem - 6px);
          height: calc(5rem - 6px);
          opacity: 0;
          box-shadow: 0 0 0 2px rgba(9, 8, 13, 0.15);
          transform: scale(0.8);
        }
        &:after {
          content: "";
          top: 5px;
          width: calc(5rem - 16px);
          height: calc(5rem - 16px);
          background-color: rgba(9, 8, 13, 0.15);
          box-shadow: 0 0 0 0 transparent;
        }
        img {
          height: calc(5rem - 16px);
          width: calc(5rem - 16px);
          margin: 5px;
        }
      }
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    padding-top: 16%;
    @media ${Device.tablet} {
      padding-top: 28%;
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
