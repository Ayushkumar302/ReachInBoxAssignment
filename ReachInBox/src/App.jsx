import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider
import Login from './components/Login';
import OneboxPage from './components/Onebox';
import Navbar from './components/Navbar';

function App() {
  return (
    <GoogleOAuthProvider clientId={"586824541047-ern8cui47h1mvf8l00rrseot8unf6llt.apps.googleusercontent.com"}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/onebox" element={<><Navbar /><OneboxPage /></>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
