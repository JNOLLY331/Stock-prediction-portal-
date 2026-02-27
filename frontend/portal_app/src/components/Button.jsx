import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        .btn-custom {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 14px 40px;
          border-radius: 12px;
          border: none;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s;
          position: relative;
          overflow: hidden;
        }

        .btn-custom::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.08);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .btn-custom:hover::after { opacity: 1; }

        .btn-custom:hover {
          transform: translateY(-2px);
          text-decoration: none;
        }

        .btn-custom:active {
          transform: translateY(0);
        }

        /* Variants */
        .btn-custom.btn-info {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #fff;
          box-shadow: 0 4px 24px rgba(99,102,241,0.35);
        }

        .btn-custom.btn-info:hover {
          box-shadow: 0 8px 32px rgba(99,102,241,0.5);
          color: #fff;
        }

        .btn-custom.btn-outline {
          background: transparent;
          color: #818cf8;
          border: 1px solid rgba(99,102,241,0.4);
          box-shadow: none;
        }

        .btn-custom.btn-outline:hover {
          border-color: #6366f1;
          box-shadow: 0 4px 20px rgba(99,102,241,0.2);
          color: #818cf8;
        }

        .btn-custom.btn-ghost {
          background: rgba(255,255,255,0.04);
          color: #9ca3af;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .btn-custom.btn-ghost:hover {
          background: rgba(255,255,255,0.07);
          color: #f9fafb;
        }
      `}</style>

      <Link
        className={`btn-custom ${props.class || 'btn-info'}`}
        to={props.url || '/'}
      >
        {props.text}
      </Link>
    </>
  );
};

export default Button;