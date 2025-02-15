import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBlock = ({ to, label, subLinks }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isNavLinkHovered, setIsNavLinkHovered] = useState(false);
    const [isHoveredSublinkIndex, setIsHoveredSublinkIndex] = useState(null);  
    const [ishoveredSubSublinkIndex, setIsHoveredSubSublinkIndex] = useState(null);  

  return (
    <>
      <div
        style={{
          backgroundColor: isHovered ? '#0E6204' : '#073302',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '10.6rem',
          height: '2.435rem',
          marginTop: '1px',
          textAlign: 'center',
          position: 'relative'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      
      <div
      onMouseEnter={() => setIsNavLinkHovered(true)}
      onMouseLeave={() => setIsNavLinkHovered(false)}
      >
        <Link
          to={to}
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.884rem',
            fontFamily: 'sans-serif'
          }}
        >
          {label}
        </Link>

        {/*drop down */}
      {isNavLinkHovered && subLinks && (
        <div
        style={{
          position: 'absolute',
          top: '77%',
          left: 0,
          backgroundColor: '#073302',
          width: '12.8rem',
          zIndex: 1000,
        }}>
          {subLinks.map((subLink, index) => (
            <div
            key={index}
            style={{
              position: 'relative'
            }}
            onMouseEnter={() => setIsHoveredSublinkIndex(index)}
            onMouseLeave={() => setIsHoveredSublinkIndex(null)}
            >
              <Link
                to={subLink.to}
                style={{
                  backgroundColor: isHoveredSublinkIndex === index ? '#0E6204' : '#073302',
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontFamily: 'sans-serif',
                  padding: '0.5rem',
                  textAlign: 'center',
                  borderBottom: '1px solid #0E6204',
                }}
              >
                {subLink.label} &nbsp; {subLink.subLinks? '▶' : ''}
              </Link>
              {subLink.subLinks && isHoveredSublinkIndex === index && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0, // Position to the right of the sublink
                    left: '100%',
                    backgroundColor: '#073302',
                    width: '12.8rem',
                    zIndex: 1000, // Ensure it appears above other elements
                  }}
                >

                  {subLink.subLinks.map((subSublink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subSublink.to}
                      style={{
                        backgroundColor:
                          ishoveredSubSublinkIndex === subIndex ? '#0E6204' : '#073302',
                        display: 'block',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontFamily: 'sans-serif',
                        padding: '0.5rem',
                        textAlign: 'center',
                        borderBottom: '1px solid #0E6204',
                      }}
                      onMouseEnter={() => setIsHoveredSubSublinkIndex(subIndex)}
                      onMouseLeave={() => setIsHoveredSubSublinkIndex(null)}
                    >
                      {subSublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
        

      </div>

    </>
  );
}

export default NavBlock;
