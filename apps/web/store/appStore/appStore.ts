import { create } from "zustand";
import { IAppStore } from "./types";
import { PERSIST_KEYS } from "../types/persitKeys";
import { persist } from "zustand/middleware";

export const useAppStore = create<IAppStore>()(
  persist(
    (set) => ({
      currentTheme: "light",
      setTheme: (theme: "light" | "dark") => set({ currentTheme: theme }),
    }),
    { name: PERSIST_KEYS.APP_STORE }
  )
);
