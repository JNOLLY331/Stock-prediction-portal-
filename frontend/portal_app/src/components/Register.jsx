import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register",
        { username, email, password }
      );
      setSuccess(true);
      setErrors({});

      setTimeout(()=>{
        setUsername("");
        setPassword("");
        navigate("/login");
      },2000)
    } catch (error) {
      setErrors(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .reg-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0f;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 40px 20px;
        }

        .reg-root::before {
          content: '';
          position: fixed;
          top: -15%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: drift 9s ease-in-out infinite alternate;
        }

        .reg-root::after {
          content: '';
          position: fixed;
          bottom: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: drift 11s ease-in-out infinite alternate-reverse;
        }

        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, 20px) scale(1.05); }
        }

        .reg-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 460px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 52px 44px;
          backdrop-filter: blur(24px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .reg-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .reg-avatar {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #6366f1, #06b6d4);
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .reg-avatar svg {
          width: 24px;
          height: 24px;
          stroke: white;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .reg-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.9rem;
          color: #f9fafb;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .reg-subtitle {
          color: #6b7280;
          font-size: 0.875rem;
          font-weight: 300;
        }

        /* Fields */
        .reg-field {
          margin-bottom: 20px;
        }

        .reg-field label {
          display: block;
          font-size: 0.75rem;
          font-weight: 500;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .reg-field input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 13px 16px;
          color: #f9fafb;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 300;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }

        .reg-field input::placeholder { color: #4b5563; }

        .reg-field input:focus {
          border-color: rgba(99,102,241,0.6);
          background: rgba(99,102,241,0.05);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
        }

        .reg-field input.input-error {
          border-color: rgba(239,68,68,0.5);
          background: rgba(239,68,68,0.04);
        }

        .field-error {
          margin-top: 6px;
          font-size: 0.78rem;
          color: #f87171;
          display: flex;
          align-items: center;
          gap: 5px;
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

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Submit */
        .reg-btn {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(99,102,241,0.35);
          transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s;
          margin-top: 8px;
        }

        .reg-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(99,102,241,0.45);
        }

        .reg-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .reg-spinner {
          display: inline-block;
          width: 15px;
          height: 15px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
          margin-right: 8px;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .reg-footer {
          text-align: center;
          margin-top: 24px;
          color: #374151;
          font-size: 0.8rem;
          font-weight: 300;
        }

        .reg-footer a {
          color: #818cf8;
          text-decoration: none;
          font-weight: 400;
        }

        .reg-footer a:hover { text-decoration: underline; }

        .reg-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 28px 0;
        }
      `}</style>

      <div className="reg-root">
        <div className="reg-card">

          <div className="reg-header">
            <div className="reg-avatar">
              <svg viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h2 className="reg-title">Create Account</h2>
            <p className="reg-subtitle">Join the platform and start predicting</p>
          </div>

          <form onSubmit={handleRegistration}>

            <div className="reg-field">
              <label>Username</label>
              <input
                type="text"
                className={errors.username ? 'input-error' : ''}
                placeholder="jnolly"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <div className="field-error">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {errors.username}
                </div>
              )}
            </div>

            <div className="reg-field">
              <label>Email</label>
              <input
                type="email"
                className={errors.email ? 'input-error' : ''}
                placeholder="japheth@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="field-error">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {errors.email}
                </div>
              )}
            </div>

            <div className="reg-field">
              <label>Password</label>
              <input
                type="password"
                className={errors.password ? 'input-error' : ''}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className="field-error">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {errors.password}
                </div>
              )}
            </div>

            {success && (
              <div className="alert-success">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Registration successful — redirecting you now to login page...
              </div>
            )}

            <button type="submit" className="reg-btn" disabled={loading}>
              {loading ? (
                <><span className="reg-spinner" />Creating account...</>
              ) : (
                "Create Account →"
              )}
            </button>

          </form>

          <div className="reg-divider" />
          <p className="reg-footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>

        </div>
      </div>
    </>
  );
};

export default Register;