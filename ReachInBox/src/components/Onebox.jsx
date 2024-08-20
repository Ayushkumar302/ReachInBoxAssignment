import { useTheme } from '../context/ThemeContext';

const OneboxPage = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-2xl font-bold">Onebox Page</h1>
      <p className="text-md mt-4">Content for Onebox Page</p>
    </div>
  );
};

export default OneboxPage;
