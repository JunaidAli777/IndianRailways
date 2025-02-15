import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/kaveri.css';

const Kaveri = () => {
  
  return (
    <div className='kaveri'>
      <div className="kaverisidebar">
        <div className="kaverisidebarhead">
            <Link to='/'>Home</Link>
        </div>
        <div className="kaverisidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/hostels/yamuna' >Yamuna - Hostel 2</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/hostels/krishna' >Krishna - Hostel 3</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/hostels/ganga' >Ganga - Hostel 4</Link>
          </div>
        </div>
      </div>
      <div style={{fontFamily: 'arial'}} className="kaveripage">
        <PageSideHeader />

                <h2 style={{display: 'block', margin: '1rem auto', width: 'fit-content'}}>
                    Kaveri - Hostel 1
                </h2>

                <p>
                    This hostel is meant for supervisors (apprentices and in-service 
                    supervisors.) There are 35 double-seated rooms in this hostel. Each 
                    trainee is provided with a study table with table lamp, a chair, a bed 
                    with mosquito net, and an almirah. Adequate number of common toilets 
                    have been provided on each floor.
                </p>

                <p>
                    The hostel warden is Shri Suresh Kumar (Ph: 85851(Rly) & 85861 
                    (Rly)91-40-27785851(BSNL).)
                </p>
                
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Kaveri
