import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/reachingiriset.css';

const ReachingIriset = () => {
  
  return (
    <div className='reachingiriset'>
      <div className='reachingirisetsidebar'>
        <div className='reachingirisetsidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="reachingirisetsidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/managementandfaculty' >Management & Faculty</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns' >Immovable Property Returns</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/aboutus/portalpolicies' >Portal Policies</Link>
          </div>

        </div>
      </div>
      <div className="reachingirisetpage">
        <PageSideHeader />

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'arial', fontSize: '1.25rem'}}>
            <h1>
                Reaching IRISET
            </h1>

            <p>
                The Institute is situated in Secunderabad, Telangana. It is conveniently 
                located in South Lallaguda, just 3 Km away from Secunderabad Railway 
                Station and 42 Km from Hyderabad Airport (with travel time of around 1 Hr 
                15 minutes). The Institute is sandwiched between Railway Officer’s Club 
                and Railway Degree College. The landmarks to be looked out for are Tarnaka 
                Metro Station and Mettuguda Metro Station which are situated on either side 
                of IRISET.
            </p>

            <p>
                Transport is available for the use of trainees for reaching the Institute 
                from the station when reporting for training and for returning to the 
                station on being relieved from training and during emergencies. The 
                transport is made available on receipt of advance information and 
                depending on the availability. Advance request for transport booking may 
                be sent to Transport Section (Contact no:9701341823 ) or Assistant Library 
                Information Officer (Contact No:9701341823 ). It may please be noted that 
                the transport requirement on holidays shall be given on previous working 
                day. In case of any difficulty, assistance of Hostel Superintendent 
                (Contact No: 9701341818) may be sought in this regard.
            </p>

            <p>
                Kindly note that, there are 10 Platforms in Secunderabad Station. IRISET vehicle 
                is made available on the Bhoiguda side (which is towards Platform No. 10) of the 
                Railway Station.
            </p>
        </div>
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default ReachingIriset
