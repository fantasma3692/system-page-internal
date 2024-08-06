import React from "react";
import styled from "styled-components";
import { Btnacciones } from "../../..";
import { BtnCopy } from "../../atomos/BtnCopy";
export const TerminalComponent = ({texto,colortext}) => {
  return (
    <Container >
      <Terminal>
        <Header>
          <span>Terminal</span>
          <BtnCopy code={texto}/>
        </Header>
        <Code $colortext ={colortext}>{texto}</Code>
      </Terminal>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  border-radius: 8px;
  font-family: "Courier New", Courier, monospace;
`;

const Terminal = styled.div`
  background-color: #1e1e1e;

  border-radius: 8px;
  font-family: "Courier New", Courier, monospace;
  position: relative;
  align-items: center;
`;

const Code = styled.code`
  display: block;
  font-size: 16px;
  background-color: #333;
  color: ${(props)=>props.$colortext};
  padding: 10px;
  border-radius: 4px;
`;
const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;
