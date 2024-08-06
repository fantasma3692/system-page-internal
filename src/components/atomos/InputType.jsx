import styled from "styled-components";
export function InputType({defaultvalue,onchange}) {
  return <Container type="number"  step="0.1"
  min="0.1" defaultValue={defaultvalue} onChange={onchange}></Container>;
}
const Container = styled.input`
  border: none;
  padding: 1rem;
  border-radius: 2rem;
  background: initial;
  transition: 0.3s;
  outline: none;
  border-color: #121212;
  border-width: 2px;
  border-style: dashed;
  text-align: center;
  font-size: 18px;
  width: 60%;

  &:hover {
    background: #121212;
    color: #fff;
  }
`;
