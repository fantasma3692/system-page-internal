import { create } from "zustand";
import { MostrarFondosSvg } from "../supabase/crudFondossvg";
export const useFondosSvgStore = create((set, get) => ({
  fondoitemselect: [],
  datafondossvg: [],
  mostrarfondossvg: async () => {
    const response = await MostrarFondosSvg();
    set({ datafondossvg: response });
    return response;
  },
  setFondoitemselect: (p) => {
    set({ fondoitemselect: p });
  },
  fondocss: "",
  setFondocss: (p) => {
    set({ fondocss: p });
  },
}));
