import { create } from "zustand";

interface ColorModeState {
  colorMode: boolean;
  setChangeColorMode: () => void;
}

export const useColorMode = create<ColorModeState>((set) => ({
  colorMode: false,
  setChangeColorMode: () => set((state) => ({ colorMode: !state.colorMode })),
}));
