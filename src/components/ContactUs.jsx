import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/contactus.css';

const ContactUs = () => {
  
  return (
    <div className='contactus'>
      <div className='contactussidebar'>
        <div className='contactussidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="contactussidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/contactus/disclaimer' >Disclaimer</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/contactus/righttoinfo' >Right To Information</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/nonirpersonnel' >Non-IR Personnel</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/privacypolicy' >Privacy Policy</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/termsandconditions' >Terms and Conditions</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/otherrailwaysites' >Other Railway Sites</Link>
          </div>
        </div>
      </div>
      <div className="contactuspage">
        <PageSideHeader />
            <div style={{marginBottom: '4rem'}}>
                <h4 style={{fontFamily: 'arial', paddingTop: '1rem', fontWeight: 'bold'}}>
                    Address
                </h4>

                <p style={{fontFamily: 'arial', paddingTop: '1rem'}}>
                    Indian Railways Institute of Signal Engineering and Telecommunications, <br />
                    Tarnaka Road, <br />
                    Secunderabad - 500 017
                </p>
                
                <p style={{fontFamily: 'arial', paddingTop: '1rem'}}>
                    Phone: +91-40-27820315 <br />
                    Fax: +91-40-27823922
                </p>
            </div>
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default ContactUs
