// components/ThemeToggle.tsx
import { useThemeStore } from '../store/themeStore';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useThemeStore();
  
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full focus:outline-none"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
    </button>
  );
}