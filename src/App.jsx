import styled from "styled-components";
import { Sidebar } from "./components/organismos/Sidebar";
import { MyRoutes } from "./routers/routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { Dark, GlobalStyles, Light, MenuMovil, ModalCopiar, SwitchHamburguesa, useGlobalesStore, useThemeStore } from "./index";
import { Device } from "./styles/breakpoints";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
function App() {
  const [stateMenu, setStateMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { themeStyle } = useThemeStore();
  const { mostrarglobales } = useGlobalesStore();
  const {
    data: globales,
    isLoading,
    error,
  } = useQuery(["globales"], mostrarglobales, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyles/>
      <Main className={sidebarOpen ? "active" : ""}>
        <ModalCopiar />
        <section className="areaSidebar">
          <Sidebar  state={sidebarOpen}
          setState={() => setSidebarOpen(!sidebarOpen)} />
        </section>
        <section className="contentMenuhambur">
        <SwitchHamburguesa
          state={stateMenu}
          setstate={() => setStateMenu(!stateMenu)}
        />
        {stateMenu && <MenuMovil setState={() => setStateMenu(!stateMenu)} />}
      </section>
        <section className="areaRoutes">
          <MyRoutes />
        </section>

        <ReactQueryDevtools initialIsOpen={true} />
      </Main>
    </ThemeProvider>
  );
}
const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  position:relative;
   height:100%;
  @media ${Device.tablet} {
    /* grid-template-columns: 230px 1fr; */
    grid-template-columns: 88px 1fr;
    &.active {
      grid-template-columns: 260px 1fr;
    }
    .contentSidebar {
      display: initial;
    }
    .contentMenuhambur {
      display: none;
    }
  }
  .areaSidebar {
    grid-column: 1;
    width: 100%;
    display: none;
    @media ${Device.tablet} {
      display: block;
    }
  }
  .areaRoutes {
    grid-column: 1;
    
    @media ${Device.tablet} {
      grid-column: 2;

  
      height:100vh;
     
    }
  }
`;
export default App;
