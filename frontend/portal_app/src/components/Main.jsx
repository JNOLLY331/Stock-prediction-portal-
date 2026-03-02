import React, {useContext} from "react";
import Button from "./Button";
import { AuthContext } from "./AuthProvider";

const Main = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .main-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0f;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .main-root::before {
          content: '';
          position: fixed;
          top: -15%;
          right: -10%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: drift 9s ease-in-out infinite alternate;
        }

        .main-root::after {
          content: '';
          position: fixed;
          bottom: -20%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: drift 12s ease-in-out infinite alternate-reverse;
        }

        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(40px, 25px) scale(1.06); }
        }

        .main-card {
          position: relative;
          z-index: 1;
          max-width: 780px;
          width: 90%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 72px 64px;
          backdrop-filter: blur(24px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
          text-align: center;
          animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .badge-tag {
          display: inline-block;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          color: #818cf8;
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 28px;
        }

        .main-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          color: #f9fafb;
          line-height: 1.12;
          letter-spacing: -0.025em;
          margin-bottom: 24px;
        }

        .main-title em {
          font-style: italic;
          background: linear-gradient(90deg, #818cf8, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .divider-line {
          width: 56px;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #06b6d4);
          border-radius: 2px;
          margin: 0 auto 28px;
        }

        .main-desc {
          color: #6b7280;
          font-size: 1.0rem;
          font-weight: 300;
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .stats-row {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          color: #f9fafb;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #4b5563;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 400;
        }

        .stat-sep {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.07);
          align-self: center;
        }

        .btn-primary-custom {
          display: inline-block;
          padding: 15px 48px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 24px rgba(99,102,241,0.4);
          transition: transform 0.15s, box-shadow 0.2s;
          text-decoration: none;
        }

        .btn-primary-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(99,102,241,0.5);
        }

        .card-footer-note {
          margin-top: 24px;
          color: #374151;
          font-size: 0.78rem;
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        @media (max-width: 600px) {
          .main-card { padding: 48px 28px; }
          .stat-sep { display: none; }
        }
      `}</style>

      <div className="main-root">
        <div className="main-card">
          <div className="badge-tag">
            AI-Powered · Real-Time · Institutional Grade
          </div>

          <h1 className="main-title">
            Stock Prediction
            <br />
            <em>Portal</em>
          </h1>

          <div className="divider-line" />

          <p className="main-desc">
            Harness artificial intelligence, LSTM neural networks, and advanced
            technical analysis to forecast market trends with precision. Manage
            portfolios, track sentiment, and act on real-time signals — all in
            one unified platform.
          </p>

          <div className="stats-row">
            <div className="stat">
              <div className="stat-value">94%</div>
              <div className="stat-label">Prediction Accuracy</div>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <div className="stat-value">12K+</div>
              <div className="stat-label">Stocks Tracked</div>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <div className="stat-value">Live</div>
              <div className="stat-label">Market Data</div>
            </div>
          </div>
          {loggedIn ? (
            ""
          ) : (
            <Button
              text="Get Started →"
              className="btn-primary-custom"
              url="/login"
            />
          )}

          <p className="card-footer-note">
            Designed and maintained by japheth Arnold
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
