import { create } from "zustand";
import { MostrarApuntes } from "../index";
export const useApuntesStore = create((set, get) => ({
  dataapuntes: [],
  etiquetas:"#reactnative",
  selectEtiquetas: (p) => {
    set({ etiquetas: p });
  },
  statemodal: false,
  setstatemodal: () => {
    set((state) => ({ statemodal: !state.statemodal }));
  },
  mostrarapuntes: async (p) => {
    const response = await MostrarApuntes(p);
    set({ dataapuntes: response });
    return response;
  },
  idstate:1,
  setIdstate:(p)=>{
    set({idstate:p})
  },
}));
