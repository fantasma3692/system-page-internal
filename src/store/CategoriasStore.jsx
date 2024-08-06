import { create } from "zustand";
import { MostrarCategorias } from "../index";
import {CategoriasCursos} from "../utils/dataEstatica"
export const useCategoriasStore= create((set, get) => ({
  datacategorias: [],
  dataselect: CategoriasCursos[4],
  setdataselect: (p) => {
    set({ dataselect: p });
  },
  statemodal:false,
  setstatemodal:()=>{
  
    set((state)=>({statemodal:!state.statemodal}))
  },
  mostrarcategorias: async () => {
    const response = await MostrarCategorias();
    set({ datacategorias: response });
    const {datacategorias} = get();
    set({dataselect:datacategorias[0]})
    return response;
  },
}));
