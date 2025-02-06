import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/aboutus.css'

const AboutUs = () => {

  const navigate = useNavigate();

  const handleDropdownChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };


  return (
    <div className='aboutus'>
      <div className="sidebar">
        <div className="sidebarhead">
            <Link to='/'>Home</Link>
        </div>
        <div className="sidebarbody">
            <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/mgmtnfclty' >Management & Faculty</Link>
            </div>

            <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/iriset' >Reaching IRISET</Link>
            </div>

            <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/ipr' >Immovable Property Returns</Link>
            </div>

            <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/pp' >Portal Policies</Link>
            </div>
        </div>
      </div>
      <div className="page">
        <div className="pagehead">

        </div>

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
    </div>
    </div>
  )
}

export default AboutUs
