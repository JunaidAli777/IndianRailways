import React from 'react';
import { Link } from 'react-router-dom';
import './styles/aboutus.css';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/courses.css';

const Courses = () => {
  
  return (
    <div className='courses'>
      <div className="coursessidebar">
        <div className="coursessidebarhead">
            <Link to='/'>Home</Link>
        </div>
        <div className="coursessidebarbody">
        </div>
      </div>
      <div className="coursespage">
        <PageSideHeader />
            <div style={{display: 'flex' , flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem'}}>
                <h2>
                    IRISET Courses
                </h2>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem'}}>
                    <p>
                        For Courses click course Calendar tab
                    </p>
                    <Link to='https://iriset.railnet.gov.in/'>iriset.railnet.gov.in</Link>
                </div>
                
            </div>
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Courses
