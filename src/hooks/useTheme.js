import { useCallback, useState } from "react";

const COLORS = { light: "#f2f1ed", dark: "#0d0d0c" };

// The initial theme is set by the inline script in index.html (before first paint).
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.add("theme-transition");
    root.dataset.theme = next;
    window.setTimeout(() => root.classList.remove("theme-transition"), 500);

    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", COLORS[next]);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
    setTheme(next);
  }, [theme]);

  return [theme, toggle];
}