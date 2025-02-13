import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import StaffCard from './StaffCard';
import './styles/managementandfaculty.css';

const ManagementAndFaculty = () => {
  
  return (
    <div className='managementandfaculty'>
      <div className='managementandfacultysidebar'>
        <div className='managementandfacultysidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="managementandfacultysidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/reachingiriset' >Reaching IRISET</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns' >Immovable Property Returns</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/aboutus/portalpolicies' >Portal Policies</Link>
          </div>

        </div>
      </div>
      <div className="managementandfacultypage">
        <PageSideHeader />

        <StaffCard 
            title='Director General'
            grade='HAG+'
            img='/files/images/management_and_faculty/sk_srivastava.jpg'
            name='Shri Sharad Kumar Srivastava'
            number='040 - 27822007'
            email='directorgeneral@iriset.railnet.gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

       
         <StaffCard 
            title='Additional Director General'
            grade='HAG'
            img='/files/images/management_and_faculty/pv_raja_shekhar.jpeg'
            name='Shri P V Raja Shekhar'
            number='040-2780003'
            email= 'adg.iriset@iriset.railnet.gov.in'
        />

        <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='PED, Centre of Excellence'
            grade='HAG'
            img='/files/images/management_and_faculty/lalit_k_mansukhani.jpg'
            name='Shri Lalit Kumar Mansukhani'
            number='040-27785821'
            email= 'lalit.mansukhani@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Dean & Sr. Professor (IT & K)'
            grade='NF HAG'
            img='/files/images/management_and_faculty/gaurav_govil.jpg'
            name='Shri Gaurav Govil'
            number= '040-27820160'
            email= 'gaurav.govil@gov.in '
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Sr. Professor Training'
            grade='SAG'
            img='/files/images/management_and_faculty/c_neelakanta_reddy.jpg'
            name='Shri Neelakanta Reddy'
            number='040-27820130'
            email= 'cneelam.reddy@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Sr. Professor Telecom'
            grade='SAG'
            img='/files/images/management_and_faculty/susheel_namdeo.jpeg'
            name=' Shri Susheel Namdeo'
            number='040-27820058'
            email= 'susheel.namdeo@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Sr. Professor Signal'
            grade='SAG'
            img='/files/images/management_and_faculty/y_ramesh_babu.jpg'
            name='Shri Y Ramesh Babu'
            number='040-27820099'
            email= 'rameshbabu.1973@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Sr. Professor Signal - 2'
            grade='SAG'
            img='/files/images/management_and_faculty/t_ramesh_babu.jpeg'
            name='Shri T Ramesh Babu'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Professor Signal - 2'
            grade='SG'
            img='/files/images/management_and_faculty/css_subrahmanyam.jpeg'
            name='Shri CSS Subrahmanyam'
            number='040-'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Professor Admin'
            grade='SG'
            img='/files/images/management_and_faculty/s_hari.jpg'
            name='Shri S Hari'
            number='040-27820090'
            email= 'hari.s17@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Professor Telecom'
            grade='JAG / IRSSE'
            img='/files/images/management_and_faculty/r_dinesh.jpeg'
            name='Shri R Dinesh'
            number=' 040-27785812'
            email= 'dinesh.raghunath@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Asst. Professor Telecom'
            grade='SS'
            img='/files/images/management_and_faculty/sm_hafeez_ali.jpg'
            name='Shri SM Hafeez Ali'
            number='040-27785826'
            email= 'hafeezali.sm@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Asst. Professor Signal '
            grade='SS'
            img='/files/images/management_and_faculty/k_uma_maheshwara_rao.jpg'
            name='Shri K Uma Maheshwara Rao'
            number='040-27785836'
            email= 'mahesh.kolanti@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Lecturer Training'
            img='/files/images/management_and_faculty/m_raj_kumar.jpg'
            name=' Shri S Rajkumar'
            number='040-27785820'
            email= 'raja.kumar@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Lecturer Telecom (IT)'
            img='/files/images/management_and_faculty/d_janardhana.jpg'
            name='Shri D Janardhana'
            number='040-27785832'
            email= 'janardhana.68@gov.in      '
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Lecturer Telecom 2 & TA to DG'
            img='/files/images/management_and_faculty/p_phanisekhar.jpg'
            name='Shri P Phanisekhar'
            number='040-27785830'
            email= 'p.phanisekhar@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Executive Assistant (Establishment)'
            img='/files/images/management_and_faculty/tt_anand.jpg'
            name='Shri TT Anand'
            number='040-27789842'
            email= 'anand.tt@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Private Secrtary to DG'
            img='/files/images/management_and_faculty/as_reddy.jpg'
            name='Shri A Srinivasa Reddy'
            number='040-27789838'
            email= ' a.srinivasareddy@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Raj Bhasha Adhikari'
            img='/files/images/management_and_faculty/akhilesh_sharma.jpg'
            name=' Shri Akhilesh Sharma'
            number=' 040-27785828'
            email= 'sharma.akhilesh@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='AS'
            img='/files/images/management_and_faculty/k_ramesh_chandra.jpg'
            name='Shri K Ramesh Chandra'
            number='040-27785840'
            email= 'Krameshchandra@gov.in'
        />

        <div style={{height: '1px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto'}}></div>

        <StaffCard 
            title='Assistant Library Information Officer'
            img='/files/images/management_and_faculty/p_venugopal.jpg'
            name='Shri P Venugopal'
            number='040-27785844 '
            email= 'p.venugopal0508@gov.in'
        />
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default ManagementAndFaculty
