import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/otherrailwaysites.css';
import OtherSiteLink from './OtherSiteLink';

const OtherRailwaySites = () => {
  
  return (
    <div className='otherrailwaysites'>
      <div className='otherrailwaysitessidebar'>
        <div className='otherrailwaysitessidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="otherrailwaysitessidebarbody">
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
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/leaveamessage' >Leave A Message</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/tandc' >Terms and Conditions</Link>
          </div>

        </div>
      </div>

      <div style={{fontFamily: 'arial'}} className="otherrailwaysitespage">

        <PageSideHeader />
        
        <div className='zonalrailways'>
          
          <h2>ZONAL RAILWAYS</h2>

          <div className='links'>

            <OtherSiteLink 
                to='https://cr.indianrailways.gov.in/?lang=1'
                linkText='Central Railway'
            />

            <OtherSiteLink 
                to='https://ecr.indianrailways.gov.in/'
                linkText='East Central Railway'
            />

            <OtherSiteLink 
                to='https://cr.indianrailways.gov.in/?lang=1'
                linkText='Central Railway'
            />

            <OtherSiteLink 
                to='https://cr.indianrailways.gov.in/?lang=1'
                linkText='Central Railway'
            />

            <OtherSiteLink 
                to='https://eastcoastrail.indianrailways.gov.in/'
                linkText='East Coast Railway'
            />

            <OtherSiteLink 
                to='https://er.indianrailways.gov.in/'
                linkText='Eastern Railway'
            />

            <OtherSiteLink 
                to='https://ncr.indianrailways.gov.in/'
                linkText='North Central'
            />

            <OtherSiteLink 
                to='https://ner.indianrailways.gov.in/'
                linkText='North Eastern Railway'
            />

            <OtherSiteLink 
                to='https://cr.indianrailways.gov.in/?lang=1'
                linkText='Central Railway'
            />

            <OtherSiteLink 
                to='https://nwr.indianrailways.gov.in/'
                linkText='North Western'
            />

            <OtherSiteLink 
                to='https://nfr.indianrailways.gov.in/'
                linkText='Northeast Frontier Railways'
            />

            <OtherSiteLink 
                to='https://nr.indianrailways.gov.in/'
                linkText='Northern Railway'
            />

            <OtherSiteLink 
                to='https://cr.indianrailways.gov.in/?lang=1'
                linkText='Central Railway'
            />

            <OtherSiteLink 
                to='https://scr.indianrailways.gov.in/'
                linkText='South Central Railway'
            />

            <OtherSiteLink 
                to='https://secr.indianrailways.gov.in/'
                linkText='South East Central Railway'
            />

            <OtherSiteLink 
                to='https://ser.indianrailways.gov.in/'
                linkText='South Eastern Railway'
            />

            <OtherSiteLink 
                to='https://ser.indianrailways.gov.in/'
                linkText='South Eastern Railway'
            />

            <OtherSiteLink 
                to='https://swr.indianrailways.gov.in/'
                linkText='South Western'
            />

            <OtherSiteLink 
                to='https://wr.indianrailways.gov.in/?lang=1'
                linkText='Western Railway'
            />

            <OtherSiteLink 
                to='https://mtp.indianrailways.gov.in/'
                linkText='Metro Railway Kolkata'
            />

          </div>
        </div>

        <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '3rem auto'}}></div>

        <div className='productionunits'>
          
          <h2>PRODUCTION UNITS</h2>

          <div className='links'>

            <OtherSiteLink 
                  to='https://clw.indianrailways.gov.in/'
                  linkText='Chittaranjan Loco Works'
              />

              <OtherSiteLink 
                  to='https://dlw.indianrailways.gov.in/'
                  linkText='Diesel Locomotive Works'
              />

              <OtherSiteLink 
                  to='https://plw.indianrailways.gov.in/'
                  linkText='Diesel-Loco Modernisation Works'
              />

              <OtherSiteLink 
                  to='https://icf.indianrailways.gov.in/'
                  linkText='Integral Coach Factory'
              />

              <OtherSiteLink 
                  to='https://rcf.indianrailways.gov.in/'
                  linkText='Rail Coach Factory'
              />

              <OtherSiteLink 
                  to='https://rwf.indianrailways.gov.in/'
                  linkText='Rail Wheel Factory'
              />
          </div>
        </div>

        <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '3rem auto'}}></div>

        <div className='corporationsites'>
        
          <h2>CORPORATION SITES</h2>

          <div className='links'>

            <OtherSiteLink 
                  to='https://cofmow.gov.in/'
                  linkText='Central Organisation For Modernisation of Workshops'
              />

              <OtherSiteLink 
                  to='https://cris.org.in/'
                  linkText='Centre for Railway Information System'
              />

              <OtherSiteLink 
                  to='https://concorindia.com/'
                  linkText='Container Corporation of India Ltd.'
              />

              <OtherSiteLink 
                  to='https://irctc.co.in/'
                  linkText='Indian Railway Catering and Tourism Corporation Ltd.'
              />

              <OtherSiteLink 
                  to='https://irfc.nic.in/'
                  linkText='Indian Railway Finance Corporation'
              />

              <OtherSiteLink 
                  to='https://ircon.org/'
                  linkText='IRCON International Ltd.'
              />

              <OtherSiteLink 
                  to='https://pipavavrailway.com/'
                  linkText='Pipavav Railway Corporation Limited'
              />

              <OtherSiteLink 
                  to='https://railtelindia.com/'
                  linkText='RAILTEL Corporation of India Ltd.'
              />

              <OtherSiteLink 
                  to='https://konkanrailway.com/'
                  linkText='Konkan Railway Corporation’s.'
              />

              <OtherSiteLink 
                  to='https://rites.com/'
                  linkText='RITES Ltd.'
              />
          </div>
        </div>

        <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '3rem auto'}}></div>

        <div className='zonalrailways'>
          
          <h2>OTHERS</h2>

          <div className='links'>

            <OtherSiteLink 
                to='https://core.indianrailways.gov.in/'
                linkText='Central Organisation for Railway Electrification'
            />

            <OtherSiteLink 
                to='https://dhr.indianrailways.gov.in/'
                linkText='Darjeeling Himalayan RailwayS'
            />

            <OtherSiteLink 
                to='https://cr.indianrailways.gov.in/?lang=1'
                linkText='Central Railway'
            />

            <OtherSiteLink 
                to='https://delhimetrorail.com/'
                linkText='Delhi Metro Rail Corporation'
            />

            <OtherSiteLink 
                to='https://dfccil.org/'
                linkText='Dedicated Freight Corridor Corporation of India Limited (DFCC)'
            />

            <OtherSiteLink 
                to='https://indianrailways.gov.in/view_section.jsp?lang=0&id=0,5,384'
                linkText='Federation of Railway Officers Associations'
            />

            <OtherSiteLink 
                to='https://irastimes.org/'
                linkText='Indian Railway Accounts Service Association'
            />

            <OtherSiteLink 
                to='https://ircot.railnet.gov.in/'
                linkText='Indian Railway Central Organisation for Telecom.'
            />

            <OtherSiteLink 
                to='https://irieen.indianrailways.gov.in/'
                linkText='Indian Railways Institute of Electrical Engineering'
            />

            <OtherSiteLink 
                to='https://irimee.indianrailways.gov.in/'
                linkText='Indian Railways Institute of Mechanical and Electrical Engineering'
            />

            <OtherSiteLink 
                to='https://iriset.indianrailways.gov.in/'
                linkText='Indian Railways Institute of Signal Engineering and Telecommunications'
            />

            <OtherSiteLink 
                to='https://irsme.nic.in/'
                linkText='Indian Railways Service of Mechanical Engineers'
            />

            <OtherSiteLink 
                to='https://irts.org.in/'
                linkText='Indian Railway Traffic Service Association'
            />

            <OtherSiteLink 
                to='https://irt-india.com/'
                linkText='Institute of Rail transport'
            />

            <OtherSiteLink 
                to='https://iritm.indianrailways.gov.in/'
                linkText='Indian Railways Institute of Transport Management'
            />

            <OtherSiteLink 
                to='https://irssea.org.in/'
                linkText='Indian Railways Service of Signal Engineers Association'
            />

            <OtherSiteLink 
                to='https://it.indianrail.gov.in/'
                linkText='IT Projects under CAO/FOIS'
            />

            <OtherSiteLink 
                to='https://irwo.in/'
                linkText='Indian Railway Welfare Organisation'
            />

            <OtherSiteLink 
                to='https://nrm.indianrailways.gov.in/'
                linkText='National Rail Museum sites'
            />

            <OtherSiteLink 
                to='https://rtdc.in/pow.htm'
                linkText='Palace on Wheels (RTDC Website)'
            />

            <OtherSiteLink 
                to='https://rtdc.in/pow.htm'
                linkText='Railway Claims Tribunal'
            />

            <OtherSiteLink 
                to='https://rlda.in/'
                linkText='Rail Land Development Authority'
            />

            <OtherSiteLink 
                to='https://rscbrc.ac.in/'
                linkText='Railway Staff College, Baroda'
            />

            <OtherSiteLink 
                to='https://rvnl.org/'
                linkText='Rail Vikas Nigam Ltd.'
            />

            <OtherSiteLink 
                to='https://rdso.indianrailways.gov.in/'
                linkText='Research Design and Standards Organisation'
            />

          </div>
        </div>

                                
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default OtherRailwaySites
