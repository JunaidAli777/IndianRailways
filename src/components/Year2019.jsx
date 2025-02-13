import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/year2019.css';

const Year2019 = () => {
  
  return (
    <div className='year2019'>
      <div className='year2019sidebar'>
        <div className='year2019sidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="year2019sidebarbody">
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
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2018' >Year 2018</Link>
          </div>

          <div>
            <span>&gt;&gt;&nbsp;</span>   <Link to='/aboutus/immovablepropertyreturns/year2017' >Year 2017</Link>
          </div>


        </div>
      </div>
      <div className="year2019page">
        <PageSideHeader />

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', fontFamily: 'arial', gap: '0.5rem'}}>
            <h4>Details of IPRs of Officers pertaining to year 2019</h4>
            <a href="/files/pdfs/2019/sk_goel.pdf" target="_blank" rel="noopener noreferrer">Shri S.K. Goel,  Director General</a>
            <a href="/files/pdfs/2019/ch_mohan.pdf" target="_blank" rel="noopener noreferrer">Shri Ch. Mohan,  Addl. Director General</a>
            <a href="/files/pdfs/2019/pv_ramana.pdf" target="_blank" rel="noopener noreferrer">Shri P. Venkata Ramana, Dean</a>
            <a href="/files/pdfs/2019/a_kapoor.pdf" target="_blank" rel="noopener noreferrer">Shri Anupam Kapoor, Senior Professor(IT)</a>
            <a href="/files/pdfs/2019/cc_sastry.pdf" target="_blank" rel="noopener noreferrer">Shri C.Chandrasekhara Sastry, Senior Professor Telecom</a>
            <a href="/files/pdfs/2019/kv_ramana_reddy.pdf" target="_blank" rel="noopener noreferrer">Shri K. Venkata Ramana Reddy, Senior Professor Signal</a>
            <a href="/files/pdfs/2019/cn_reddy.pdf" target="_blank" rel="noopener noreferrer">Shri C.Neelakanta Reddy, Senior Professor Training </a>
            <a href="/files/pdfs/2019/y_ramesh_babu.pdf" target="_blank" rel="noopener noreferrer">Shri Y.Ramesh Babu, Senior Professor Admin</a>
            <a href="/files/pdfs/2019/ak_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri A.Kalyan Kumar, Professor Signal</a>
            <a href="/files/pdfs/2019/s_hari.pdf" target="_blank" rel="noopener noreferrer">Shri S.Hari, Professor Admin</a>
            <a href="/files/pdfs/2019/bbk_murthy.pdf" target="_blank" rel="noopener noreferrer">Shri B.B.K. Murthy, Professor Telecom</a>
        </div>
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Year2019