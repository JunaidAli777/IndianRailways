import React from 'react';
import './styles/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import vcss from '../assets/vcss.png';
import xhtml from '../assets/valid-xhtml10.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='section1'>
            <div className="sec1sub1">
                <Link 
                    onClick={() => window.open('https://www.facebook.com/groups/www.iriset.indianrailways.gov.in')}
                    style={{color: '#157DE8'}}>
                    <FacebookIcon />
                </Link>

                <Link 
                    onClick={() => window.open('https://x.com/IRISET_IR')}
                    style={{color: 'black'}}>
                    <XIcon />
                </Link>

                <Link 
                    onClick={() => window.open('https://www.youtube.com/watch?v=gZo4RDE2Mgo')}
                    style={{color: 'red'}}>
                    <YouTubeIcon />
                </Link>

                <Link 
                    onClick={() => window.open('https://www.linkedin.com/company/iriset-secunderabad')}
                    style={{color: '#157DE8'}}>
                    <LinkedInIcon />
                </Link>
            </div>

            <div className="sec1sub2">
                <Link
                    to={'https://iriset.indianrailways.gov.in/view_section.jsp?lang=0&id=0,7,277'}>
                    Site Map
                </Link>
                <span>|</span>

                <Link
                    to={'https://iriset.indianrailways.gov.in/view_section.jsp?lang=0&id=0,7'}>
                    Contact Us
                </Link>
                <span>|</span>

                <Link
                    to={'https://iriset.indianrailways.gov.in/view_section.jsp?lang=0&id=0,300,355'}>
                    RTI
                </Link>
                <span>|</span>

                <Link
                    to={'https://iriset.indianrailways.gov.in/view_section.jsp?lang=0&id=0,7,30'}>
                    Disclaimer
                </Link>
                <span>|</span>

                <Link
                    to={'https://iriset.indianrailways.gov.in/view_section.jsp?lang=0&id=0,7,347'}>
                    Terms & Conditions
                </Link>
                <span>|</span>

                <Link
                    to={'https://iriset.indianrailways.gov.in/view_section.jsp?lang=0&id=0,7,32'}>
                    Privacy Policy
                </Link>    
            </div>

            <div className="sec1sub3">
                <Link
                    onClick={() => window.open('https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Firiset.indianrailways.gov.in%2F')}>
                    <img src={vcss} />
                </Link>

                <Link
                    onClick={() => window.open('https://validator.w3.org/nu/?doc=https%3A%2F%2Firiset.indianrailways.gov.in%2F')}>
                    <img src={xhtml} />
                </Link>
            </div>
      </div>

      <div className="section2">
        <div className='sec2sub1'>
            &copy; All Rights Reserved.
        </div>

        <div className='sec2sub2'>
            This is the Portal of Indian Railways, developed with an objective to enable 
            a single window access to information and services being provided by the 
            various Indian Railways entities. The content in this Portal is the result of a 
            collaborative effort of various Indian Railways Entities and Departments 
            Maintained by CRIS, Ministry of Railways, Government of India.
        </div>

      </div>

    </div>
  )
}

export default Footer
