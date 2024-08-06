import styled from "styled-components";
export function FondoSpace() {
  return (
    <Container>
      <div className="space">
        <span style={{ "--i": 31 }} className="star"></span>
        <span style={{ "--i": 12 }} className="star"></span>
        <span style={{ "--i": 57 }} className="star"></span>
        <span style={{ "--i": 93 }} className="star"></span>
        <span style={{ "--i": 23 }} className="star"></span>
        <span style={{ "--i": 70 }} className="star"></span>
        <span style={{ "--i": 6 }} className="star"></span>
      </div>
    </Container>
  );
}
const Container = styled.div`
  --clr-shadow__border: #d9a1ff;
  --clr-text: #f6f4eb;
  --clr-space: #120e1e;
  --clr-space-gr: #271950;
  --clr-star: #ff3a04;
  --size: 3rem;
  position: absolute;
  width: 100%;
  height: 100%;

  .space {
    width: 100%;
    height: 100%;
    bottom: 0%;
    gap: 1.5rem;
    transition: 0.5s ease-in-out;

    opacity: 1;
    overflow: hidden;
    position: relative;
    display: flex;

    border-radius: 20px;
  }

  .star {
    height: 4rem;
    width: 0.3rem;
    transition: 0.5s;
    border-radius: 50px;
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    position: relative;
    background-color: var(--clr-star);
    animation: space-animation calc(0.1s * var(--i)) linear infinite;
  }

  @keyframes space-animation {
    0% {
      transform: rotate(-30deg) translateY(calc(-52% * var(--i)));
    }

    100% {
      transform: rotate(-30deg) translateY(calc(52% * var(--i)));
    }
  }
`;
