import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { BannerSeccionRuta } from "../../organismos/BannerSeccionRuta";
import { BannerTitulo } from "../ApuntesPaginas/BannerTitulo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Device } from "../../../styles/breakpoints";
export const NodeExpressTemplate = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://via.placeholder.com/300x200.png?text=Image+1",
    "https://via.placeholder.com/300x200.png?text=Image+2",
    "https://via.placeholder.com/300x200.png?text=Image+3",
  ];

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Container>
      <BannerTitulo
        rgb1="45,88,44"
        rgb2="2, 163, 58"
        rgb3="82, 207, 112"
        rgb4="84, 240, 79"
        rgb5="2, 151, 47"
        titulo="NODE Y EXPRESS"
        icono={<Icon icon="logos:nodejs-icon-alt" />}
      />
      <Main>
        
        <Content>
          <Outlet />
        </Content>

        <Sidebar>
          <SidebarSection>
            <SidebarTitle>Instalaciones</SidebarTitle>
            {/* <SidebarItem to="empresabasicos">Node</SidebarItem> */}
            <SidebarItem to="instalaciones-express">Express</SidebarItem>
          </SidebarSection>

          {/* <SidebarSection>
            <SidebarTitle>Tips</SidebarTitle>
            <SidebarItem to="macroprocesos">Proyecto básico en EXPRESS</SidebarItem>
          </SidebarSection> */}
          {/* <SidebarSection>
            <SidebarTitle to="ss">Soporte</SidebarTitle>
            <SidebarItem to="ss">Centro de ayuda</SidebarItem>
          </SidebarSection> */}
        </Sidebar>
      </Main>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: center;
  flex-direction: column;
  margin-left:10px;
  margin-right:10px;
  margin-top:10px;
  height:100%;
  @media ${Device.laptop} {
    margin: auto;
    margin-top:80px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction:column;
  @media ${Device.tablet} {
    flex-direction:row;
  }
  
`;

const Content = styled.div`
  flex: 1;
  border-radius: 8px;
  height:100vh;
  
`;

const Sidebar = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    width: 250px;
    order: 2;
  }
`;

const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  margin: 5px 0;
  transition: all 0.3s ease-in-out;
  padding: 0 5%;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  height: 60px;

  &:hover {
    color: ${(props) => props.theme.colorSubtitle};
  }
  &.active {
    background: ${(props) => props.theme.bg6};
    border: 2px solid ${(props) => props.theme.bg5};
    color: ${(props) => props.theme.color1};
    font-weight: 600;
  }
`;

const SidebarTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.2em;
  color: ${(props) => props.theme.text};
`;

const SidebarSection = styled.div`
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color2};
  padding: 12px;
`;
