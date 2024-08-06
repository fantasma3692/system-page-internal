import { create } from "zustand";
import { Mostrarcomponentes } from "../index";
export const useComponentesStore= create((set, get) => ({
  datacomponentes: [],
  dataselect: [],
  setdataselect: (p) => {
    set({ dataselect: p });
  },
  statemodal:false,
  setstatemodal:()=>{
  
    set((state)=>({statemodal:!state.statemodal}))
  },
  mostrarcomponentes: async () => {
    const response = await Mostrarcomponentes();
    set({ datacomponentes: response });
    const {datacomponentes} = get();
    set({dataselect:datacomponentes[0]})
    return response;
  },
}));
