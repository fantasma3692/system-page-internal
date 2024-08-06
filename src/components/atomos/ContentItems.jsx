import styled from "styled-components";

export const ContentItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom:${(props)=>props.$marginbottom};
  gap:${(props)=>props.$gap};
`;
