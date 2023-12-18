import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoggedInHome from "./components/LoggedInHome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<LoggedInHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;