import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/yamuna.css';

const Yamuna = () => {
  
  return (
    <div className='yamuna'>
      <div className="yamunasidebar">
        <div className="yamunasidebarhead">
            <Link to='/'>Home</Link>
        </div>
        <div className="yamunasidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/hostels/kaveri' >Kaveri - Hostel 1</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/hostels/krishna' >Krishna - Hostel 3</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/hostels/ganga' >Ganga - Hostel 4</Link>
          </div>
        </div>
      </div>
      <div style={{fontFamily: 'arial'}} className="yamunapage">
        <PageSideHeader />
                <h2 style={{display: 'block', margin: '1rem auto', width: 'fit-content'}}>
                    Yamuna - Hostel 2
                </h2>

                <p>
                    This hostel is meant for supervisors (apprentices and in-service 
                    supervisors.) There are 48 rooms in this hostel with a capacity to 
                    accomodate 98 trainees. Extra cots are also made available to meet the 
                    peek demand from Railways. Each trainee is provided with a study table 
                    with table lamp, a chair, a bed with mosquito net, and an almirah. 
                    Adequate number of common toilets have been provided on each floor.
                </p>

                <p>
                    The hostel warden is Shri Sharad Prasad (Ph: 85852(Rly), 85862(Rly) & 
                    91-40-27785852(BSNL).)
                </p>
                
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Yamuna
