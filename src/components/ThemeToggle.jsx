import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return <button onClick={toggleTheme}> {" "} {isDarkMode ? <Sun className="w-6 h-6 text-yellow-300" /> : <Moon className="w-6 h-6 text-blue-900" />} </button>
}
