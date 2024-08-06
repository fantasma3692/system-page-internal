import styled from "styled-components";
import { Spinner2 } from "../moleculas/Spinner2";
import { ContentCards } from "../atomos/ContentCards";
import { CardCurso } from "./CardCurso";
import { useQuery } from "@tanstack/react-query";
import { useCursosStore } from "../../store/CursosStore";
export function SeccionNuevosCursos() {
  const { datacursosPreestreno, mostrarcursosPreEstreno } = useCursosStore();
  const {
    data: componentes,
    isLoading,
    error,
  } = useQuery(
    ["cursos  preestreno", { etiquetas: "#preestreno" }],
    () => mostrarcursosPreEstreno({ etiquetas: "#preestreno" }),
    { refetchOnWindowFocus: false }
  );
  return (
    <Container>
       
      {isLoading ? (
        <Spinner2 />
      ) : (
        <ContentCards>
          {datacursosPreestreno?.map((item, index) => {
            return <CardCurso key={index} item={item} />;
          })}
        </ContentCards>
      )}
    </Container>
  );
}
const Container = styled.div``;
