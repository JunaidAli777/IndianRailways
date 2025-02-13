import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/portalpolicies.css';

const PortalPolicies = () => {
  
  return (
    <div className='portalpolicies'>
      <div className='portalpoliciessidebar'>
        <div className='portalpoliciessidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="portalpoliciessidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/managementandfaculty' >Management & Faculty</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/aboutus/reachingiriset' >Reaching IRISET</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns' >Immovable Property Returns</Link>
          </div>


        </div>
      </div>
      <div className="portalpoliciespage">
        <PageSideHeader />

        <div style={{fontFamily: 'arial'}}>
            <p>
                The users of the portal would like to contact Indian Railway organisations to 
                ask questions, get information, seek clarifications or sort out problems. 
                Therefore it is essential that websites provide them with the means to do that.
            </p>

            <ul>
                <li>
                    All Indian Railways websites must have a 'Contact Us' page, linked from the 
                    Homepage and all relevant places in the website.
                </li>
                <li>
                    The 'Contact Us' page should be categorised according to the various divisions 
                    handling different kind of queries; e.g. grievance redresssal, file status, 
                    procedural details etc.
                </li>
                <li>
                    The contact details for the Important functionaries in the Department must 
                    have the telephone numbers, fax numbers, postal address as well as email 
                    address along with the timings specified for personal public dealing (if 
                    applicable). The content policy of the department should enlist the 
                    functionaries whose details are to be given on the website.
                </li>
                <li>
                    There should be a clear-cut policy for redress (correction) of inaccurate 
                    information found on the website. The contact details of the Web 
                    Information Manager, who is overall responsible for the content on the 
                    website, should be provided.
                </li>
            </ul>

            <div>
                <h4>
                    Presence on the National Portal
                </h4>
                <p>
                    Mechanism must be in place to ensure that all Citizen Services, Forms, 
                    Documents, Schemes are registered with the respective repositories of the 
                    National Portal.
                </p>
            </div>

            <div>
                <h4>
                    Secondary Content
                </h4>
                <p>
                    Secondary content is generated from the assortment and packaging of 
                    primary content to suit the requirement of different audience, events 
                    and occasions.
                </p>
            </div>
            
            <div>
                <h4>
                    Events and Announcements
                </h4>
                <p>
                    Indian Railways websites should have a section to cover various Events 
                    & Announcements such as:
                </p>
                <ol>
                    <li>Announcements having National/State level importance should be published on the website.</li>
                    <li>Announcements related to important upcoming Indian Railways / Government events being organised by a relevant organisation/Ministry/Department/State/Centre.</li>
                    <li>Announcements related to schemes/grants/scholarships/fellowships etc.</li>
                    <li>Warnings of Natural disasters/Epidemics etc.</li>
                    <li>Calls for relief funds during disasters. Help from other agencies.</li>
                    <li>Display of important helpline numbers in case of crisis.</li>
                </ol>
            </div>

            <div>
                <h4>Guidelines relating to events and announcements are:</h4>
                <ol>
                    <li>It is must to take off / archive the announcement once it loses its relevance or after the expiry of the time period attached to the event or happening.</li>
                    <li>All important announcements should also be published on the National Portal for wider access.</li>
                    <li>Announcements should be worded in simple English/Regional language depending on whom it is meant for</li>
                </ol>
            </div>

            <div>
                <h4>Related links</h4>
                <p>For every content topic in different modules of the website, a section should be provided for 'Related Links' to the concerned information.</p>
                <ol>
                    <li>Each content topic covered in the website may have some Related Links to other Government websites which provide further details on the topic.</li>
                    <li>For every Related Link, the complete URL of the Homepage/Concerned webpage must be provided correctly along with the complete title of the Website which shall appear on the screen.</li>
                    <li>The validity and accuracy of the URL must be checked on a regular basis to make sure that the information is relevant and the linked address is correct.</li>
                    <li>Only Government websites/web pages should be provided as 'Related Links' for further information since there is no control over the veracity and availability of information on private websites.</li>
                </ol>
            </div>

        </div>
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default PortalPolicies