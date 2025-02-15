import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/events.css';
import pic1 from '/files/images/eventpic1.jpeg';
import pic2 from '/files/images/eventpic2.jpeg';
import pic3 from '/files/images/eventpic3.jpeg';
import pic4 from '/files/images/eventpic4.jpeg';
import pic5 from '/files/images/eventpic5.jpeg';
import pic6 from '/files/images/eventpic6.jpg';
import pic7 from '/files/images/eventpic7.jpeg';
import pic8 from '/files/images/eventpic8.jpg';
import pic9 from '/files/images/eventpic9.jpeg';
import pic10 from '/files/images/eventpic10.jpeg';
import pic11 from '/files/images/eventpic11.jpg';
import pic12 from '/files/images/eventpic12.jpg';
import pic13 from '/files/images/eventpic13.jpeg';
import pic14 from '/files/images/eventpic14.jpeg';
import pic15 from '/files/images/eventpic15.jpg';
import pic16 from '/files/images/eventpic16.jpg';
import pic17 from '/files/images/eventpic17.jpeg';
import pic18 from '/files/images/eventpic18.jpeg';
import pic19 from '/files/images/eventpic19.png';

const Events = () => {
  return (
    <div className='events'>
        <div className="eventssidebar">
            <div className="eventssidebarhead">
              <Link to='/'>Home</Link>
            </div>
            <div className="eventssidebarbody"></div>
        </div>
        
        <div className="eventspage">
          <PageSideHeader />

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem', fontWeight: '600'}}>
            <p>
              IRISET signed MoU with Rajasthan Technical University (RTU), Rawatbhata, Kota, 
              Rajasthan on 05.12.2024 to introduce Railway Signalling and Automatic Train 
              Protection System - KAVACH in B Tech program. This exercise is done as part of 
              capacity cum capability building, mission of the Ministry of Railways.
            </p>

            <p>
              MoU was signed by Shri Sharad Kumar Srivastava, IRSSE, Director General, 
              IRISET, and Prof. S. K. Singh, Vice Chancellor of RTU.
            </p>

            <img src={pic1} alt="" />
            <img src={pic2} alt="" />

          </div>

          <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '6rem auto'}}></div>

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
            <p>
              IRISET conducted a Workshop on Fast Track Implementation of Kavach on IR on 23rd 
              October 2024. AM/Signal, General Manager/CR, PCSTEs' and CSTE/Projects participated 
              in the Workshop.
            </p>
            <img src={pic3} alt="" />
            <img src={pic4} alt="" />
          </div>

          <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '6rem auto'}}></div>
          
          
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
            <p>
              IRISET signed a MoU with Mahatma Gandhi Institute of Technology, Hyderabad to 
              introduce Railway Signalling and Automatic Train Protection System - KAVACH in BTech 
              Program on 09-08-2024.
            </p>
            <img src={pic5} alt="" />
            <img src={pic6} alt="" />
          </div>


          <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '6rem auto'}}></div>


          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
            <p>
              Technical Notes for KAVACH released by Shri Rahul Agarwal, A M (Signal), 
              Railway Board, in presence of Shri Sudhir Kumar, DG, IRISET in IRISET 
              Conference Hall.
            </p>
            <img src={pic7} alt="" />
          </div>


          <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '6rem auto'}}></div>

          
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
            <p>
              On 24th November 2022 IRISET has Celebrated its 65th Annual Day.
            </p>
            <img src={pic8} alt="" />
            <p>
              Shri R K Mangla, Member Infrastructure/Railway Board, Shri Arun Kumar Jain, 
              General Manager/SCR, Shri Rahul Agarwal, Additional Member (Signal)/Railway Board, 
              and Shri P J Narayanan, Director, IIIT, Hyderabad as Key Note Speaker Graced the 
              Occasion. On this occasion Director General, IRISET has presented Annual Report. 
              Many dignitaries, Senior Officers of S & T and other departments were present. 
              Trainee who excelled in they course for the year 2022 were rewarded. IRISET Technical 
              magazine Gyandeep was released on the Occasion. A delightful cultural program was 
              organized for the entertainment of all the invitees.
            </p>
          </div>


          <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '6rem auto'}}></div>

          
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
            <p>
              On 22-09-2022 IRISET has signed MoU with NIT (National Institute of Technology) 
              Warangal.
            </p>
            <img src={pic9} alt="" />
            <img src={pic10} alt="" />
          </div>


          <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '6rem auto'}}></div>


          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
            <p>
              IRISET Celebrated 76th Independence day with Great enthusiasm and fervor on 
              15th August, 2022, as part of Azadi ka Amrit Mahotsav several sports activities 
              were conducted for trainees and staff of the Institution. Indian National Flags 
              were distributed as part of Central Governments Ghar Ghar Tiranga drive in 
              advance of the Independence day. On the occasion of Independence day Director 
              General Shri Sudhir Kumar, Hoisted the national flag, presided over the parade 
              performed by the Trainee batches. He then presented the works done by IRISET 
              in his speech, and mementoes were distributed to the winners of the events 
              held as part of Azadi ka Amrit Mahostav celebrations
            </p>
            <img src={pic11} alt="" />
            <img src={pic12} alt="" />
          </div>


          <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '6rem auto'}}></div>


          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
            <p>
              On 19-07-2022 IRISET has signed MoU with GCET (Geetanjali College of 
              Engineering and Technology) Hyderabad for FDP and Introduction of open 
              elective subjects viz, Railway Signal engineering and iATP-KAVACH in B.Tech, 
              3rd year courses
            </p>

            <p>
              Dr. S Uday Kumar, Principal, GCET and other HOD’s of GCET were present along 
              with Shri Sudhir Kumar, Director General, Shri P Venkata Ramana, Addl. 
              Director General, Shri Manoj Gurumukhi, Dean, Shri Lalit K Mansukhani, 
              Shri C K Prasad, Sr.Professor (IT & KAVACH), Shri C Neelakanta Reddy, 
              Sr.Professor Trg, Shri Goving Govil, Sr.Professor Admn from IRISET.
            </p>
            <img src={pic13} alt="" />
            <img src={pic14} alt="" />
          </div>


          <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '6rem auto'}}></div>

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
            <p>
              On 18-07-2022 IRISET has signed MoU with CBIT (Chaitanya Bharathi Institute of 
              Technology) Hyderabad for FDP and Introduction of open elective subjects viz, 
              Railway Signal engineering and iATP-KAVACH in B.Tech, 3rdyear courses.
            </p>

            <p>
              Dr. P Ravinder Reddy, Principal, CBIT and other HOD’s of CBIT were present 
              along with Shri P Venkata Ramana, Addl. Director General, Shri C K Prasad, 
              Sr.Professor (IT & KAVACH), Shri D Janardhana, Lecturer (IT & KAVACH) from 
              IRISET.
            </p>
            <img src={pic15} alt="" />
            <img src={pic16} alt="" />
          </div>


          <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '6rem auto'}}></div>

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
            <p>
              On 11-07-2022 IRISET has signed MoU with Vasavi College of Engineering (VCE), 
              Hyderabad for FDP and Introduction of open elective subjects viz, Railway 
              Signal engineering and iATP-KAVACH in B.Tech 3rd year courses.
            </p>
            <img src={pic17} alt="" />
            <img src={pic18} alt="" />
          </div>


          <div style={{height: '0.5px', maxWidth: '45rem', width: '100%', backgroundColor: 'black', margin: '6rem auto'}}></div>

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
            <p>
              IRISET under the Ministry of Railways has signed an MOU with AICTE today to 
              introduce for the first time Safety Critical Railway Technology subjects - '
              Automatic Train Protection: Kavach' and 'Railway Signal Engineering' for 
              B.Tech and M.Tech programs in India
            </p>
            <img src={pic19} alt="" />
            <h2>
              Shri Rajive Kumar, Member Secretary AICTE;<br />
              Shri Anil Sahasrabudhe, Chairman AICTE;<br />
              Shri Venkata Ramana L/A Director General IRISET;<br />
              Shri Nain Singh, Assistant Signal & Telecom Engineer RB <br />
              Shri  (Dr.) Pradeep Bhaskar, Assistant Director AICTE
            </h2>
          </div>

          <h1 style={{color: 'red'}}>
            It is an historic occasion as IR is introducing these subjects for the first 
            time to the universities
          </h1>
        <PageSideFooter />
        </div>
      
    </div>
  )
}

export default Events
