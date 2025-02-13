import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/ganga.css';

const Ganga = () => {
  
  return (
    <div className='ganga'>
      <div className="gangasidebar">
        <div className="gangasidebarhead">
            <Link to='/'>Home</Link>
        </div>
        <div className="gangasidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/hostels/kaveri' >Kaveri - Hostel 1</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/hostels/yamuna' >Yamuna - Hostel 2</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/hostels/krishna' >Krishna - Hostel 3</Link>
          </div>
        </div>
      </div>
      <div style={{fontFamily: 'arial'}} className="gangapage">
        <PageSideHeader />
                <h2 style={{display: 'block', margin: '1rem auto', width: 'fit-content'}}>
                    Ganga - Hostel 4
                </h2>

                <p>
                    This hostel is meant for Officers (Probationers and Working Officers). There are 
                    60 single seated rooms in the hostel. Each room accommodates one officer and is 
                    fully furnished with one study table with table lamp, one teapoy, two chairs, an 
                    almirah, one bed with mosquito net and a stand for wet clothes. Each room has an 
                    attached washroom. 15 suites have further been added for accommodating senior 
                    Officers. Wireless Internet is extended to all the rooms through DSLAM. Billiards 
                    table is also available in this Hostel.
                </p>

                <p>
                    The hostel warden is Shri N Pawan (Ph: 85854(Rly), 85864(Rly) & 
                    91-40-27785854(BSNL))
                </p>
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Ganga
