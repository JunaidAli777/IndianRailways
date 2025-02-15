import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/year2021.css';

const Year2021 = () => {
  
  return (
    <div className='year2021'>
      <div className='year2021sidebar'>
        <div className='year2021sidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="year2021sidebarbody">
          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2023' >Year 2023</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2022' >Year 2022</Link>
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
      <div className="year2021page">
        <PageSideHeader />

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', fontFamily: 'arial', gap: '0.5rem'}}>
            <h4>Details of IPRs of Officers pertaining to year 2021</h4>
            <a href="/files/pdfs/2021/sudhir_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri Sudhir Kumar, Director General</a>
            <a href="/files/pdfs/2021/pv_ramana.pdf" target="_blank" rel="noopener noreferrer">Shri P. Venkata Ramana, Addl. Director General</a>
            <a href="/files/pdfs/2021/m_gurumukhi.pdf" target="_blank" rel="noopener noreferrer">Shri Manoj Gurumukhi, DEAN</a>
            <a href="/files/pdfs/2021/l_mansukhani.pdf" target="_blank" rel="noopener noreferrer">Shri Lalit Mansukhani, OSD for COE</a>
            <a href="/files/pdfs/2021/ck_prasad.pdf" target="_blank" rel="noopener noreferrer">Shri C.K.PRASAD, Senior Professor (KAVACH & IT)</a>
            <a href="/files/pdfs/2021/cn_reddy.pdf" target="_blank" rel="noopener noreferrer">Shri C.Neelakanta Reddy, Senior Professor Trianing</a>
            <a href="/files/pdfs/2021/y_ramesh_babu.pdf" target="_blank" rel="noopener noreferrer">Shri Y.Raesh Babu, Senior Professor Signal</a>
            <a href="/files/pdfs/2021/g_govil.pdf" target="_blank" rel="noopener noreferrer">Shri Gaurav Govil, Sr Professor Admin</a>
            <a href="/files/pdfs/2021/s_namdeo.pdf" target="_blank" rel="noopener noreferrer">Shri Susheel Namdeo, Senior Professor Telecom</a>
            <a href="/files/pdfs/2021/ak_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri A.Kalyan Kumar, Professor Signal 1</a>
            <a href="/files/pdfs/2021/r_dinesh.pdf" target="_blank" rel="noopener noreferrer">Shri R.Dinesh, Professor Telecom</a>
            <a href="/files/pdfs/2021/s_hari.pdf" target="_blank" rel="noopener noreferrer">Shri S.Hari, Professor Admin</a>
            <a href="/files/pdfs/2021/t_nagaraj.pdf" target="_blank" rel="noopener noreferrer">Shri T. Nagaraj, Dir/Ele/CoE</a>
        </div>

        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Year2021