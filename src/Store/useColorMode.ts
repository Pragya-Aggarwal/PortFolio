import { create } from "zustand";

export const useColorMode = create<any>((set: any) => ({
  colorMode: false,
  setChangeColorMode: () =>
    set((state: boolean) => ({ colorMode: !state.colorMode })),
}));
