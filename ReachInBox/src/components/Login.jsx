import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.png'; // Adjust the path to where your logo is stored

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (response) => {
    // Handle successful login and redirect to OneBox page
    navigate('/onebox');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-black">
      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="Company Logo" className="h-24 w-[400px]" /> {/* Adjust size as needed */}
      </div>

      {/* Login Form */}
      <div className="p-8 bg-white dark:bg-gray-800 rounded shadow-md">
        <h1 className="text-black text-center font-bold mb-6 dark:text-gray-100">Login</h1>
        <GoogleLogin
          onSuccess={handleLogin}
          onError={(error) => console.error('Login Failed:', error)}
        />
      </div>
    </div>
  );
};

export default Login;
