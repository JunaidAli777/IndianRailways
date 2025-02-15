import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideLink from './SideLink';
import mkb from '/files/images/mkb.jpg';
import banner1 from '/files/images/banner1.png';
import accred from '/files/images/accred.jpg';
import pmo from '/files/images/pmo.jpg';
import min1 from '/files/images/min1.jpeg';
import min2 from '/files/images/min2.jpg';
import min3 from '/files/images/min3.jpeg';
import MinCard from './minCard';
import './styles/Home.css';



const Home = () => {

  const [isAnimating, setIsAnimating] = useState(true);

  const images = [
    mkb,
    accred,
    pmo,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((index) => (index > 0 ? index - 1 : images.length - 1));
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((index) => (index < images.length - 1 ? index + 1 : 0));
  };

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '100%', overflowX: 'hidden'}}
          className='home-screen'>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>

        <div style={{display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#DBFDD7',
          maxWidth: '1200px', 
          maxHeight: '16px',
          width: '80%',
          height: '16px',
          overflow: 'hidden',
          position: 'relative',
          whiteSpace: 'nowrap'
              }}>

          <div
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              animation: 'scrollLeft 40s linear infinite',
              position: 'absolute'
            }}
          >
          <span>&bull;</span>
          <Link onClick={() => window.open('https://innovation.indianrailways.gov.in/')}
                style={{fontSize: '14px', marginLeft: '10px'}}>
            Indian Railways Innovation Portal
          </Link>
          <span>&nbsp; •  Basic course on Kavach for private industry/ PSU personnel is scheduled from 27.01.2025 to 31.01.2025. Please contact Training section for further details.</span>
          </div>
          <style>
            {`
            @keyframes scrollLeft {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            `}
          </style>
        </div>
        <div style={{display: 'flex', 
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginTop: '5px', 
                    width: '100%', 
                    maxWidth: '1200px',
                    marginBottom: '2.5rem'
                    }}>
        

          <div style={{display: 'flex', flexDirection: 'column'}}>
            {/* Main Image Display */}

            <div style={{width: '57.1875rem', height: '19.0625rem'}}
                className='main-image'>
              {currentIndex === 0 ? (
              <Link 
                onClick={() => window.open('https://www.mygov.in/group-issue/inviting-ideas-mann-ki-baat-prime-minister-narendra-modi-23rd-february-2025/?target=inapp&type=group_issue&nid=357422')}>
                <img
                  src={images[currentIndex]}
                  alt="img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Link>
              ) : (
                <img
                  src={images[currentIndex]}
                  alt="img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>



            {/* Pagination Bar */}

            <div
              style={{
                display: 'flex',
                justifyContent: 'left',
                marginTop: '5px',
                gap: '3px',
              }}
            >
              {/* Previous Button */}
              <button 
                onClick={handlePrevious} 
                disabled={images.length <= 1}
                style={{ border: '2px solid #3D3D9E', backgroundColor: 'white', color: '#3D3D9E', cursor: 'pointer', fontSize: '12px'}}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#6FAAD6'
                  e.target.style.color = 'white'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white'
                  e.target.style.color = '#3D3D9E'
                }}
              >
                &lt;
              </button>


              {/* Numbered Pagination Buttons */}
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  style={{
                    fontSize: '12px',
                    backgroundColor: currentIndex === index ? '#6FAAD6' : 'white',
                    color: currentIndex === index ? 'white' : '#3D3D9E',
                    border: '2px solid #3D3D9E',
                    cursor: 'pointer',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#6FAAD6';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    if (currentIndex !== index) {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = '#3D3D9E';
                    }
                  }}
                >
                  {index + 1}
                </button>
              ))}

              
              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={images.length <= 1}
                style={{ border: '2px solid #3D3D9E', backgroundColor: 'white', color: '#3D3D9E', cursor: 'pointer', fontSize: '12px'}}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#6FAAD6'
                  e.target.style.color = 'white'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white'
                  e.target.style.color = '#3D3D9E'
                }}
              >
                &gt; {/* HTML entity for '>' */}
              </button>
            
            </div>
          </div>


        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '36px', gap: '2px', marginRight: '10px'}}>
              <SideLink to='https://www.iriset.in/' label='Trainee Management System(iriset.in)' />
              <SideLink to='http://iriset.railnet.gov.in/' label='Railnet Website' />
              <SideLink to='https://lms.iriset.in/' label='Learning Management System(LMS)' />
              <Link 
                style={{width: '100%' }} 
                onClick={() => window.open('http://india.gov.in/')}>
                <img style={{width: '15.5rem'}} src={banner1} alt="banner" />
              </Link>
        </div>


      </div>

      <div 
        style={{display: 'flex', justifyContent: 'left', gap: '1rem', marginTop: '-1.5rem', width: '1200px'}}
        className='min-section'>
        <div style={{ display: 'flex',
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      backgroundColor: '#FFFBDF',

                      border: '1px dotted black'}}
              className='min-section-lhs'>
            <div style={{display: 'flex', justifyContent: 'center', gap:'1rem', marginTop: '1rem'  }}
                className='min-pics'>

              <MinCard 
              to='https://indianrailways.gov.in/railwayboard/uploads/Media/BIODATA-of-Honourable-MR.pdf'
              name='Shri Ashwini Vaishnaw'
              post='Minister for Railways'
              imgScr={min1}
              />

              <MinCard 
              to='http://loksabhaph.nic.in/Members/MemberBioprofile.aspx?mpsno=316'
              name='Shri V. Somanna'
              post='Minister of State for Railways'
              imgScr={min2}
              />

              <MinCard 
              to='http://loksabhaph.nic.in/Members/MemberBioprofile.aspx?mpsno=4451&lastls=17'
              name='Shri Ravneet Singh'
              post='Minister of State for Railways'
              imgScr={min3}
              />
            
            </div>

            <div style={{padding: '1rem', fontFamily: 'arial'}}>
              <h4 style={{textDecoration: 'underline'}}>
                IRISET
              </h4>

              <p>
              Setup in 1957 by the Ministry of Railways, Government of India, to cater to 
              specialised training needs of their own staff and officers in the field of Railway 
              Signalling and Telecommunication, the Institute today caters to the needs of the 
              entire Afro-Asian region.
              </p>

              <p>
              Located in the southern part of India in Secunderabad adjoining the capital 
              city of Hyderabad in Telangana, the Institute is spread over about 28.3 hectares. 
              IRISET provides initial as well as advanced training, theory as well as hands on, 
              in Railway Signalling and Telecommunications.
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link 
                onClick={() => window.open('https://iriset.indianrailways.gov.in/view_section.jsp?lang=0&id=0,294', '_blank', 'noopener,noreferrer') }
                style={{textDecoration: 'none', color: 'red', fontFamily: 'arial', fontSize: '12px'}}
                newTab={true}>
                  .. Read more &gt;&gt;  
                </Link>
              </div>
            </div>
          </div>

          <div style={{fontSize: '1.25rem', marginTop:'2rem'}}
              className='min-section-rhs'>
            <span style={{fontWeight: 'bold'}}>Total Visitors:&nbsp;</span>
            <span>9790062</span>
          </div>

        </div>

        <div className='news-section'>
          <div style={{border: '1px solid black', marginTop: '5px'}}
                className='news-section-child'>
            <div style={{display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#013220', color: 
                        'white', fontFamily: 'sans-serif', 
                        padding: '2px'
                        }}>
              <button
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: "white",
                  width: '1rem',
                  height: '1rem',
                  border: "none",
                  cursor: "pointer",
                  color: "#808080",
                  fontSize: "0.6rem",
                  marginLeft:'0.5rem',
                  border: '2px solid #808080'
                }}
                onClick={() => setIsAnimating(true)}
                title="Play"
              >
                ▶
              </button>

              <span style={{ textAlign: "center", flex: "1" }}>News & Announcement</span>
              <button
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: "white",
                  width: '1rem',
                  height: '1rem',
                  border: "none",
                  cursor: "pointer",
                  color: "#808080",
                  fontSize: '0.6rem',
                  marginRight:'0.5rem',
                  border: '2px solid #808080'
                }}
                onClick={() => setIsAnimating(false)}
                title="Stop"
              >
                ⏹
              </button>
            </div>
            <div style={{position: 'relative', overflow: 'hidden', height: '10rem'}}>
              <span style={{padding: '10px', fontWeight: 'bolder', fontFamily: 'arial' ,fontSize: '1rem'}}
                    className={isAnimating ? "slide-up" : "paused"}>
                Currently there are no active News & Announcements.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

    
  )
}

export default Home
