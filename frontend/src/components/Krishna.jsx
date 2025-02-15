import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/krishna.css';

const Krishna = () => {
  
  return (
    <div className='krishna'>
      <div className="krishnasidebar">
        <div className="krishnasidebarhead">
            <Link to='/'>Home</Link>
        </div>
        <div className="krishnasidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/hostels/kaveri' >Kaveri - Hostel 1</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/hostels/yamuna' >Yamuna - Hostel 2</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/hostels/ganga' >Ganga - Hostel 4</Link>
          </div>
        </div>
      </div>
      <div style={{fontFamily: 'arial'}} className="krishnapage">
        <PageSideHeader />
                <h2 style={{display: 'block', margin: '1rem auto', width: 'fit-content'}}>
                    Krishna - Hostel 3
                </h2>

                <p>
                    This hostel is meant for supervisors (apprentices and in-service 
                    supervisors.) This hostel can accomodate 142 trainees normally. Most 
                    of the rooms are double seated. Provision for a few extra beds for 
                    excess demand exists. Each trainee is provided with a study table with 
                    table lamp, a chair, a bed with mosquito net, and an almirah. 
                    Adequate number of common toilets have been provided on each floor.
                </p>

                <p>
                    A new block consisting of 42 rooms has been added to this hostel.
                    The rooms here are well furnished with attached washrooms. 
                </p>

                <p>
                    The hostel warden is Shri M Satyanarayana (Ph: 85853(Rly),  85863(Rly) & 
                    91-40-27785853(BSNL).)
                </p>
                
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Krishna
