import React from 'react';
import sourceiconw from '/files/images/sourceiconw.gif';
import top from '/files/images/top.gif';

const PageSideFooter = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <div style={{marginTop: '4rem'}}>
      <div
          onClick={scrollToTop}
          style={{display: 'flex', justifyContent: 'right', cursor: 'pointer'}}>
          <img src={top} alt="img" />
        </div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'right', gap: '1rem'}}>
          <p>
            <span style={{fontWeight: 'bold'}}>Source : </span>Indian Railways Divisional Portal CMS Team Last Reviewed on: 20-09-2023
          </p>

          <img style={{height: '1.3rem', width: '2rem'}} src={sourceiconw} alt="img" />
        </div>
    </div>
  )
}

export default PageSideFooter
