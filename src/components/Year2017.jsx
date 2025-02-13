import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/year2017.css';

const Year2017 = () => {
  
  return (
    <div className='year2017'>
      <div className='year2017sidebar'>
        <div className='year2017sidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="year2017sidebarbody">
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


        </div>
      </div>
      <div className="year2017page">
        <PageSideHeader />

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', fontFamily: 'arial', gap: '0.5rem'}}>
            <h4>Details of IPRs of Officers pertaining to year 2017</h4>
            <a href="/files/pdfs/2017/lp_sinha.pdf" target="_blank" rel="noopener noreferrer">Shri L.P.Sinha, Director</a>
            <a href="/files/pdfs/2017/m_kalavathy.pdf" target="_blank" rel="noopener noreferrer">Smt. M.Kalavathy, Dean</a>
            <a href="/files/pdfs/2017/pv_ramana.pdf" target="_blank" rel="noopener noreferrer">Shri P.Venkata Ramana, Senior Professor Signal</a>
            <a href="/files/pdfs/2017/a_kapoor.pdf" target="_blank" rel="noopener noreferrer">Shri Anupam Kapoor, Senior Professor (IT)</a>
            <a href="/files/pdfs/2017/cc_sastry.pdf" target="_blank" rel="noopener noreferrer">Shri C.Chandrasekhara Sastry, Senior Professor Telecom</a>
            <a href="/files/pdfs/2017/r_ranjan.pdf" target="_blank" rel="noopener noreferrer">Shri Rakesh Ranjan, Professor Telecom</a>
            <a href="/files/pdfs/2017/t_ramesh_babu.pdf" target="_blank" rel="noopener noreferrer">Shri T.Ramesh Babu, Professor Signal-1</a>
            <a href="/files/pdfs/2017/km_venkata_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri K.Mani Venkata Kumar, Professor Signal-2</a>
            <a href="/files/pdfs/2017/a_kalyan_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri A.Kalyan Kumar, Professor (Admin)</a>
        </div>
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Year2017