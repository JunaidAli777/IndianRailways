import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/nirpersonnel.css';

const NirPersonnel = () => {
  
  return (
    <div className='nirpersonnel'>
      <div className='nirpersonnelsidebar'>
        <div className='nirpersonnelsidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="nirpersonnelsidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/disclaimer' >Disclaimer</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/contactus/righttoinformation' >Right To Information</Link>
          </div>


          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/privacypolicy' >Privacy Policy</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/leaveamessage' >Leave A Message</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/tandc' >Terms and Conditions</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/otherrailwaysites' >Other Railway Sites</Link>
          </div>
        </div>
      </div>

      <div style={{fontFamily: 'arial'}} className="nirpersonnelpage">

        <PageSideHeader />

                <h2 style={{display: 'block', margin: '1rem auto', width: 'fit-content'}}>
                    Training for Foreign and Non-IR Personnel
                </h2>

                <p>
                    IRISET has been training foreign railway personnel. We have so far 
                    trained engineers from Nigeria, Tanzania, Philippines, Zambia, Kenya, 
                    Ghana, Malaysia, Sudan, East Africa, Indonesia, South Korea, Namibia, 
                    Jordan, Bangladesh, Iraq, Mozambique, Vietnam, Syria, Myanmar and Iran.
                </p>
                
                <p>We also train personnel sponsored by PSU and other firms of repute.</p>

                <p>The courses offered for PSUs may be seen under the ‘Courses’ tab.</p>

                <p>Director General, IRISET may be contacted for this purpose at the email ID: directorgeneral@iriset.railnet.gov.in</p>
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default NirPersonnel
