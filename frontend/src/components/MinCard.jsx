import React from 'react';
import { Link } from 'react-router-dom';

const MinCard = ({to, name, post, imgScr}) => {
  return (
    <div style={{display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center', 
                 justifyContent: 'center',
                 backgroundColor: '#FFFBDF',
                 fontSize: '1.2rem',
                 fontWeight: '800',
                 fontFamily: 'arial'}}>
      <Link 
        onClick={() => window.open(to)}>
        <img style={{width: '10rem', height: '12.5rem'}} src={imgScr} alt="img" />
      </Link>
      <span>{name}</span>
      <span>{post}</span>
    </div>
  )
}

export default MinCard
