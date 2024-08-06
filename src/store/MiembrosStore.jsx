import { create } from "zustand";
import { MostrarMiembros } from "../index";
export const useMiembrosStore = create((set, get) => ({
  datamiembros: [],

  mostrarmiembros: async () => {
    const response = await MostrarMiembros();
    set({ datamiembros: response });
    return response;
  },
  
}));
