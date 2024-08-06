import styled from "styled-components";
import { BannerTop } from "./Banner";
import { CardSocial } from "./CardSocial";
import { Device } from "../../styles/breakpoints";
import { CardConsole } from "../moleculas/CardConsole";


export function Header() {
  return (
    <Container>
     
      {/* <BannerTop /> */}
      {/* <CardSocial /> */}
      <CardConsole/>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media ${Device.laptop} {
    flex-direction: row;
  }
  

`;
