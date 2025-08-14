import { LanguageCode } from "@/i18n/constant";

export interface IAppStore {
  isDarkMode: boolean;
  lang: LanguageCode;
  setDarkMode: (isDarkMode: boolean) => void;
  setLang: (lang: LanguageCode) => void;
}
