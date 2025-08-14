"use server";

import { cookies } from "next/headers";
import { LanguageCode } from "./constant";

const COOKIE_NAME = "CURRENT_LOCALE";

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || LanguageCode.EN;
}

export async function setUserLocale(locale: LanguageCode) {
  (await cookies()).set(COOKIE_NAME, locale);
}
