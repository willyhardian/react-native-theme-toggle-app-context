import { createContext, useState } from "react";

export const ThemeContext = createContext('light');
export function ThemeProvider({ children }) {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme)
    }
    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}