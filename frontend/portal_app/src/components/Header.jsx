import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.jsx';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=DM+Sans:wght@300;400;500&display=swap');

        .header-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
          background: ${scrolled ? 'rgba(10,10,15,0.92)' : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(20px)' : 'none'};
          border-bottom: 1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'};
          box-shadow: ${scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : 'none'};
        }

        .header-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Brand */
        .header-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .header-brand-mark {
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, #6366f1, #06b6d4);
          border-radius: 8px;
          flex-shrink: 0;
        }

        .header-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          color: #f9fafb;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        /* Desktop buttons */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-btn-outline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 10px 24px;
          border-radius: 10px;
          background: transparent;
          color: #818cf8;
          border: 1px solid rgba(99,102,241,0.35);
          text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s, color 0.2s;
        }

        .header-btn-outline:hover {
          border-color: #6366f1;
          box-shadow: 0 4px 20px rgba(99,102,241,0.2);
          transform: translateY(-1px);
          color: #818cf8;
          text-decoration: none;
        }

        .header-btn-solid {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 10px 24px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #fff;
          border: none;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(99,102,241,0.35);
          transition: box-shadow 0.2s, transform 0.15s;
        }

        .header-btn-solid:hover {
          box-shadow: 0 8px 28px rgba(99,102,241,0.5);
          transform: translateY(-1px);
          color: #fff;
          text-decoration: none;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #9ca3af;
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.2s;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 10px;
          padding: 16px 32px 24px;
          background: rgba(10,10,15,0.97);
          border-top: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          animation: slideDown 0.22s ease;
        }

        .mobile-menu.open { display: flex; }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .header-actions { display: none; }
          .hamburger { display: flex; }
          .header-inner { padding: 0 20px; }
        }
      `}</style>

      <nav className="header-nav">
        <div className="header-inner">

          <Link to="/" className="header-brand">
            <div className="header-brand-mark" />
            <span className="header-brand-name">Stock Prediction Portal</span>
          </Link>

          <div className="header-actions">
            <Link to="/register" className="header-btn-outline">Register</Link>
            <Link to="/login" className="header-btn-solid">Login</Link>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

        </div>

        {/* Mobile dropdown */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/register" className="header-btn-outline" style={{ textAlign: 'center' }} onClick={() => setMenuOpen(false)}>Register</Link>
          <Link to="/login" className="header-btn-solid" style={{ textAlign: 'center' }} onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;