// components/Navbar.tsx
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          JobBoard
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            Company Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}