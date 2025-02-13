import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/tandc.css';

const TandC = () => {
  
  return (
    <div className='tandc'>
      <div className='tandcsidebar'>
        <div className='tandcsidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="tandcsidebarbody">
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
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/privacypolicy' >Privacy Policy</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/otherrailwaysites' >Other Railway Sites</Link>
          </div>
        </div>
      </div>

      <div style={{fontFamily: 'arial'}} className="privacypolicypage">

        <PageSideHeader />

                <h2 style={{display: 'block', margin: '1rem auto', width: 'fit-content'}}>
                    Terms and Conditions
                </h2>

                <p>
                    This Web portal has been designed, developed and maintained by Centre 
                    For Railway Information Systems (CRIS), on behalf of Ministry of 
                    Railways, Government of India.
                </p>

                <p>
                    These terms and conditions shall be governed by and construed in 
                    accordance with the Indian Laws. Any dispute arising under these terms 
                    and conditions shall be subject to the exclusive jurisdiction of the 
                    courts of India.
                </p>

                <p>
                    The information posted on this Portal could include hypertext links or pointers to information created and maintained by non – Government/ Private organisations. Indian Railways is providing these links and pointers solely for the information and convenience. When a user selects a link to an outside portal, the user leaves the ‘ Indian Railway Portal’ and is subject to the privacy and security policies of the owners/sponsors of the outside Portal/website.
                </p>

                <p>
                    Ministry of Railways does not guarantee that linked websites comply with Indian Government Web Guidelines.
                </p>

                <p>
                    Access any part of the Portal; <br />
                    Print off one copy of any or all of the pages for his/her own personal reference.
                </p>

                <p><strong>The user may not:</strong></p>

                <p>
                    Copy (whether by printing off on to paper, storing on disk, downloading or in any 
                    other way), distribute (including distributing copies), broadcast, alter or tamper 
                    with in any way or otherwise use any material contained in the portal except as set out under “The user may”. This restrictions apply in relation to all or p[art of the material on Portal;
                </p>

                <p>
                    Remove any copyright, other intellectual property notices contained in the original material from any material copied or printed off from the portal;
                </p>

                <p>Link to this Portal;</p>

                <p>…..without the written consent</p>

                <p>If the user wishes to provide a hypertext or other link to this portal, please contact the website administrator with details of:</p>

                <p>
                    The URL(s) of the web page(s) from which the user is proposing to link to this portal <br />
                    The URL(s) of the web page(s) on this Portal to which the user is proposing to link
                </p>

                <p>
                    …..and request will be considered. Indian Railways has the sole discretion to accept or reject such requests.
                </p>

                <p><strong>Changes In Terms & Conditions</strong></p>

                <p>Ministry of Railways may change the terms and conditions and disclaimer set out above from time to time. By browsing this Portal the user accepts that he/she is bound by the current terms and conditions and disclaimer and so the user checks these each time he/she revisits the Portal.</p>
                
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default TandC
