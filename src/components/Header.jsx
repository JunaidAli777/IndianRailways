import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css'
import irisetlogo from '../assets/irisetlogo.png';
import indianraillogo from '../assets/indianraillogo.png';
import NavBlock from './NavBlock';
import screenreader from'../assets/screenreader.png';


const Header = () => {
  return (
    <>
    <div 
      className='full-header'>
      <div className="greenbar">
        <Link to='https://indianrailways.gov.in/ScreenReaderInformation.html'>
          <img src={screenreader} alt="img" />
        </Link>

        <Link 
          to='https://iriset.indianrailways.gov.in/index.jsp?lang=1'
          style={{ color: 'white', fontFamily: 'arial', textDecoration: 'none', fontSize: '0.8rem'}}>
          Hindi
        </Link>
      </div>
      <div className='container'>
        <Link to="/">
          <img src={indianraillogo} alt="indianraillogo" className="indianraillogo" />
        </Link>
        <img src={irisetlogo} alt="Logo" className="irisetlogo" />
      </div>    
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2px', flexWrap: 'wrap', marginBottom: '2px' }}>
        
        <NavBlock 
          to='/aboutus'
          label='About Us' 
          subLinks={[
            { to: '/mgmtnfclty', label: 'Management & Faculty'},
            { to: '/iriset', label: 'Reaching IRISET'},
            { 
              to: '/ipr',
              label: 'Immovable Property Returns', 
              subLinks: [
                { to: 'year2023', label: 'Year 2023'},
                { to: 'year2022', label: 'Year 2022'},
                { to: 'year2021', label: 'Year 2021'},
                { to: 'year2020', label: 'Year 2020'},
                { to: 'year2019', label: 'Year 2019'},
                { to: 'year2018', label: 'Year 2018'},
                { to: 'year2017', label: 'Year 2017'},
              ]},
            { to: '/pp', label: 'Portal Policies'}
          ]}/>

        <NavBlock to='/events' label='Events' />

        <NavBlock to='/courses' label='Courses' />

        <NavBlock 
          to='/hostels'
          label='Hostels'
          subLinks={[
            { to: '/kaveri', label: 'Kaveri - Hostel 1'},
            { to: '/yamuna', label: 'Yamuna - Hostel 2'},
            { to: '/krishna', label: 'Krishna - Hostel 3'},
            { to: '/ganga', label: 'Ganga - Hostel 4'}
          ]} />

        <NavBlock to='/standardisationofsandtdrawings' label='Standardisation of S & T Drawings' />

        <NavBlock to='/notifications' label='Notifications' />

        <NavBlock 
          to='/contact' 
          label='Contact Us'
          subLinks={[
            { to: '/disclaimer', label: 'Disclaimer'},
            { to: '/righttoinfo', label: 'Right To Information'},
            { to: '/nonirpersonnel', label: 'Non-IR Personnel'},
            { to: '/privacypolicy', label: 'Privacy Policy'},
            { to: '/termsandconditions', label: 'Terms and Conditions'},
            { to: '/ors', label: 'Other Railway Sites'}
          ]}/>
      </div>
    </div>
    </>
  );
};

export default Header;