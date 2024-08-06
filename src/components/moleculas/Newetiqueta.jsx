import styled from "styled-components";
export function Newetiqueta() {
  return (<Container>
<span>New</span>
  </Container>);
}
const Container = styled.div`
  background-color: #21e295;
  height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  color: #0b4b31;
  position: relative;
  font-weight: 700;
  font-size: 13px;
  margin-right: -20px;
  box-shadow: 3px -1px 56px 10px rgba(141, 235, 175, 0.75);
  -webkit-box-shadow: 3px -1px 56px 10px rgba(141, 235, 175, 0.75);
  -moz-box-shadow: 3px -1px 56px 10px rgba(141, 235, 175, 0.75);
  width: 40px;
  justify-content:center;
  @media (max-width: 620px) {
    transform:translateY(10px);
  }
`;