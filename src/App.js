import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";  
import Login from "./components/Login";      
import Signup from "./components/Signup";   
import AccountSettings from "./components/AccountSettings";  // ✅ Naya Component Import Kiya

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account-settings" element={<AccountSettings />} />  {/* ✅ AccountSettings ka Route */}
      </Routes>
    </Router>
  );
};

export default App;
