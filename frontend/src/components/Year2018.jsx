import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/year2018.css';

const Year2018 = () => {
  
  return (
    <div className='year2018'>
      <div className='year2018sidebar'>
        <div className='year2018sidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="year2018sidebarbody">
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
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2017' >Year 2017</Link>
          </div>


        </div>
      </div>
      <div className="year2018page">
        <PageSideHeader />

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', fontFamily: 'arial', gap: '0.5rem'}}>
            <h4>Details of IPRs of Officers pertaining to year 2018</h4>
            <a href="/files/pdfs/2018/rk_jain.pdf" target="_blank" rel="noopener noreferrer">Shri Rakesh Kumar Jain, Director</a>
            <a href="/files/pdfs/2018/pv_ramana.pdf" target="_blank" rel="noopener noreferrer">Shri P. Venkata Ramana, Dean</a>
            <a href="/files/pdfs/2018/a_kapoor.pdf" target="_blank" rel="noopener noreferrer">Shri Anupam Kapoor, Senior Professor Training</a>
            <a href="/files/pdfs/2018/cc_sastry.pdf" target="_blank" rel="noopener noreferrer">Shri C.Chandrasekhara Sastry, Senior Professor Telecom</a>
            <a href="/files/pdfs/2018/km_venkat_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri K.Mani Venkata Kumar, Professor Signal-2</a>
            <a href="/files/pdfs/2018/a_kalyan_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri A.Kalyan Kumar, Professor Signal-1</a>
            <a href="/files/pdfs/2018/s_hari.pdf" target="_blank" rel="noopener noreferrer">Shri S.Hari, Professor (Admin)</a>
            <a href="/files/pdfs/2018/bbk_murthy.pdf" target="_blank" rel="noopener noreferrer">Shri B.B.K. Murthy, Professor Telecom</a>
        </div>

        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Year2018