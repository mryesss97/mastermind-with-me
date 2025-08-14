"use client";
import { LANGUAGE_SUPPORTED, LanguageCode } from "@/i18n/constant";
import { setUserLocale } from "@/i18n/services";
import { useLocale } from "next-intl";
import React, { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  console.log({ isPending });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value as LanguageCode;
    startTransition(() => {
      setUserLocale(lang);
    });
  };

  return (
    <select
      onChange={handleChange}
      value={locale}
      className="rounded-md border bg-background p-2 text-sm"
    >
      {LANGUAGE_SUPPORTED.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}
