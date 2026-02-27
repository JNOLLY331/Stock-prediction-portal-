import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors("");
    const userData = { username, password };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        userData
      );
      console.log("response.data =", response.data);
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      setSuccess(true);
      setTimeout(() => {
        setUsername("");
        setPassword("");
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Invalid credentials", error.response?.data);
      setErrors("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          min-height: 100vh;
          display: flex;
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0f;
          overflow: hidden;
          position: relative;
        }

        /* Ambient glow blobs */
        .login-root::before {
          content: '';
          position: fixed;
          top: -20%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: drift 8s ease-in-out infinite alternate;
        }
        .login-root::after {
          content: '';
          position: fixed;
          bottom: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: drift 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, 20px) scale(1.05); }
        }

        /* Left panel */
        .login-panel-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px;
          position: relative;
          z-index: 1;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 80px;
        }

        .brand-mark {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #6366f1, #06b6d4);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-mark svg {
          width: 18px;
          height: 18px;
          fill: white;
        }

        .brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          color: #fff;
          letter-spacing: 0.02em;
        }

        .hero-text h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          color: #fff;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .hero-text h1 em {
          font-style: italic;
          background: linear-gradient(90deg, #818cf8, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-text p {
          color: #6b7280;
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 380px;
          font-weight: 300;
        }

        .feature-list {
          margin-top: 56px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          list-style: none;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #9ca3af;
          font-size: 0.9rem;
          font-weight: 300;
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #06b6d4);
          flex-shrink: 0;
        }

        /* Right panel / card */
        .login-panel-right {
          width: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          position: relative;
          z-index: 1;
        }

        .login-card {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 48px 40px;
          backdrop-filter: blur(20px);
          box-shadow: 0 32px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .card-header {
          margin-bottom: 36px;
        }

        .card-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          color: #f9fafb;
          margin-bottom: 6px;
        }

        .card-header p {
          color: #6b7280;
          font-size: 0.875rem;
          font-weight: 300;
        }

        /* Form fields */
        .field {
          margin-bottom: 20px;
        }

        .field label {
          display: block;
          font-size: 0.78rem;
          font-weight: 500;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .field input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 14px 16px;
          color: #f9fafb;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }

        .field input::placeholder { color: #4b5563; }

        .field input:focus {
          border-color: rgba(99,102,241,0.6);
          background: rgba(99,102,241,0.05);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
        }

        /* Alerts */
        .alert-success {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.25);
          border-radius: 12px;
          padding: 12px 16px;
          color: #34d399;
          font-size: 0.875rem;
          margin-bottom: 20px;
          animation: fadeIn 0.3s ease;
        }

        .alert-error {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2);
          border-radius: 12px;
          padding: 12px 16px;
          color: #f87171;
          font-size: 0.875rem;
          margin-bottom: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Submit button */
        .btn-submit {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(99,102,241,0.35);
          margin-top: 8px;
          letter-spacing: 0.01em;
        }

        .btn-submit:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 32px rgba(99,102,241,0.45);
        }

        .btn-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-submit .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
          margin-right: 8px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 28px 0;
        }

        .footer-note {
          text-align: center;
          color: #4b5563;
          font-size: 0.8rem;
          font-weight: 300;
        }

        .footer-note a {
          color: #818cf8;
          text-decoration: none;
          font-weight: 400;
        }

        .footer-note a:hover { text-decoration: underline; }

        /* Responsive */
        @media (max-width: 900px) {
          .login-panel-left { display: none; }
          .login-panel-right { width: 100%; }
        }
      `}</style>

      <div className="login-root">
        {/* Left Hero Panel */}
        <div className="login-panel-left">
          <div className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <span className="brand-name">Nexus</span>
          </div>

          <div className="hero-text">
            <h1>Your workspace,<br /><em>reimagined.</em></h1>
            <p>A unified platform built for teams that move fast and think clearly. Sign in to continue where you left off.</p>
          </div>

          <ul className="feature-list">
            <li><span className="feature-dot"></span>End-to-end encrypted sessions</li>
            <li><span className="feature-dot"></span>Real-time collaboration tools</li>
            <li><span className="feature-dot"></span>Instant access across all devices</li>
          </ul>
        </div>

        {/* Right Form Panel */}
        <div className="login-panel-right">
          <div className="login-card">
            <div className="card-header">
              <h2>Sign in</h2>
              <p>Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="field">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="japheth.arnold"
                />
              </div>

              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  placeholder="••••••••"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {success && (
                <div className="alert-success">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Login successful — redirecting you now...
                </div>
              )}

              {errors && (
                <div className="alert-error">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {errors}
                </div>
              )}

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? (
                  <><span className="spinner"></span>Signing in...</>
                ) : (
                  "Sign in →"
                )}
              </button>
            </form>

            <div className="divider" />
            <p className="footer-note">
              Don't have an account? <Link to="/register">Create one free</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;