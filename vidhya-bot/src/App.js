import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"; 

import Login from './components/Login';
import Signup from './components/signup'; 
import Home from "./components/Home"; // Added .js just to be safe

const GOOGLE_CLIENT_ID = "YOUR_ID.apps.googleusercontent.com";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          {/* 1. Root Path: Changed "/Home" to "/" so this is the main page */}
          <Route 
            path="/" 
            element={user ? <Home user={user} /> : <Navigate to="/login" />} 
          />
          
          {/* 2. Login Page */}
          <Route path="/login" element={<Login onLogin={setUser} />} />
          
          {/* 3. Signup Page */}
          <Route path="/signup" element={<Signup onLogin={setUser} />} />
          
          {/* 4. Redirect anything else to Login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}