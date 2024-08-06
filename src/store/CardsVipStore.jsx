import { create } from "zustand";
import { MostrarCards } from "../index";

export const useCardsVipStore= create((set, get) => ({

  mostrarcards: async () => {
    const response = await MostrarCards();
    return response;
  },
}));
