import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            return document.documentElement.classList.contains("dark")
                ? "dark"
                : "light";
        }
        return "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);


    useEffect(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored) setTheme(stored);
    }, []);

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return { theme, toggleTheme };
}
