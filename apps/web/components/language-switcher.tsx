"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { locales } from "@/i18n";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      value={locale}
      onChange={(e) => router.replace(pathname, { locale: e.target.value })}
      className="rounded-md border bg-background p-2 text-sm"
    >
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
