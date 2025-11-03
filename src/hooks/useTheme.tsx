import { useEffect, useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("theme") as Theme | null;
            return stored ?? "light";
        }
        return "light";
    });

    useLayoutEffect(() => {
        const b = document.body;
        if (theme === "dark") b.classList.add("dark");
        else b.classList.remove("dark");
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    return { theme, toggleTheme };
}
