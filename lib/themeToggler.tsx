import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggler = () => {
  const [theme, setTheme] = useState<string>('light');

  // Check the user's system preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme); // Save theme in localStorage
  };

  return (
    <button
      onClick={toggleTheme}
      className="print:hidden flex items-center justify-center p-2 transition-colors duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <FontAwesomeIcon
        icon={theme === 'light' ? faMoon : faSun}
        className="w-6 h-6"
        color={theme === 'light' ? '#FACC15' : '#FDE047'} // Tailwind's yellow-400 for dark, yellow-300 for light
      />
    </button>
  );
};

export default ThemeToggler;
