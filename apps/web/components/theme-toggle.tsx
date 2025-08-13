"use client";

import { useEffect, useState } from "react";
import { Button } from "@mastermind-with-me/ui";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof window !== "undefined"
      ? ((localStorage.getItem("theme") as "light" | "dark") || "light")
      : "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button variant="outline" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}
