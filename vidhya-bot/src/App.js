import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
// 👇 THIS IS THE CRITICAL LINE YOU ARE MISSING
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"; 

import Login from './components/Login';
import Signup from './components/signup'; 
import Home from "./components/Home";

const GOOGLE_CLIENT_ID = "YOUR_ID.apps.googleusercontent.com";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/signup" element={<Signup onLogin={setUser} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}