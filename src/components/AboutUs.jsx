import React from 'react';
import { Link } from 'react-router-dom';
import './styles/aboutus.css';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';

const AboutUs = () => {
  
  return (
    <div className='aboutus'>
      <div className="aboutussidebar">
        <div className="aboutussidebarhead">
            <Link to='/'>Home</Link>
        </div>
        <div className="aboutussidebarbody">
            <div>
              <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/managementandfaculty' >Management & Faculty</Link>
            </div>

            <div>
              <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/reachingiriset' >Reaching IRISET</Link>
            </div>

            <div>
              <span>&gt;&gt;&nbsp;</span>    <Link to='/aboutus/immovablepropertyreturns' >Immovable Property Returns</Link>
            </div>

            <div>
              <span>&gt;&gt;&nbsp;</span>    <Link to='/aboutus/portalpolicies' >Portal Policies</Link>
            </div>
        </div>
      </div>
      <div className="aboutuspage">
        <PageSideHeader />
        
        <h4>
            IRISET : S&T Centralized Training Institute
        </h4>
        <p>
            Setup in 1957 by the Ministry of Railways, Government of India, to cater to 
            specialised training needs of their own staff and officers in the field of Railway 
            Signalling and Telecommunication, the Institute today caters to the needs of the 
            entire Afro-Asian region.
        </p>

        <p>
            Located in the southern part of India in Secunderabad adjoining the capital 
            city of Hyderabad in Telangana, the Institute is spread over about 28.3 
            hectares. IRISET provides initial as well as advanced training, theory as 
            well as hands on, in Railway Signalling and Telecommunications. It caters 
            to the total training requirement of the Officers and the Supervisors of 
            Signal and Telecommunication department of Indian Railways.
        </p>

        <p>
            IRISET is in the approved list of ESCAP and UNDP. It provides training in 
            Railway Signalling and Telecommunications to private and public sector 
            enterprises as well. It also train officials of Foreign Railways.
        </p>

        <p>
            There are four hostels in the campus itself, one for officers and three for 
            supervisors. There are laboratories for all the important areas of Railway 
            Signalling & Telecommunication to provide hands on training in the Institute. 
            The lecture halls are equipped with the modern teaching aids.
        </p>

        <PageSideFooter />

        
    </div>
    </div>
  )
}

export default AboutUs
