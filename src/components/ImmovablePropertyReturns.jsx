import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/immovablepropertyreturns.css';

const ImmovablePropertyReturns = () => {
  
  return (
    <div className='immovablepropertyreturns'>
      <div className='immovablepropertyreturnssidebar'>
        <div className='immovablepropertyreturnssidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="immovablepropertyreturnssidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2023' >Year 2023</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2022' >Year 2022</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2021' >Year 2021</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2020' >Year 2020</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2019' >Year 2019</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2018' >Year 2018</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2017' >Year 2017</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/managementandfaculty' >Management & Faculty</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>    <Link to='/aboutus/reachingiriset' >Reaching IRISET</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/portalpolicies' >Portal Policies</Link>
          </div>


        </div>
      </div>
      <div className="immovablepropertyreturnspage">
        <PageSideHeader />

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', fontFamily: 'arial', gap: '0.5rem'}}>
            <h4>Details of IPRs of Officers for the following years :</h4>
            <Link to='/aboutus/immovablepropertyreturns/year2023' >2023</Link>
            <Link to='/aboutus/immovablepropertyreturns/year2022' >2022</Link>
            <Link to='/aboutus/immovablepropertyreturns/year2021' >2021</Link>
            <Link to='/aboutus/immovablepropertyreturns/year2020' >2020</Link>
            <Link to='/aboutus/immovablepropertyreturns/year2019' >2019</Link>
            <Link to='/aboutus/immovablepropertyreturns/year2018' >2018</Link>
            <Link to='/aboutus/immovablepropertyreturns/year2017' >2017</Link>
        </div>
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default ImmovablePropertyReturns