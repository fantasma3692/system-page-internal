import styled from "styled-components";
import { Device } from "../../styles/breakpoints";
export const ContentCards = styled.div`
  display: grid;

  gap: 20px;
  flex-wrap: wrap;
  padding-top: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
