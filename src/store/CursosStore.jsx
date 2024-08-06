import { create } from "zustand";
import { MostrarCursos } from "../index";
import {CategoriasCursos} from "../utils/dataEstatica"
export const useCursosStore= create((set, get) => ({
  idstate:5,
  setIdstate:(p)=>{
    set({idstate:p})
  },
  datacursos: [],
  itemselectCategorias:CategoriasCursos[4],
  setItemselectCategorias:(p)=>{
    set({itemselectCategorias:p})
  },
  datacursosPreestreno: [],
  etiquetas:"#react",
  selectEtiquetas:(p)=>{
  set({etiquetas:p})
  },
  statemodal:false,
  setstatemodal:()=>{
  
    set((state)=>({statemodal:!state.statemodal}))
  },
  mostrarcursos: async (p) => {
    const response = await MostrarCursos(p);
    set({ datacursos: response });
  
    return response;
  },
  mostrarcursosPreEstreno: async (p) => {
    const response = await MostrarCursos(p);
    set({ datacursosPreestreno: response });
  
    return response;
  },

}));
