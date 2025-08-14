"use client";
import { LANGUAGE_SUPPORTED, LanguageCode } from "@/i18n/constant";
import { useAppStore } from "@/store/appStore/appStore";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const { setLang } = useAppStore((state) => ({
    setLang: state.setLang,
  }));

  const handleChange = (lang: LanguageCode) => {
    setLang(lang);
  };

  return (
    <select
      value={locale}
      className="rounded-md border bg-background p-2 text-sm"
    >
      {LANGUAGE_SUPPORTED.map((lang) => (
        <option
          onClick={() => handleChange(lang.code as LanguageCode)}
          key={lang.code}
          value={lang.code}
        >
          {lang.name}
        </option>
      ))}
    </select>
  );
}
