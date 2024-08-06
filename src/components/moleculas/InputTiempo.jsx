import styled from "styled-components";
import { ContentItems, InputType } from "../../index";
export function InputTiempo({onchange,defaultvalue}) {
  return (
    <ContentItems $marginbottom="20px" >
      <InputType   onchange={onchange} defaultvalue={defaultvalue}/>
      s
    </ContentItems>
  );
}
