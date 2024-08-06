import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TerminalComponent } from "./TerminalComponent";
export const InstalacionesExpress = () => {
  const paso1 = "npm init -y";
  const paso2 = "npm i express morgan body-parser";
  const paso3 = "npm i nodemon -D";
  return (
    <Container>
      <MainContent>
        <Section>
          <Title>
            Instalaciones básicas para crear un proyecto en EXPRESS sin Bd
          </Title>
          <Description>
            1. Inicializamos el proyecto (
            <Concepto>-y es para agregar valores por defecto </Concepto>)
          </Description>
          <TerminalComponent colortext="#7dfb61" texto={paso1} />
        </Section>
        <Section>
          <Description>
            2. Instalamos express, morgan(
            <Concepto>sirve para visualizar metodos http por consola</Concepto>) y body-parser(<Concepto>
                  sirve para analizar el cuerpo de las solicitudes HTTP entrantes
                  </Concepto>)
          </Description>
          <TerminalComponent colortext="#7dfb61" texto={paso2} />
        </Section>
        <Section>
          <Description>
            3. Instalamos nodemon(
            <Concepto>
              sirve para mantener el servidor activo -D es para que en
              package.json lo pase a una seccion nueva de devDependencis
            </Concepto>
            )
          </Description>
          <TerminalComponent texto={paso3} colortext="#7dfb61" />
        </Section>
        <Section>
          <Title>
            Instalaciones básicas para crear un proyecto en EXPRESS con Bd PostgreSQL
          </Title>
          <Description>
            1. Inicializamos el proyecto (
            <Concepto>-y es para agregar valores por defecto </Concepto>)
          </Description>
          <TerminalComponent colortext="#7dfb61" texto={paso1} />
        </Section>
        <Section>
          <Description>
            2. Instalamos express, morgan(
            <Concepto>sirve para visualizar metodos http por consola</Concepto>), pg(<Concepto>
              para conecatar a postgreSQL https://node-postgres.com/</Concepto>), dotenv(<Concepto>
                sirve para cargar variables de entorno</Concepto>) y body-parser(<Concepto>
                  sirve para analizar el cuerpo de las solicitudes HTTP entrantes
                  </Concepto>)
          </Description>
          <TerminalComponent
            colortext="#7dfb61"
            texto="npm install express pg dotenv body-parser morgan"
          />
        </Section>
        <Section>
          <Description>
            3. Instalamos nodemon(
            <Concepto>
              sirve para mantener el servidor activo -D es para que en
              package.json lo pase a una seccion nueva de devDependencis
            </Concepto>
            )
          </Description>
          <TerminalComponent texto={paso3} colortext="#7dfb61" />
        </Section>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  color: #fff;
  
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
const Concepto = styled.span`
  color: #8d8d8d;

  opacity: 0.7;
`;
const CodeBlock = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  ul {
    list-style-type: none;
    padding: 0;
    li {
      margin: 5px 0;
      code {
        background-color: #444;
        padding: 2px 5px;
        border-radius: 3px;
      }
    }
  }
`;
