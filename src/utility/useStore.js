import create from "zustand";

export const useStore = create((set) => ({
  position: 0,
  setPosition: (eVar) => {
    set((state) => ({
      ...state,
      position: eVar
    }));
  }
}));
