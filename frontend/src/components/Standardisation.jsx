import React from 'react';
import { Link } from 'react-router-dom';
import PageSideHeader from './PageSideHeader';
import PageSideFooter from './PageSideFooter';
import './styles/standardisation.css';

const Standardisation = () => {
  
  return (
    <div className='standardisation'>
      <div className="standardisationsidebar">
        <div className="standardisationsidebarhead">
            <Link to='/'>Home</Link>
        </div>
        <div className="standardisationsidebarbody">
        </div>
      </div>
      <div className="standardisationpage">
        <PageSideHeader />
        <div style={{fontFamily: 'arial', padding: '1rem'}}>
            <a href="/files/Standardisation_of_SnT_Drg_ver_2.1.pdf" target="_blank" rel="noopener noreferrer">Standardisation of SnT Drg ver 2.1.pdf</a>
        </div>

        <div className='filelinks'>
            <div>
                <h4>
                    PDF Files
                </h4>
                <a href="/files/pdfs/typical_sip_pdf.pdf" target="_blank" rel="noopener noreferrer">
                    Typical SIP
                </a>
                <ul style={{listStyle: 'none', padding: '0'}}>
                    <li>
                        <a href="files/pdfs/layout_1_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            Layout 1(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/layout_2_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            Layout 2(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/layout_3_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            Layout 3(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/layout_4_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            Layout 4(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/layout_5_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            Layout 5(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/layout_6_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            Layout 6(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/layout_7_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            Layout 7(Double Line)
                        </a>
                    </li>
                </ul>

                <ul style={{listStyle: 'none', padding: '0'}}>
                    <li>
                        <a href="files/pdfs/ict_layout_1_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            ICT Layout 1 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/ict_layout_2_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            ICT Layout 2 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/ict_layout_3_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            ICT Layout 3 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/ict_layout_4_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            ICT Layout 4 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/ict_layout_5_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            ICT Layout 5 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/ict_layout_6_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            ICT Layout 6 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/pdfs/ict_layout_7_doubleline.pdf" target="_blank" rel="noopener noreferrer">
                            ICT Layout 7 (Double Line)
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h4>
                    DWG Files
                </h4>
                <a href="/files/dwgs/typical_sip_dwg.dwg" download>
                    Typical SIP
                </ a>
                <ul style={{listStyle: 'none', padding: '0'}}>
                    <li>
                        <a href="files/dwgs/layout_1_doubleline.dwg" download>
                            Layout 1(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/layout_2_doubleline.dwg" download>
                            Layout 2(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/layout_3_doubleline.dwg" download>
                            Layout 3(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/layout_4_doubleline.dwg" download>
                            Layout 4(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/layout_5_doubleline.dwg" download>
                            Layout 5(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/layout_6_doubleline.dwg" download>
                            Layout 6(Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/layout_7_doubleline.dwg" download>
                            Layout 7(Double Line)
                        </a>
                    </li>
                </ul>

                <ul style={{listStyle: 'none', padding: '0'}}>
                    <li>
                        <a href="files/dwgs/ict_layout_1_doubleline.dwg" download>
                            ICT Layout 1 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/ict_layout_2_doubleline.dwg" download>
                            ICT Layout 2 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/ict_layout_3_doubleline.dwg" download>
                            ICT Layout 3 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/ict_layout_4_doubleline.dwg" download>
                            ICT Layout 4 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/ict_layout_5_doubleline.dwg" download>
                            ICT Layout 5 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/ict_layout_6_doubleline.dwg" download>
                            ICT Layout 6 (Double Line)
                        </a>
                    </li>

                    <li>
                        <a href="files/dwgs/ict_layout_7_doubleline.dwg" download>
                            ICT Layout 7 (Double Line)
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        <PageSideFooter />

        
        </div>
    </div>
  )
}

export default Standardisation
