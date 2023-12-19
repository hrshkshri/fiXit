import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const credentialResponse = JSON.parse(localStorage.getItem('credentialResponse'));
    setIsLoggedIn(!!credentialResponse);
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    localStorage.setItem('credentialResponse', JSON.stringify(credentialResponse));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('credentialResponse');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} handleLoginSuccess={handleLoginSuccess} />
      <Routes>
        <Route path="/" exact element={<Home isLoggedIn={isLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;