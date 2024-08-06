import { CardAnimacion } from "../moleculas/CardAnimacion";
import styled from "styled-components";
import { useAnimacionesStore } from "../../index";
import {Device} from "../../styles/breakpoints"
export function ListaAnimacionXtipo() {
  const { dataanimaciones } = useAnimacionesStore();
  return (
    <Container>
      {
        dataanimaciones?.map((item,index)=>{
          return(
         
             <CardAnimacion item={item} key={index}/>
          
          )
        })
      }
   
   
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media ${Device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${Device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${Device.desktop} {
    grid-template-columns: repeat(6, 1fr);
  }
`;
