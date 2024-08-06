import { create } from "zustand";
import { MostrarGlobales, getMiembrosBuycoffe } from "../index";
export const useGlobalesStore = create((set, get) => ({
  stateSidebar: false,
  setStateSidebar: () => {
    set((state) => ({ stateSidebar: !state.stateSidebar }));
  },
  dataglobales: [],
  etiquetas: "#todos",
  selectEtiquetas: (p) => {
    set({ etiquetas: p });
  },
  statemodal: false,
  setstatemodal: () => {
    set((state) => ({ statemodal: !state.statemodal }));
  },
  mostrarglobales: async () => {
    const response = await MostrarGlobales();
    set({ dataglobales: response });

    return response;
  },
  datamiembros: [],
  setDatamiembros: (p) => {
    set({ datamiembros: p });
  },
  datainvitaron: [],
  setDatainvitaron: (p) => {
    set({ datainvitaron: p });
  },

  // mostrarMiembrosCoffe: async () => {
  //   const result = [];
  //   await getMiembrosBuycoffe("supporters").then((data) => {
  //     set({ datamiembros: data.data });
  //     result = data.data;
  //   });
  //   return result;
  // },
  // mostrarInvitaronCoffe: async () => {
  //   const result = [];
  //   await getMiembrosBuycoffe("extras").then((data) => {
  //     set({ datamiembros: data.data });
  //     result = data.data;
  //   });
  //   return result;
  // },
}));
