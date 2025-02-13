import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/year2022.css';

const Year2022 = () => {
  
  return (
    <div className='year2022'>
      <div className='year2022sidebar'>
        <div className='year2022sidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="year2022sidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2023' >Year 2023</Link>
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


        </div>
      </div>
      <div className="year2022page">
        <PageSideHeader />

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', fontFamily: 'arial', gap: '0.5rem'}}>
            <h4>Details of IPRs of Officers pertaining to year 2022</h4>
            <a href="/files/pdfs/2022/s_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri Sudhir Kumar, Director General</a>
            <a href="/files/pdfs/2022/m_gurumukhi.pdf" target="_blank" rel="noopener noreferrer">Shri Manoj Gurumukhi, Dean</a>
            <a href="/files/pdfs/2022/m_gurumukhi.pdf" target="_blank" rel="noopener noreferrer">Shri Lalit Kumar Mansukhani, OSD/CoE</a>
            <a href="/files/pdfs/2022/lk_mansukhani.pdf" target="_blank" rel="noopener noreferrer">Shri C K Prasad, Sr Professor (IT & Kavach)</a>
            <a href="/files/pdfs/2022/cn_reddy.pdf" target="_blank" rel="noopener noreferrer">Shri C Neelakanta Reddy, Sr Professor Training</a>
            <a href="/files/pdfs/2022/y_ramesh_babu.pdf" target="_blank" rel="noopener noreferrer">Shri Y Ramesh Babu, Sr Professor Signal-I</a>
            <a href="/files/pdfs/2022/g_govil.pdf" target="_blank" rel="noopener noreferrer">Shri Gaurav Govil, Sr Professor Signal-II</a>
            <a href="/files/pdfs/2022/s_namdeo.pdf" target="_blank" rel="noopener noreferrer">Shri Susheel Namdeo, Sr Professor Telecom</a>
            <a href="/files/pdfs/2022/ak_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri A Kalyan Kumar, Professor Signal-1</a>
            <a href="/files/pdfs/2022/r_dinesh.pdf" target="_blank" rel="noopener noreferrer">Shri R Dinesh, Professor Telecom </a>
            <a href="/files/pdfs/2022/s_hari.pdf" target="_blank" rel="noopener noreferrer">Shri S Hari, Professor Admin</a>
            <a href="/files/pdfs/2022/t_nagaraj.pdf" target="_blank" rel="noopener noreferrer">Shri T Nagaraj, Dir/Ele/CoE </a>
            <a href="/files/pdfs/2022/v_serewal.pdf" target="_blank" rel="noopener noreferrer">Shri Vijay Serewal, ED/SD/CoE</a>
        </div>

        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Year2022