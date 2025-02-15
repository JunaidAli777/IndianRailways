import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/hostels.css';

const Hostels = () => {
  
  return (
    <div className='hostels'>
      <div className="hostelssidebar">
        <div className="hostelssidebarhead">
            <Link to='/'>Home</Link>
        </div>
        <div className="hostelssidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/hostels/kaveri' >Kaveri - Hoste l</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/hostels/yamuna' >Yamuna - Hoste 2</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/hostels/krishna' >Krishna - Hoste 3</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/hostels/ganga' >Ganga - Hoste 4</Link>
          </div>
        </div>
      </div>
      <div className="hostelspage">
        <PageSideHeader />
            <div style={{display: 'flex' , flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem'}}>
                <p>
                    IRISET provides fully furnished accommodation for the trainees. 
                    There are four hostels. Each hostel has well equipped rooms to make 
                    for comfortable living. They are also equipped with recreational 
                    facilities which ensure all-round development of trainees. 
                    Each hostel has a television with cable connection, a music system, 
                    facility for table-tennis, other indoor games and a multi-station gym. 
                    Each hostel gets sufficient newspapers and magazines.
                </p>

                <p>
                    Hostel Superintendent is Shri. D.Suresh Babu (Phone: 85848(Rly) and 
                    85864(Rly) of Reception. He is the overall in charge of all the four 
                    Hostels.
                </p>

                <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '0.5rem'}}>
                    <li><Link to='/hostels/kaveri'>Kaveri (Hostel 1)</Link></li>
                    <li><Link to='/hostels/yamuna'>Yamuna (Hostel 2)</Link></li>
                    <li><Link to='/hostels/krishna'>Krishna (Hostel 3)</Link></li>
                    <li><Link to='/hostels/ganga'>Ganga (Hostel 4)</Link></li>
                </ul>
                
            </div>
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Hostels
