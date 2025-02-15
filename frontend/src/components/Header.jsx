import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css'
import irisetlogo from '/files/images/irisetlogo.png';
import indianraillogo from '/files/images/indianraillogo.png';
import screenreader from'/files/images/screenreader.png';
import NavBlock from './NavBlock';


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
            { to: '/aboutus/managementandfaculty', label: 'Management & Faculty'},
            { to: '/aboutus/reachingiriset', label: 'Reaching IRISET'},
            { 
              to: '/aboutus/immovablepropertyreturns',
              label: 'Immovable Property Returns', 
              subLinks: [
                { to: '/aboutus/immovablepropertyreturns/year2023', label: 'Year 2023'},
                { to: '/aboutus/immovablepropertyreturns/year2022', label: 'Year 2022'},
                { to: '/aboutus/immovablepropertyreturns/year2021', label: 'Year 2021'},
                { to: '/aboutus/immovablepropertyreturns/year2020', label: 'Year 2020'},
                { to: '/aboutus/immovablepropertyreturns/year2019', label: 'Year 2019'},
                { to: '/aboutus/immovablepropertyreturns/year2018', label: 'Year 2018'},
                { to: '/aboutus/immovablepropertyreturns/year2017', label: 'Year 2017'},
              ]},
            { to: '/aboutus/portalpolicies', label: 'Portal Policies'}
          ]}/>

        <NavBlock to='/events' label='Events' />

        <NavBlock to='/courses' label='Courses' />

        <NavBlock 
          to='/hostels'
          label='Hostels'
          subLinks={[
            { to: '/hostels/kaveri', label: 'Kaveri - Hostel 1'},
            { to: '/hostels/yamuna', label: 'Yamuna - Hostel 2'},
            { to: '/hostels/krishna', label: 'Krishna - Hostel 3'},
            { to: '/hostels/ganga', label: 'Ganga - Hostel 4'}
          ]} />

        <NavBlock to='/standardisation' label='Standardisation of S & T Drawings' />

        <NavBlock to='/notifications' label='Notifications' />

        <NavBlock 
          to='/contactus' 
          label='Contact Us'
          subLinks={[
            { to: '/contactus/disclaimer', label: 'Disclaimer'},
            { to: '/contactus/righttoinformation', label: 'Right To Information'},
            { to: '/contactus/nirpersonnel', label: 'Non-IR Personnel'},
            { to: '/contactus/privacypolicy', label: 'Privacy Policy'},
            { to: '/contactus/leaveamessage', label: 'Leave A Message'},            
            { to: '/contactus/tandc', label: 'Terms and Conditions'},
            { to: '/contactus/otherrailwaysites', label: 'Other Railway Sites'}
          ]}/>
      </div>
    </div>
    </>
  );
};

export default Header;