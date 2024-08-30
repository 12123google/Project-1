// ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <button style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
          Return to Home
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
