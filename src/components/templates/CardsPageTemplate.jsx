'use client';
import styled from "styled-components";
import { BannerSeccionRuta, useCardsVipStore } from "../../index";
import { useQuery } from "@tanstack/react-query";
import ReactHtmlParser from "react-html-parser";
import React, { useState } from "react";
import PruebaComponente from "../experimentos/Probadordecomponentes";
import {DynamicComponents} from "../../hooks/DynamicComponents"
import Test1 from "../experimentos/Test1"
export function CardsPageTemplate() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");
  const [title, setTitle] = useState("Untitled");
  const [isTitle, setIsTitle] = useState(false);
  const [alert, setAlert] = useState(false);

  const updateOutput = () => {
    // Create the combined output
    const combinedOutput = `
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
      </html>
    `;
    setOutput(combinedOutput);
  };
  const { mostrarcards } = useCardsVipStore();
  const { data } = useQuery(["mostrar cards"], mostrarcards);
  
  return (
    <Container>
      <section className="area1">
        {data?.map((item, index) => {
          return (
            <Contentproject key={index}>
              <div className="contentframe">
                {/* <iframe
                  className="frame"
                  title="Result"
                  srcDoc={item.componente}
                /> */}

                {/* <style>
                    {
                      item.css
                    }
                  </style> */}

                {/* <div dangerouslySetInnerHTML={{ __html: item.componente }} /> */}
                <DynamicComponents  item={item}/>
                {/* {
                  item.componente
                } */}
              </div>
            </Contentproject>
          );
        })}
      </section>
      <section className="area2">
        <BannerSeccionRuta />
       
      </section>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  color: #fff;
  .area1 {
    background-color: #141414;
    border-radius: 10px;
    margin: 20px;
    
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    
  }
  .area2 {
    /* background-color: rgba(11, 240, 11, 0.1); */
    margin-top: 20px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }
`;
const Contentproject = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow:hidden;
  .contentframe {
    justify-content: center;
    align-items: center;
    height: 450px;
    overflow:hidden;
    width:100%;
    border-radius: 10px;
    display: flex;
    iframe{
      height:120%;
      width:450px;
      border:none;
      scale:0.7;
      overflow:hidden;
      background-color:red;
    }
  }
`;
