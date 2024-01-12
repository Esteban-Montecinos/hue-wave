import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTheme = create(persist(
  (set) => ({
    theme: "dark",
    setTheme: (theme) => set(() => ({ theme })),
  }),{
    name: "hue-wave-theme-storage",
  }
));