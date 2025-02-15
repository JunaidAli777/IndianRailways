import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/righttoinformation.css';

const RightToInformation = () => {
  
  return (
    <div className='righttoinformation'>
      <div className='righttoinformationsidebar'>
        <div className='righttoinformationsidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="righttoinformationsidebarbody">

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/contactus/disclaimer' >Disclaimer</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/nirpersonnel' >Non-IR Personnel</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/privacypolicy' >Privacy Policy</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/leaveamessage' >Leave A Message</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/tandc' >Terms and Conditions</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/contactus/otherrailwaysites' >Other Railway Sites</Link>
          </div>
        </div>
      </div>

      <div style={{fontFamily: 'arial'}} className="righttoinformationpage">

        <PageSideHeader />

                <p>
                    In terms of sections 5 and 19 of Right of Information Act, 2005, the 
                    following are public authorities  
                </p>

                <p>
                    <strong>I. Public Information Officer</strong> <br />
                    <strong>Mr. S Hari,</strong>Professor Admin, IRISET, Tarnaka Road, Secunderabad - 500 017<br />
                    Phone Number: 070-89808(Rly), 040-27820090(BSNL) Fax Number: 040-27823922(BSNL)
                </p>

                <p>
                    <strong>II. Asst. Public Information Officer</strong> <br />
                    <strong>Mr. T T Anand,</strong>Executive Assistant to Director, IRISET, Tarnaka Road, Secunderabad - 500 017 <br />
                    Phone Number: 070-89842(Rly), 040-27789842(BSNL) Fax Number: 040-27823922(BSNL)
                </p>
                
                <p>
                    <strong>III. Appellate Authority/Officer</strong> <br />      
                    <strong>Mr. C K Prasad,</strong> DEAN , IRISET, Tarnaka Road Secunderabad - 500 017 <br />
                    Phone Number: 070-89802(Rly), 040-27822073(BSNL) Fax Number: 040-27823922(BSNL)
                </p>

                <p>
                    <strong>IV. Accounts Officer  refers to PFA/SCR/SC, Rail Nilayam, Secunderabad - 500 071.</strong>
                </p>

                <p>
                    Rules 1 to 5 of Right to Information (Regualtion of Fee and Cost) 
                    Rules, 2005, notified by Government of India, Ministry of Personnel,
                    Public Grievances and Pesions (Department of Personnel and Training) 
                    vide Notifiction No.34012/8(s/2005-Estt.(B) dated 16th September, 2005 
                    are reproduced below :-
                </p>

                <p>
                    1. Short title and commencement - (1) These rules may be called the Right to Information (Regualtion fo Fee and Cost) Rules, 2005 (2) They shall come into force on the date of their publication in the Official Gazette.
                </p>

                <p>
                    2. Definitions - In the rules, unless the context otherwise requires, <br />
                    (a) 'Act' means the Right of Information Act, 2005; <br />
                    (b) 'Section' means the section of the Act <br />
                    (c) all other words and expressions used herein but not defined and defined in the Act shall have the meanings assigned to them in the Act.
                </p>

                <p>
                    3. A request for obtaining information under sub-section (1) of section 6 shall be accompanied by an application fee of rupees ten by way of cash against proper receipt or by demand draft or bankers cheque payable to the Accounts Officer of the public authority
                </p>

                <p>
                    4. For providing the information under sub-section (1) of section 7, the fee shall be cahrged by way of cash against proper receipt or by demand draft or bankers cheque payable to the Accounts Officer of the public Authority at the following rates:- <br />
                    (a) Rupees two for each page (in A-4 or A-3 size paper) created or copied; <br />
                    (b) actual charge or cost price of a copy in larger size paper <br />
                    (c) actual cost or price for samples or models; and <br />
                    (d) for inspection of records, no fee for the first hour, and a fee of rupees five for each fifteen minutes (or fraction thereof) thereafter
                </p>

                <p>
                    5. For providing the information under sub-section (5) of section 7, the fee shall be charged by way of cash against proper receipt or by demand draft or bankers cheque payable to the Accounts Officer of the public authority at the following rates:- <br />
                    (a) for information provided in diskette or floppy rupees fifty per diskette or floppy; and <br />
                    (b) for information provided in printed form at the price fixed for such publication or rupees two per page of photocopy for extracts from the publication.
                </p>
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default RightToInformation
