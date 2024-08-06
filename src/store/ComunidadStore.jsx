import { create } from "zustand";
import { MostrarComunidad } from "../index";
export const useComunidadStore = create((set, get) => ({
  datacomunidad: [],
  selectEtiquetas: (p) => {
    set({ etiquetas: p });
  },
  statemodal: false,
  setstatemodal: () => {
    set((state) => ({ statemodal: !state.statemodal }));
  },
  mostrarcomunidad: async () => {
    const response = await MostrarComunidad();
    set({ datacomunidad: response });

    return response;
  },
}));
