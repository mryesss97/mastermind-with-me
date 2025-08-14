import { LanguageCode } from "@/i18n/constant";
import { create } from "zustand";
import { IAppStore } from "./types";
import { PERSIST_KEYS } from "../types/persitKeys";
import { persist } from "zustand/middleware";

export const useAppStore = create<IAppStore>()(
  persist(
    (set) => ({
      lang: LanguageCode.EN,
      setLang: (lang: LanguageCode) => set({ lang }),
      isDarkMode: false,
      setDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
    }),
    { name: PERSIST_KEYS.APP_STORE }
  )
);
