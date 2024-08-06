import styled from "styled-components";
import { CardMiembros } from "./CardMiembros";
import { useQuery } from "@tanstack/react-query";
import { useMiembrosStore } from "../../store/MiembrosStore";

export function SeccionMiembros() {
  const { datamiembros, mostrarmiembros } = useMiembrosStore();
  const {} = useQuery(["miembros"], mostrarmiembros);

  return (
    <Container>
      <span>Miembros</span>

      {datamiembros.map((item, index) => (
        <CardMiembros key={index} item={item} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  padding: 10px;
  height: calc(100% - 20px);
  border-radius: 15px;
  border: solid 3px #d0d0d0;
`;
