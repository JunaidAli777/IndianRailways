import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/disclaimer.css';

const Disclaimer = () => {
  
  return (
    <div className='disclaimer'>
      <div className='disclaimersidebar'>
        <div className='disclaimersidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="disclaimersidebarbody">

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/contactus/righttoinformation' >Right To Information</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/nirpersonnel' >Non-IR Personnel</Link>
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

      <div style={{fontFamily: 'arial'}} className="disclaimerpage">

        <PageSideHeader />

                <h2 style={{display: 'block', margin: '1rem auto', width: 'fit-content'}}>
                    Disclaimer
                </h2>

                <p>
                    This IR Web Portal is designed, developed and hosted by Centre For 
                    Railway Information Systems (CRIS), on behalf of Ministry of Railways, 
                    Government of India.
                </p>
                
                <p>
                    Though all efforts have been made to ensure to accuracy and currency 
                    of the content on this Portal, the same should not be construed as a 
                    statement of law or used for any legal purposes. CRIS accepts no 
                    responsibility in relation to the accuracy, completeness, usefulness 
                    or otherwise, of the contents. Users are advised to verify/ check any 
                    information with the relevant Government department(s) and /or other 
                    source(s), and obtain any appropriate professional advice before 
                    acting on the information provided in the Portal.
                </p>

                <p>
                    In no event will the Indian Railways be liable for any expense, loss 
                    or damage including, without limitation, indirect or consequential 
                    loss or damage, or any expense, loss or damage whatsoever arising from 
                    use, or loss of use, of data, arising out of or in connection with the 
                    use of this portal.
                </p>

                <p>
                    Links to other websites that have been included on this portal are 
                    provided for public are provided for public convenience only. CRIS is 
                    not responsible for the contents or reliability of linked websites and 
                    does not necessarily endorse the view expressed within them. We cannot 
                    guarantee the availability of such linked pages at the times.
                </p>

                <p>
                    Material featured on this portal may be reproduced free of charge 
                    after taking proper permission by sending a mail to us. However, the 
                    material has to be reproduced accurately and not to be used in a 
                    deregulatory manner or in a misleading context. Wherever the material 
                    is being published or issued to others, the source must be prominently
                    acknowledged. However, the permission to reproduce this material shall 
                    not extend to any material which is identified as being copyright of a 
                    third party. Authorisation to reproduce such material must be obtained 
                    from the departments/copyright holders concerned.
                </p>

                <p>
                    These terms and conditions shall be governed by and construed in 
                    accordance with the Indian Laws. Any dispute arising under these terms 
                    and conditions shall be subject to the exclusive jurisdiction of the 
                    courts of India.
                </p>
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Disclaimer
