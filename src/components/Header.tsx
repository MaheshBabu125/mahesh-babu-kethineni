import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800 z-50">
      <h1 className="text-lg font-bold">Theme Switcher App</h1>
      <select value={theme} onChange={(e) => setTheme(e.target.value as any)} className="p-2 rounded">
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
      <nav className="space-x-4 ml-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
