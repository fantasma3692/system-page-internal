import { create } from "zustand";
import { MostrarAnimaciones } from "../index";
export const useAnimacionesStore = create((set, get) => ({
  count: 0,
  dataanimaciones: [],
  dataselect: [],
  setdataselect: (p) => {
    set({ dataselect: p });
  },
  statemodal: false,
  setstatemodal: () => {
    set((state) => ({ statemodal: !state.statemodal }));
  },
  mostraranimaciones: async (p) => {
    const response = await MostrarAnimaciones(p);
    set({ dataanimaciones: response });
    // set({ count: response.length });
    return response;
  },
}));
