import { create } from "zustand";
import { BuscarProductos, MostrarTienda } from "../index";
export const useTiendaStore = create((set, get) => ({
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  datatienda: [],
  buscarproductos: async (buscador) => {
    const response = await BuscarProductos(buscador);
    set({ datatienda: response });
    return response;
  },
  mostrartienda: async () => {
    const response = await MostrarTienda();
    set({ datatienda: response });

    return response;
  },
}));
