import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/notifications.css';

const Notifications = () => {
  
  return (
    <div className='notifications'>
      <div className="notificationssidebar">
        <div className="notificationssidebarhead">
            <Link to='/'>Home</Link>
        </div>
        <div className="notificationssidebarbody">
        </div>
      </div>
      <div className="notificationspage">
        <PageSideHeader />
            <div style={{display: 'flex' , flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem'}}>
                <h2>
                    IRISET Notifications
                </h2>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem'}}>
                    <p>
                        For Notifications go to
                    </p>
                    <Link to='https://iriset.railnet.gov.in/'>iriset.railnet.gov.in</Link>
                </div>
                
            </div>
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Notifications
