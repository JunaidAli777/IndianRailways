import React from 'react';
import { Link } from 'react-router-dom';


const SideLink = ({ to, label }) => {
  return (
    <div
          style={{
            backgroundColor: '#191970',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '16rem',
            height: '4.5rem',
            marginTop: '1px',
            textAlign: 'center',
          }}
        >
          <Link
            onClick={() => window.open(to)}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.884rem',
              fontFamily: 'sans-serif'
            }}
          >
            {label}
          </Link>
        </div>
  )
}

export default SideLink
