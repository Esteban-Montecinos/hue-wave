import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      favorites: [],
      bg: { bg: "linear-gradient(to bottom,", tw: "bg-gradient-to-b" },
      fr: { hex: "#f9a8d4", tw: "from-pink-300" },
      via: { hex: "#d8b4fe", tw: "via-purple-300" },
      to: { hex: "#818cf8", tw: "to-indigo-400" },
      frPercent: { css: "0%", tw: "from-0%" },
      viaPercent: { css: "50%", tw: "via-50%" },
      toPercent: { css: "100%", tw: "to-100%" },
      addFavorite: (favorite) =>
        set((state) => ({ favorites: [favorite, ...state.favorites] })),
      removeFavorite: (encode) => 
        set((state) => ({
           favorites: state.favorites.filter((favorite) => favorite.encode !== encode)
          })),
      setBg: (bg) => set(() => ({ bg })),
      setFrom: (fr) => set(() => ({ fr })),
      setVia: (via) => set(() => ({ via })),
      setTo: (to) => set(() => ({ to })),
      setFromPercent: (frPercent) => set(() => ({ frPercent })),
      setViaPercent: (viaPercent) => set(() => ({ viaPercent })),
      setToPercent: (toPercent) => set(() => ({ toPercent })),
    }),
    {
      name: "hue-wave-storage",
    }
  )
);
