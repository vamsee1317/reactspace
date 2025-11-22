import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition"
    >
      {theme === "light" ? <Moon size={20}/> : <Sun size={20}/>}
    </button>
  );
}
