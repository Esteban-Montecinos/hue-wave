import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create((set) => ({
bg:"bg-gradient-to-b",
from:"from-pink-300",
via:"via-purple-300",
to:"to-indigo-400",
  setBg: (bg) => set(() => ({ bg })),
  setFrom: (from) => set(() => ({ from })),
  setVia: (via) => set(() => ({ via })),
  setTo: (to) => set(() => ({ to }))
})
);