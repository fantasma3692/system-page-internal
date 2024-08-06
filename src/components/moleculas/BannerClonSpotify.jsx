import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Device, useCursosStore, useGlobalesStore } from "../..";

export const BannerClonSpotify = () => {
  const { itemselectCategorias, etiquetas } = useCursosStore();
  const { dataglobales } = useGlobalesStore();
  return (
    <Container
      $bgcolor={
        itemselectCategorias.color2 ? itemselectCategorias.color2 : "#503A9D"
      }
    >
      <Header>
        <Title>{etiquetas}</Title>
        <Subtitle>Cualquiera puede • PROGRAMAR</Subtitle>
      </Header>
      <PlaylistContainer>
        <PlaylistHeader>
          <PlayButton>{itemselectCategorias.icon}</PlayButton>
        </PlaylistHeader>
        <PlaylistDetails>
          <TrackList>
            <TrackItem className="select" $bgcolor={
        itemselectCategorias.color2 ? itemselectCategorias.color2 : "#503A9D"
      }>
              <TrackInfo>
                <Icon icon="fluent-emoji:pig-face" />
                <TrackText>
                  <TrackTitle>Cupón activo</TrackTitle>
                  <AlbumName>{dataglobales?.cupon}</AlbumName>
                </TrackText>
              </TrackInfo>
              <TrackMeta>
                <DateAdded>fecha que caduca</DateAdded>
                <TrackDuration>{dataglobales?.fechacaduca}</TrackDuration>
              </TrackMeta>
            </TrackItem>
            <TrackItem>
              <TrackInfo>
                <Icon icon="fluent-emoji:green-circle" />
                <TrackText>
                  <TrackTitle>Otros medios de pago</TrackTitle>
                  <AlbumName>Plin y Yape</AlbumName>
                </TrackText>
              </TrackInfo>
              <TrackMeta>
                <DateAdded>válido para Perú</DateAdded>
                <TrackDuration>{dataglobales?.numeros}</TrackDuration>
              </TrackMeta>
            </TrackItem>
            <TrackItem>
              <TrackInfo>
                <Icon icon="fluent-emoji:frog" />
                <TrackText>
                  <TrackTitle>Redes sociales</TrackTitle>
                  <ContentRedes>
                    <a
                      href="https://www.youtube.com/@Codigo369"
                      target="_blank"
                    >
                      <Icon icon="ant-design:youtube-filled" />
                    </a>
                    <a
                      href="https://www.facebook.com/codigo369oficial/"
                      target="_blank"
                    >
                      <Icon icon="fa:facebook-official" />
                    </a>
                    <a
                      href="https://www.instagram.com/codigo369/"
                      target="_blank"
                    >
                      <Icon icon="gg:instagram" />
                    </a>
                    <a href="https://discord.gg/Tk5EJudmKU" target="_blank">
                      <Icon icon="bi:discord" />
                    </a>
                  </ContentRedes>
                </TrackText>
              </TrackInfo>
              <TrackMeta>
                <DateAdded>en vivos</DateAdded>
                <TrackDuration>solo por youtube</TrackDuration>
              </TrackMeta>
            </TrackItem>
          </TrackList>
        </PlaylistDetails>
      </PlaylistContainer>
    </Container>
  );
};
const ContentRedes = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  a:link,
    a:visited,
    a:active {
      text-decoration: none;
      color: #fff;
    }

`;
// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${(props) => props.$bgcolor},
    transparent
  );
  color: #fff;

  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 4em;
  margin: 0.2em 0;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #b3b3b3;
`;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const PlaylistHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 10px;
`;

const PlayButton = styled.div`
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #c5c5c5;
  }
`;

const PlaylistDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TrackList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px 10px;
  @media ${Device.mobile} {
    margin: 0;
  }
`;

const TrackItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
&.select{
  border:2px dashed ${(props)=>props.$bgcolor};
  
}
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TrackText = styled.div`
  margin-left: 10px;
`;

const AlbumCover = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

const TrackTitle = styled.div`
  font-size: 1em;
  color: #fff;
`;

const AlbumName = styled.div`
  font-size: 0.9em;
  color: #b3b3b3;
`;

const TrackMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const DateAdded = styled.div`
  font-size: 0.8em;
  color: #b3b3b3;
`;

const TrackDuration = styled.div`
  font-size: 0.9em;
  color: #b3b3b3;
`;
