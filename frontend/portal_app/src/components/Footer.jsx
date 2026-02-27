import React from 'react'

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        .footer-root {
          background: #0a0a0f;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-family: 'DM Sans', sans-serif;
          padding: 48px 40px 32px;
          position: relative;
          overflow: hidden;
        }

        .footer-root::before {
          content: '';
          position: absolute;
          bottom: -60%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-inner {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-brand-mark {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #6366f1, #06b6d4);
          border-radius: 8px;
        }

        .footer-brand-name {
          font-size: 0.95rem;
          font-weight: 500;
          color: #f9fafb;
          letter-spacing: 0.02em;
        }

        .footer-links {
          display: flex;
          gap: 32px;
          list-style: none;
          padding: 0;
          margin: 0;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-links a {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 300;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .footer-links a:hover { color: #818cf8; }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.05);
        }

        .footer-copy {
          color: #374151;
          font-size: 0.78rem;
          font-weight: 300;
          letter-spacing: 0.03em;
        }

        .footer-copy span {
          background: linear-gradient(90deg, #6366f1, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 400;
        }

        @media (max-width: 500px) {
          .footer-links { gap: 20px; }
          .footer-root { padding: 40px 24px 28px; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">

          <div className="footer-brand">
            <div className="footer-brand-mark" />
            <span className="footer-brand-name">Stock Prediction Portal</span>
          </div>

          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className="footer-divider" />

          <p className="footer-copy">
            &copy; 2024 <span>Stock Prediction Portal</span>. All rights reserved.
          </p>

        </div>
      </footer>
    </>
  )
}

export default Footer



