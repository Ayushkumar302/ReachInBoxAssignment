import { useTheme } from '../context/ThemeContext'; // Adjust path as needed

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} flex justify-between items-center`}>
      <h1 className="text-lg font-bold">ReachInbox</h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Navbar;
