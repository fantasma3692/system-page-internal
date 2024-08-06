import styled from "styled-components";
export function MaquinaEscribirEfecto() {
  return (
    <Container>
      <p>⚛️Tu camino inicia AQUÍ</p>
    </Container>
  );
}
const Container = styled.div`
  p {
    border-right: solid 3px rgba(144, 212, 144, 0.75);
    white-space: nowrap;
    overflow: hidden;
    font-size: 28px;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Source Code Pro', monospace;
    margin:0;
    padding:0;
    
  }

  p {
    animation: animated-text 2s steps(16) 1s 1 normal both,
      animated-cursor 0.5s steps(16) infinite normal;
  }

  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: 360px;
    }
  }

  @keyframes animated-cursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.7);
    }
    to {
      border-right-color: transparent;
    }
  }
`;
