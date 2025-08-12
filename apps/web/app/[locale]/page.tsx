"use client";

import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@mastermind-with-me/ui";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const instructions = t.raw("instructions") as string[];

  return (
    <main className="mx-auto flex h-screen w-full max-w-sm flex-col justify-center gap-6 p-4">
      <div className="flex justify-between">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
      <h1 className="text-center text-2xl font-bold">{t("title")}</h1>
      <div className="space-y-2">
        <Button className="w-full">{t("single")}</Button>
        <Button className="w-full" variant="secondary">
          {t("two")}
        </Button>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="self-center text-sm underline">{t("howToPlay")}</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("howToPlay")}</DialogTitle>
          </DialogHeader>
          <ul className="list-disc space-y-2 pl-4">
            {instructions.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </main>
  );
}
