import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import AppleSignin from "react-apple-signin-auth";
// 👇 Import useNavigate
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import "./index.css"; 

export default function Login({ onLogin }) { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  
  // 👇 Initialize the navigation hook
  const navigate = useNavigate(); 

  // --- STANDARD LOGIN ---
  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !password) { 
      setError("Please enter your credentials."); 
      return; 
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email format.");
      return;
    }

    if (password.length < 4) { 
      setError("Password too short."); 
      return; 
    }

    setError("");
    // This calls setUser in App.js and redirects to Home
    onLogin(email.split("@")[0] || "Student"); 
    return redirect("/");
  };

  // --- GOOGLE LOGIN HANDLER ---
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      onLogin("Google User");
    },
    onError: () => {
      setError("Google Login failed. Please try again.");
    },
  });

  const handleAppleSuccess = (response) => {
    onLogin("Apple User");
  };

  return (
    <div className="login-wrap">
      <div className="login-left">
        <div className="brand-badge">
          <div className="brand-badge-dot" />
          <span>Vidhya</span>
        </div>
        <h1 className="login-headline">
          Master Every<br /><em>Exam</em> with<br />Confidence.
        </h1>
        <p className="login-sub">
          Your complete study companion for NEET, JEE, and CBSE.
        </p>
      </div>

      <div className="login-right">
        <div className="login-card fade-up">
          <h2>Welcome back 👋</h2>
          <p>Sign in to continue your study journey.</p>

          {error && (
            <div className="error-banner" style={{ background: "#fadbd8", border: "1px solid #f1948a", borderRadius: 8, padding: "10px 14px", marginBottom: 16, color: "#c0392b", fontSize: 13, fontWeight: 500 }}>
              {error}
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                // RESTRICT CHARACTERS: No spaces or special symbols allowed
                const val = e.target.value;
                const cleanedVal = val.replace(/[^a-zA-Z0-9@._-]/g, "");
                setEmail(cleanedVal);
              }}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
            />
          </div>

          <div className="form-row">
            <label className="checkbox-row">
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
              Remember me
            </label>
            <button className="forgot-link">Forgot password?</button>
          </div>

          <button className="btn-primary" onClick={handleSubmit}>Sign In →</button>

          <div className="divider">or continue with</div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-secondary" style={{ flex: 1 }} onClick={() => googleLogin()}>
              Google
            </button>

            <AppleSignin
              authOptions={{
                clientId: 'com.yourdomain.vidhya',
                scope: 'email name',
                redirectURI: 'https://yourdomain.com/login',
                usePopup: true
              }}
              uiType="dark"
              onSuccess={handleAppleSuccess}
              render={(props) => (
                <button className="btn-secondary" style={{ flex: 1 }} {...props}>
                  Apple
                </button>
              )}
            />
          </div>

          <div className="signup-row">
            New to Vidhya? 
            {/* 👇 Use navigate to go to the signup page */}
            <button onClick={() => navigate("/signup")}>Create free account</button>
          </div>
        </div>
      </div>
    </div>
  );
}