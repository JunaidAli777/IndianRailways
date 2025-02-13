import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/privacypolicy.css';

const PrivacyPolicy = () => {
  
  return (
    <div className='privacypolicy'>
      <div className='privacypolicysidebar'>
        <div className='privacypolicysidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="privacypolicysidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/disclaimer' >Disclaimer</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/contactus/righttoinformation' >Right To Information</Link>
          </div>


          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/nirpersonnel' >Non-IR Personnel</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/tandc' >Terms and Conditions</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/otherrailwaysites' >Other Railway Sites</Link>
          </div>
        </div>
      </div>

      <div style={{fontFamily: 'arial'}} className="privacypolicypage">

        <PageSideHeader />

                <h2 style={{display: 'block', margin: '1rem auto', width: 'fit-content'}}>
                    Privacy Policy
                </h2>

                <p>
                    Indian Railway Portal does not automatically capture and specific personal information from you, (like name, phone number or email address), that allows us to identify the end user individually. <br />
                    If the Indian Railway Portal Website requests to provide personal information, it will be informed for the particular purposes for which the information is gathered and adequate security measures will be taken to protect personal information. <br />
                    We do not sell or share any personally identifiable information volunteered on the Indian Railway Portal site to any third party (public/ private). Any information provided to this portal will be protected from loss, misuse, unauthorized access or disclosure, alteration, or destruction. <br />
                    We gather certain information about the user, such as Internet protocol (IP) addresses, domain name, browser type, operating system, the date and time for the visit and the pages visited. We make no attempt to link these addresses with the identity of individuals visiting our site unless an attempt to damage the site has been detected.
                </p>
                
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default PrivacyPolicy
