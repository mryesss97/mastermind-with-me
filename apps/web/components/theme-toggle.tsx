"use client";

import { useEffect } from "react";
import { Button } from "@mastermind-with-me/ui";
import { useAppStore } from "@/store/appStore";

export function ThemeToggle() {
  const currentTheme = useAppStore((state) => state.currentTheme);
  const setTheme = useAppStore((state) => state.setTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", currentTheme === "dark");
  }, [currentTheme]);

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
    >
      {currentTheme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}
