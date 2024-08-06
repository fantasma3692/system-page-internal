import styled from "styled-components";
import { TbCopy } from "react-icons/tb";
import { useCallback, useRef, useState } from "react";
import { copyToClipboard } from "../../index";
import ConfettiExplosion from "react-confetti-explosion";
export function BtnCopy({ code }) {
  const [isCopied, setIsCopied] = useState(false);
  const timer = useRef();

  const handleCopy = useCallback(() => {
    clearTimeout(timer.current);
    copyToClipboard(code).then(() => {
      setIsCopied(true);
      timer.current = setTimeout(() => setIsCopied(false), 2500);
    });
  }, [code]);

  return (
    <Container onClick={handleCopy}>
      {isCopied ? (
        "!Copiado"
      ) : (
       
         
         
          <span class="front text">
            <TbCopy /> copiar
          </span>
        
      )}

      {isCopied && <ConfettiExplosion />}
    </Container>
  );
}

const Container = styled.div`


 

  .front {
    display: flex;
    position: relative;
   cursor: pointer;
    border-radius: 12px;
    font-size: 1.1rem;
    color: #ffffff;
    
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    text-align: center;
    align-items: center;
    gap: 5px;
    font-weight: 600;
  }

  button:hover {
    filter: brightness(110%);
  }

  button:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  button:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  button:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  button:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }
`;
