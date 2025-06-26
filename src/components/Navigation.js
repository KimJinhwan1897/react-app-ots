import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{
      background: '#f0f0f0',
      padding: '10px 20px',
      margin: '0 0 20px 0'
    }}>
      <ul style={{
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0
      }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation; 