import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/year2023.css';

const Year2023 = () => {
  
  return (
    <div className='year2023'>
      <div className='year2023sidebar'>
        <div className='year2023sidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="year2023sidebarbody">
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


        </div>
      </div>
      <div className="year2023page">
        <PageSideHeader />

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', fontFamily: 'arial', gap: '0.5rem'}}>
            <h4>Details of IPRs of Officers pertaining to year 2023</h4>
            <a href="/files/pdfs/2023/cc_sastry.pdf" target="_blank" rel="noopener noreferrer">Shri C Chandrasekhara Sastry, Addl. Director General</a>
            <a href="/files/pdfs/2023/m_gurumukhi.pdf" target="_blank" rel="noopener noreferrer">Shri Manoj Gurumukhi,Dean</a>
            <a href="/files/pdfs/2023/lk_mansukhani.pdf" target="_blank" rel="noopener noreferrer">Shri Lalit Kumar Mansukhani, OSD for CoE Kavach</a>
            <a href="/files/pdfs/2023/ck_prasad.pdf" target="_blank" rel="noopener noreferrer">Shri C K Prasad, Senior Professor (KAVACH & IT)</a>
            <a href="/files/pdfs/2023/cn_reddy.pdf" target="_blank" rel="noopener noreferrer">Shri C Neelakanta Reddy, Senior Professor Training</a>
            <a href="/files/pdfs/2023/y_ramesh_babu.pdf" target="_blank" rel="noopener noreferrer">Shri Y Ramesh Babu, Senior Professor Signal - I_</a>
            <a href="/files/pdfs/2023/g_govil.pdf" target="_blank" rel="noopener noreferrer">Shri Gaurav Govil, Senior Professor Signal - II</a>
            <a href="/files/pdfs/2023/v_serewal.pdf" target="_blank" rel="noopener noreferrer">Shri Vijay Serewal,_Executive Director (TD) CoE Kavach</a>
            <a href="/files/pdfs/2023/s_namdeo.pdf" target="_blank" rel="noopener noreferrer">Shri Susheel Namdeo, Senior Professor Telecom</a>
            <a href="/files/pdfs/2023/s_verma.pdf" target="_blank" rel="noopener noreferrer">Shri Saurabh Verma, Executive Director (TD) CoE Kavach</a>
            <a href="/files/pdfs/2023/ak_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri A Kalyan Kumar, Professor Signal</a>
            <a href="/files/pdfs/2023/r_dinesh.pdf" target="_blank" rel="noopener noreferrer">Shri R Dinesh, Professor Telecom</a>
            <a href="/files/pdfs/2023/s_hari.pdf" target="_blank" rel="noopener noreferrer">Shri S Hari, Professor Admin</a>
            <a href="/files/pdfs/2023/mm_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri M Muni Kumar, Director (S&T) CoE KACACH</a>
            <a href="/files/pdfs/2023/t_nagaraj.pdf" target="_blank" rel="noopener noreferrer">Shri T Nagaraj, Director (Electrical) CoE KAVACH</a>
        </div>

        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Year2023