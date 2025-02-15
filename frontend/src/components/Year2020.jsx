import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/year2020.css';

const Year2020 = () => {
  
  return (
    <div className='year2020'>
      <div className='year2020sidebar'>
        <div className='year2020sidebarhead'>
            <Link to='/'>Home</Link>
        </div>
        <div className="year2020sidebarbody">
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
      <div className="year2020page">
        <PageSideHeader />

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', fontFamily: 'arial', gap: '0.5rem'}}>
            <h4>Details of IPRs of Officers pertaining to year 2020</h4>
            <a href="/files/pdfs/2020/sk_goel.pdf" target="_blank" rel="noopener noreferrer">Shri S.K. Goel, Director General</a>
            <a href="/files/pdfs/2020/ch_mohan.pdf" target="_blank" rel="noopener noreferrer">Shri Ch. Mohan, Addl. Director General</a>
            <a href="/files/pdfs/2020/pv_ramana.pdf" target="_blank" rel="noopener noreferrer">Shri P.Venkata Ramana, Dean</a>
            <a href="/files/pdfs/2020/a_kapoor.pdf" target="_blank" rel="noopener noreferrer">Shri Anupam Kapoor, Senior Professor(IT)</a>
            <a href="/files/pdfs/2020/cc_sastry.pdf" target="_blank" rel="noopener noreferrer">Shri C.Chandrasekhara Sastry, Senior Professor Telecom</a>
            <a href="/files/pdfs/2020/kv_reddy.pdf" target="_blank" rel="noopener noreferrer">Shri K.Venkataramana Reddy, Senior Professor Signal</a>
            <a href="/files/pdfs/2020/cn_reddy.pdf" target="_blank" rel="noopener noreferrer">Shri C.Neelakanta Reddy, Senior Professor Training</a>
            <a href="/files/pdfs/2020/y_ramesh_babu.pdf" target="_blank" rel="noopener noreferrer">Shri Y.Ramesh Babu, Senior Professor (Admin)</a>
            <a href="/files/pdfs/2020/ak_kumar.pdf" target="_blank" rel="noopener noreferrer">Shri A.Kalyan Kumar, Professor Signal</a>
            <a href="/files/pdfs/2020/s_hari.pdf" target="_blank" rel="noopener noreferrer">Shri S.Hari, Professor (Admin)</a>
            <a href="/files/pdfs/2020/bbk_murthy.pdf" target="_blank" rel="noopener noreferrer">Shri B.B.K Murthy, Professor Telecom</a>
        </div>
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Year2020