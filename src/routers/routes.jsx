import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import {
  Cursos,
  Rutas,
  Apuntes,
  Comunidad,
  Preestrenos,
  Tienda,
  FondosSvg,
  CardsPage,
} from "../index";
import { NodeExpressPage } from "../pages/NodeExpressPage";
import { InstalacionesExpress } from "../components/templates/NodeExpress/InstalacionesExpress";
export function MyRoutes() {
  return (
    <Routes>
      <Route path="/comunidad" element={<Comunidad />} />
      <Route path="/animalacss" element={<Home />} />
      <Route path="/" element={<Cursos />} />
      <Route path="/rutas" element={<Rutas />} />
      <Route path="/apuntes" element={<Apuntes />} />

      <Route path="/preestrenos" element={<Preestrenos />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/fondossvg" element={<FondosSvg />} />
      <Route path="/cards" element={<CardsPage />} />
      <Route path="/node-express" element={<NodeExpressPage />}>
      <Route
          index
          element={<Navigate to="instalaciones-express" replace />}
        />
        <Route
          path="instalaciones-express"
          element={<InstalacionesExpress />}
        />
      </Route>
    </Routes>
  );
}
